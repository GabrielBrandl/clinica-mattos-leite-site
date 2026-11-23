"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

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
      `Especialidade de interesse: ${specialty}`,
      message ? `Mensagem: ${message}` : null,
      "",
      "(Enviado pelo formulário do site — com consentimento LGPD)",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("ok");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    form.reset();
    setConsent(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-describedby="form-lgpd-note"
    >
      <p id="form-lgpd-note" className="text-sm leading-relaxed text-ink-muted">
        Coletamos apenas os dados necessários para retornar o contato. Campos
        marcados com * são obrigatórios.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Nome completo *</span>
          <input
            name="nome"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            className="input-mobile w-full rounded-sm border border-olive-700/25 bg-surface px-3 py-3 text-ink outline-none transition focus:border-olive-700"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Telefone / WhatsApp *
          </span>
          <input
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            placeholder="(92) 90000-0000"
            className="input-mobile w-full rounded-sm border border-olive-700/25 bg-surface px-3 py-3 text-ink outline-none transition focus:border-olive-700"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Especialidade *</span>
        <select
          name="especialidade"
          required
          defaultValue=""
          className="input-mobile w-full rounded-sm border border-olive-700/25 bg-surface px-3 py-3 text-ink outline-none transition focus:border-olive-700"
        >
          <option value="" disabled>
            Selecione
          </option>
          {site.specialties.map((item) => (
            <option key={item.slug} value={item.title}>
              {item.title}
            </option>
          ))}
          <option value="Outro / Dúvida">Outro / Dúvida</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">
          Mensagem (opcional)
        </span>
        <textarea
          name="mensagem"
          rows={4}
          maxLength={500}
          className="input-mobile w-full resize-y rounded-sm border border-olive-700/25 bg-surface px-3 py-3 text-ink outline-none transition focus:border-olive-700"
          placeholder="Conte brevemente o motivo do contato, sem dados sensíveis de saúde."
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-olive-800"
          required
        />
        <span>
          Autorizo o tratamento dos meus dados pessoais para retorno do contato,
          conforme a{" "}
          <a href="/privacidade" className="font-medium text-olive-800 underline">
            Política de Privacidade
          </a>{" "}
          e a LGPD. *
        </span>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="submit"
          className="touch-target inline-flex w-full items-center justify-center rounded-sm bg-olive-800 px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-olive-700 sm:w-auto"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="text-xs leading-relaxed text-ink-muted" role="status" aria-live="polite">
          {status === "ok"
            ? "Abrindo o WhatsApp com sua mensagem…"
            : status === "error"
              ? "Preencha os campos obrigatórios e o consentimento LGPD."
              : `Ou ligue para ${site.phoneDisplay}`}
        </p>
      </div>
    </form>
  );
}
