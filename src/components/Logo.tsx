type LogoProps = {
  className?: string;
  dark?: boolean;
};

/**
 * Wordmark "A2PA" recréé en typographie (police serif + chiffre "2" en or
 * avec une fine ligne dessous), inspiré du monogramme fourni par le client.
 * Aucune image bitmap n'est utilisée : tout est du texte/CSS pour rester
 * net à toutes les résolutions et léger en poids de page.
 * `dark` = true quand le logo doit s'afficher clair (sur fond sombre du hero).
 */
export default function Logo({ className = "", dark = false }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className}`}
    >
      <span
        className={`font-serif text-lg tracking-[0.35em] ${
          dark ? "text-ivory" : "text-foreground"
        }`}
      >
        A<span className="text-gold">2</span>PA
      </span>
      <span className="mt-1.5 h-px w-8 bg-gold" />
    </span>
  );
}

