import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade e conformidade LGPD da ${site.name}.`,
};

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="16 de novembro de 2026">
      <p>
        Esta Política descreve como a {site.name} ({site.legalName}, CNPJ{" "}
        {site.cnpj}) trata dados pessoais no site e em canais de contato
        digitais, em conformidade com a Lei Geral de Proteção de Dados (LGPD —
        Lei nº 13.709/2018).
      </p>

      <h2 className="font-serif text-2xl text-olive-900">1. Controlador</h2>
      <p>
        Controlador: {site.legalName}, com sede em {site.address.full}. Contato
        do encarregado/atendimento de privacidade: {site.email} |{" "}
        {site.phoneDisplay}.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">
        2. Dados que coletamos
      </h2>
      <p>Coletamos apenas o necessário para as finalidades abaixo:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Nome, telefone/WhatsApp, especialidade de interesse e mensagem;</li>
        <li>
          Dados técnicos mínimos de navegação (logs de segurança, cookies
          essenciais);
        </li>
        <li>
          Dados de analytics somente se houver consentimento (ver Aviso de
          Cookies).
        </li>
      </ul>
      <p>
        Pedimos que você <strong>não envie</strong> dados sensíveis de saúde
        pelo formulário do site. Informações clínicas devem ser tratadas em
        consulta.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">3. Finalidades</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Retornar solicitações de agendamento e informações;</li>
        <li>Operar e proteger o site;</li>
        <li>
          Medir audiência de forma agregada, quando autorizado;
        </li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2 className="font-serif text-2xl text-olive-900">
        4. Bases legais (LGPD)
      </h2>
      <p>
        Utilizamos, conforme o caso: consentimento (art. 7º, I), execução de
        procedimentos preliminares relacionados a contrato/serviço solicitado
        (art. 7º, V), legítimo interesse para segurança do site (art. 7º, IX) e
        cumprimento de obrigação legal (art. 7º, II).
      </p>

      <h2 className="font-serif text-2xl text-olive-900">5. Compartilhamento</h2>
      <p>
        Podemos compartilhar dados com prestadores essenciais (hospedagem,
        WhatsApp/Meta quando você inicia conversa, Google Maps para localização)
        e autoridades quando exigido por lei. Não vendemos dados pessoais.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">6. Retenção</h2>
      <p>
        Mantemos dados de contato pelo tempo necessário para atender a
        solicitação e eventuais obrigações legais. Você pode pedir exclusão
        quando aplicável.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">7. Seus direitos</h2>
      <p>
        Nos termos da LGPD, você pode solicitar confirmação de tratamento,
        acesso, correção, anonimização, portabilidade, eliminação, informação
        sobre compartilhamentos e revogação de consentimento. Contato:{" "}
        {site.email}.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os
        dados. Nenhum sistema é integralmente isento de riscos; em caso de
        incidente relevante, seguiremos as exigências legais aplicáveis.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">9. Atualizações</h2>
      <p>
        Esta política pode ser atualizada. A data no topo indica a versão
        vigente.
      </p>
    </LegalPage>
  );
}
