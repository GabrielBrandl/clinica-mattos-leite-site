"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "ok" | "error";

export function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const [dateValue, setDateValue] = useState("");

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

  function periodsForDate(dateStr: string) {
    if (!dateStr) return [] as string[];
    const day = new Date(dateStr + "T12:00:00").getDay();
    if (day === 0 || day === 6) return [];
    if (day === 5) return ["Manhã (08:00–12:00)"];
    return ["Manhã (08:00–12:00)", "Tarde (12:00–18:00)"];
  }

  const periods = periodsForDate(dateValue);

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
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") || "").trim();
    const phone = String(data.get("telefone") || "").trim();
    const patient = String(data.get("paciente") || "").trim();
    const date = String(data.get("data") || "").trim();
    const period = String(data.get("periodo") || "").trim();
    const notes = String(data.get("observacoes") || "").trim();
    const day = date ? new Date(date + "T12:00:00").getDay() : -1;

    if (
      !consent ||
      !name ||
      !phone ||
      !specialty ||
      !date ||
      !period ||
      day === 0 ||
      day === 6
    ) {
      setStatus("error");
      return;
    }

    const text = [
      "Olá! Gostaria de agendar uma consulta na Clínica Mattos Leite.",
      "",
      `Nome: ${name}`,
      patient ? `Paciente: ${patient}` : null,
      `Telefone/WhatsApp: ${phone}`,
      `Especialidade: ${specialty}`,
      `Data preferencial: ${date}`,
      `Período: ${period}`,
      notes ? `Observações: ${notes}` : null,
      "",
      "(Formulário do site — consentimento LGPD)",
      "Aguardo confirmação conforme agenda (Seg–Qui 8–18 / Sex 8–12).",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("ok");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="border border-navy-900/10 bg-surface p-4 sm:p-6 md:p-8">
      <div className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
        <span className={step === 1 ? "text-navy-900" : "text-ink-muted"}>
          1. Especialidade
        </span>
        {" · "}
        <span className={step === 2 ? "text-navy-900" : "text-ink-muted"}>
          2. Dados e horário
        </span>
      </div>

      {step === 1 ? (
        <form onSubmit={next} className="space-y-5" noValidate>
          <fieldset className="space-y-3">
            <legend className="mb-2 text-sm font-medium text-ink">
              Especialidade *
            </legend>
            {site.specialties.map((item) => (
              <label
                key={item.slug}
                className="flex cursor-pointer items-start gap-3 border border-navy-900/10 p-4 hover:border-mint"
              >
                <input
                  type="radio"
                  name="especialidade"
                  value={item.title}
                  checked={specialty === item.title}
                  onChange={() => setSpecialty(item.title)}
                  className="mt-1 accent-navy-800"
                  required
                />
                <span>
                  <span className="block font-serif text-xl text-navy-900">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {item.catchphrase}
                  </span>
                </span>
              </label>
            ))}
          </fieldset>
          {status === "error" ? (
            <p className="text-sm text-red-700" role="alert">
              Selecione uma especialidade.
            </p>
          ) : null}
          <button
            type="submit"
            className="touch-target inline-flex w-full items-center justify-center rounded-sm bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white sm:w-auto"
          >
            Continuar
          </button>
        </form>
      ) : (
        <form onSubmit={submit} className="space-y-5" noValidate>
          <p className="text-sm text-ink-muted">
            Especialidade: <strong className="text-ink">{specialty}</strong>{" "}
            <button
              type="button"
              className="text-navy-800 underline"
              onClick={() => setStep(1)}
            >
              alterar
            </button>
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Seu nome *</span>
              <input
                name="nome"
                required
                maxLength={120}
                className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">WhatsApp *</span>
              <input
                name="telefone"
                type="tel"
                required
                inputMode="tel"
                maxLength={20}
                className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">
              Nome do paciente (se diferente)
            </span>
            <input
              name="paciente"
              maxLength={120}
              className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
            />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Data preferencial *</span>
              <input
                name="data"
                type="date"
                required
                min={minDate}
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Período *</span>
              <select
                name="periodo"
                required
                defaultValue=""
                className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
              >
                <option value="" disabled>
                  {periods.length ? "Selecione" : "Escolha uma data útil"}
                </option>
                {periods.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-xs text-ink-muted">
            Seg–Qui 8h–18h · Sex 8h–12h · Fechado sábados, domingos e feriados.
          </p>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Observações</span>
            <textarea
              name="observacoes"
              rows={3}
              maxLength={400}
              className="input-mobile w-full border border-navy-900/20 px-3 py-3 outline-none focus:border-mint"
              placeholder="Evite dados clínicos sensíveis."
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
              Autorizo o tratamento dos dados para retorno do agendamento
              (LGPD /{" "}
              <a href="/privacidade" className="underline">
                Privacidade
              </a>
              ). *
            </span>
          </label>

          {status === "error" ? (
            <p className="text-sm text-red-700" role="alert">
              Preencha os campos, escolha dia útil e confirme o consentimento.
            </p>
          ) : null}
          {status === "ok" ? (
            <p className="text-sm text-navy-800" role="status">
              Abrindo WhatsApp…
            </p>
          ) : null}

          <button
            type="submit"
            className="touch-target inline-flex items-center justify-center rounded-sm bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white"
          >
            Enviar solicitação no WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
