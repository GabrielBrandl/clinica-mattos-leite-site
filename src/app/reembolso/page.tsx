import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Reembolso",
  description: `Política de cancelamento e reembolso de consultas da ${site.name}.`,
};

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso" updated="16 de novembro de 2026">
      <p>
        Esta política descreve orientações gerais sobre cancelamento e reembolso
        de consultas na {site.name} ({site.legalName}, CNPJ {site.cnpj}).
      </p>

      <h2 className="font-serif text-2xl text-olive-900">1. Natureza do serviço</h2>
      <p>
        Consultas médicas são serviços de saúde personalizados. Condições
        específicas de pagamento, valores e prazos devem ser confirmadas no
        momento do agendamento.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">2. Cancelamento</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Solicitamos aviso prévio razoável (preferencialmente com 24 horas) para
          remarcação ou cancelamento;
        </li>
        <li>
          Faltas sem aviso podem impedir o reembolso do valor eventualmente
          antecipado, conforme combinado no agendamento;
        </li>
        <li>
          Cancelamentos feitos com antecedência adequada serão tratados com
          remarcação ou reembolso, quando houver pagamento antecipado.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-olive-900">3. Reembolso</h2>
      <p>
        Havendo pagamento antecipado e cancelamento elegível, o reembolso será
        processado pelo mesmo meio de pagamento ou outro acordado, em prazo
        informado pela clínica. Planos de saúde seguem regras da operadora.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">4. Exceções</h2>
      <p>
        Situações de força maior, emergência médica documentada ou erro
        operacional da clínica serão analisadas individualmente, com prioridade
        ao interesse do paciente e às normas aplicáveis.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">5. Contato</h2>
      <p>
        Para solicitar cancelamento ou reembolso: {site.email} |{" "}
        {site.phoneDisplay} | WhatsApp disponível no site.
      </p>

      <p className="text-sm text-ink-muted">
        Este documento é informativo e não substitui eventual contrato,
        recibo ou orientação específica dada no atendimento.
      </p>
    </LegalPage>
  );
}
