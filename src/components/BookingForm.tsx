"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "ok" | "error";

const periods = ["Manhã", "Tarde", "Horário flexível"] as const;

export function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  useEffect(() => {
    const slug = searchParams.get("especialidade");
    const match = site.specialties.find((item) => item.slug === slug);
    if (match) setSpecialty(match.title);
  }, [searchParams]);

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!specialty) {
      setStatus("error");
      return;
    }
    setStatus("idle");
    setStep(2);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("nome") || "").trim();
    const phone = String(data.get("telefone") || "").trim();
    const patient = String(data.get("paciente") || "").trim();
    const date = String(data.get("data") || "").trim();
    const period = String(data.get("periodo") || "").trim();
    const notes = String(data.get("observacoes") || "").trim();

    if (!consent || !name || !phone || !specialty || !date || !period) {
      setStatus("error");
      return;
    }

    const text = [
      "Olá! Gostaria de agendar uma consulta na Clínica Mundi.",
      "",
      `Nome do responsável: ${name}`,
      patient ? `Paciente: ${patient}` : null,
      `Telefone/WhatsApp: ${phone}`,
      `Especialidade: ${specialty}`,
      `Data preferencial: ${date}`,
      `Período: ${period}`,
      notes ? `Observações: ${notes}` : null,
      "",
      "(Solicitação pelo formulário de agendamento do site — com consentimento LGPD)",
      "Aguardo retorno para confirmar disponibilidade.",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("ok");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="border border-olive-700/15 bg-surface p-4 sm:p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
        <span className={step === 1 ? "text-olive-900" : "text-ink-muted"}>
          1. Especialidade
        </span>
        <span aria-hidden>·</span>
        <span className={step === 2 ? "text-olive-900" : "text-ink-muted"}>
          2. Dados e horário
        </span>
      </div>

      {step === 1 ? (
        <form onSubmit={next} className="space-y-5" noValidate>
          <p className="text-sm leading-relaxed text-ink-muted">
            Escolha a especialidade. Na próxima etapa, informamos apenas os
            dados necessários para retornar o agendamento.
          </p>
          <fieldset className="space-y-3">
            <legend className="mb-2 text-sm font-medium text-ink">
              Especialidade *
            </legend>
            {site.specialties.map((item) => (
              <label
                key={item.slug}
                className="flex cursor-pointer items-start gap-3 border border-olive-700/15 p-4 transition hover:border-olive-700/40"
              >
                <input
                  type="radio"
                  name="especialidade"
                  value={item.title}
                  checked={specialty === item.title}
                  onChange={() => setSpecialty(item.title)}
                  className="mt-1 accent-olive-800"
                  required
                />
                <span>
                  <span className="block font-serif text-xl text-olive-900">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {item.short}
                  </span>
                </span>
              </label>
            ))}
          </fieldset>
          {status === "error" ? (
            <p className="text-sm text-red-800" role="alert">
              Selecione uma especialidade para continuar.
            </p>
          ) : null}
          <button
            type="submit"
            className="touch-target inline-flex w-full items-center justify-center rounded-sm bg-olive-800 px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-olive-700 sm:w-auto"
          >
            Continuar
          </button>
        </form>
      ) : (
        <form onSubmit={submit} className="space-y-5" noValidate>
          <p className="text-sm text-ink-muted">
            Especialidade selecionada:{" "}
            <strong className="text-ink">{specialty}</strong>{" "}
            <button
              type="button"
              className="ml-2 text-olive-800 underline"
              onClick={() => setStep(1)}
            >
              alterar
            </button>
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">
                Seu nome *
              </span>
              <input
                name="nome"
                required
                autoComplete="name"
                maxLength={120}
                className="input-mobile w-full rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
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
                className="input-mobile w-full rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink">
              Nome do paciente (se diferente)
            </span>
            <input
              name="paciente"
              maxLength={120}
              className="input-mobile w-full rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
            />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">
                Data preferencial *
              </span>
              <input
                name="data"
                type="date"
                required
                min={minDate}
                className="input-mobile w-full rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">Período *</span>
              <select
                name="periodo"
                required
                defaultValue=""
                className="input-mobile w-full rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {periods.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink">
              Observações (opcional)
            </span>
            <textarea
              name="observacoes"
              rows={3}
              maxLength={400}
              placeholder="Ex.: primeira consulta, preferência de médico(a), retorno. Evite dados clínicos sensíveis."
              className="input-mobile w-full resize-y rounded-sm border border-olive-700/25 bg-cream-soft px-3 py-3 outline-none focus:border-olive-700"
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
              Autorizo o tratamento dos meus dados para retorno do agendamento,
              conforme a{" "}
              <a href="/privacidade" className="font-medium text-olive-800 underline">
                Política de Privacidade
              </a>{" "}
              e a LGPD. *
            </span>
          </label>

          {status === "error" ? (
            <p className="text-sm text-red-800" role="alert">
              Preencha os campos obrigatórios e o consentimento LGPD.
            </p>
          ) : null}
          {status === "ok" ? (
            <p className="text-sm text-olive-800" role="status">
              Abrindo o WhatsApp com sua solicitação…
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="touch-target inline-flex items-center justify-center rounded-sm bg-olive-800 px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-olive-700"
            >
              Enviar solicitação no WhatsApp
            </button>
            <a
              href={site.doctoralia}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center justify-center rounded-sm border border-olive-700/30 px-5 py-3.5 text-sm font-semibold text-olive-900"
            >
              Ver também no Doctoralia
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
