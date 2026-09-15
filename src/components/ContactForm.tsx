"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/LocaleProvider";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  profile: "entreprise" | "pouvoirs-publics" | "association" | "autre";
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  profile: "entreprise",
  message: "",
};

export default function ContactForm() {
  const { t } = useLocale();
  const c = t.contact;
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    }
  }

  const inputClasses =
    "mt-2 w-full border border-line bg-transparent px-0 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground-muted/60 focus:border-accent";
  const labelClasses = "text-xs font-medium uppercase tracking-widest text-foreground-muted";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {c.fieldName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder={c.fieldNamePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            {c.fieldEmail}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder={c.fieldEmailPlaceholder}
          />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClasses}>
            {c.fieldCompany}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder={c.fieldCompanyPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="profile" className={labelClasses}>
            {c.fieldProfile}
          </label>
          <select
            id="profile"
            name="profile"
            value={form.profile}
            onChange={handleChange}
            className={`${inputClasses} bg-background`}
          >
            <option value="entreprise">{c.profileOptions.company}</option>
            <option value="pouvoirs-publics">{c.profileOptions.publicSector}</option>
            <option value="association">{c.profileOptions.association}</option>
            <option value="autre">{c.profileOptions.other}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          {c.fieldMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder={c.fieldMessagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-solid w-full px-6 py-3.5 text-xs font-medium uppercase tracking-widest disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? c.submitLoading : c.submit}
      </button>

      {status === "success" && (
        <p className="border border-line px-4 py-3 text-sm text-foreground-muted">
          {c.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="border border-line px-4 py-3 text-sm text-foreground-muted">
          {errorMessage ?? c.errorMessageDefault}
        </p>
      )}
    </form>
  );
}


