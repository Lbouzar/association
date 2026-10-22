<?php
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["error" => "Corp de cerere invalid."]);
    exit;
}

$name = isset($data["name"]) ? trim((string)$data["name"]) : "";
$email = isset($data["email"]) ? trim((string)$data["email"]) : "";
$company = isset($data["company"]) ? trim((string)$data["company"]) : "";
$profile = isset($data["profile"]) ? trim((string)$data["profile"]) : "";
$message = isset($data["message"]) ? trim((string)$data["message"]) : "";

if (mb_strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 6) {
    http_response_code(400);
    echo json_encode(["error" => "Te rugăm să completezi câmpurile obligatorii din formular."]);
    exit;
}

// Empêcher l'injection d'en-têtes email
$safeEmail = str_replace(["\r", "\n"], "", $email);
$safeName = str_replace(["\r", "\n"], " ", $name);

$to = "contact@a2pa.eu";
$subject = "Mesaj nou de pe site-ul A2PA — " . $safeName;

$body  = "Ai primit un mesaj nou prin formularul de contact A2PA:\n\n";
$body .= "Nume: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Organizație: " . ($company !== "" ? $company : "-") . "\n";
$body .= "Profil: " . ($profile !== "" ? $profile : "-") . "\n\n";
$body .= "Mesaj:\n" . $message . "\n";

$domain = isset($_SERVER["HTTP_HOST"]) ? preg_replace('/^www\./', '', $_SERVER["HTTP_HOST"]) : "a2pa.eu";
$fromAddress = "noreply@" . $domain;

$headers  = "From: A2PA Website <" . $fromAddress . ">\r\n";
$headers .= "Reply-To: " . $safeName . " <" . $safeEmail . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Mesajul nu a putut fi trimis. Vă rugăm să ne scrieți direct la contact@a2pa.eu."]);
}
