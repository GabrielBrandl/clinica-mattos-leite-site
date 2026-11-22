"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!consent) {
      setStatus("error");
      return;
    }
    const name = String(data.get("nome") || "").trim();
    const phone = String(data.get("telefone") || "").trim();
    const specialty = String(data.get("especialidade") || "").trim();
    const message = String(data.get("mensagem") || "").trim();
    if (!name || !phone || !specialty) {
      setStatus("error");
      return;
    }
    const text = [
      `Olá! Meu nome é ${name}.`,
      `Telefone: ${phone}`,
      `Assunto: ${specialty}`,
      message ? `Mensagem: ${message}` : null,
      "",
      "(Formulário do site — LGPD)",
    ]
      .filter(Boolean)
      .join("\n");
    setStatus("ok");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
    setConsent(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="text-sm text-ink-muted">
        Coletamos só o necessário para retornar o contato.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Nome *</span>
          <input
            name="nome"
            required
            className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">WhatsApp *</span>
          <input
            name="telefone"
            type="tel"
            required
            className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">Assunto *</span>
        <select
          name="especialidade"
          required
          defaultValue=""
          className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
        >
          <option value="" disabled>
            Selecione
          </option>
          {site.specialties.map((item) => (
            <option key={item.slug} value={item.title}>
              {item.title}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">Mensagem</span>
        <textarea
          name="mensagem"
          rows={4}
          maxLength={500}
          className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 accent-navy-800"
          required
        />
        <span>
          Autorizo o tratamento dos dados conforme a{" "}
          <a href="/privacidade" className="underline">
            Política de Privacidade
          </a>
          . *
        </span>
      </label>
      <button
        type="submit"
        className="touch-target inline-flex w-full items-center justify-center rounded-sm bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white sm:w-auto"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-ink-muted" role="status">
        {status === "ok"
          ? "Abrindo WhatsApp…"
          : status === "error"
            ? "Preencha os campos e o consentimento."
            : `Ou ligue ${site.phoneDisplay}`}
      </p>
    </form>
  );
}
