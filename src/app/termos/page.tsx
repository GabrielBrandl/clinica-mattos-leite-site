import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: `Termos de uso do site da ${site.name}.`,
};

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Serviço" updated="16 de novembro de 2026">
      <p>
        Ao utilizar o site da {site.name} ({site.legalName}, CNPJ {site.cnpj}),
        você concorda com estes Termos.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">1. Objeto</h2>
      <p>
        Este site tem finalidade informativa e de facilitação de contato para
        agendamento de consultas. Não constitui oferta clínica online nem
        substitui atendimento médico presencial.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">
        2. Conteúdo e limitações
      </h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Informações clínicas gerais não devem ser interpretadas como
          diagnóstico, prescrição ou garantia de resultado;
        </li>
        <li>
          Não publicamos avaliações fabricadas nem promessas terapêuticas
          enganosas;
        </li>
        <li>
          Disponibilidade de agenda, valores e cobertura por planos devem ser
          confirmados diretamente com a clínica.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-olive-900">3. Conduta do usuário</h2>
      <p>
        É vedado utilizar o site para fins ilícitos, envio de conteúdo ofensivo,
        spam, tentativa de acesso não autorizado ou inserção de dados de
        terceiros sem autorização.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">4. Propriedade intelectual</h2>
      <p>
        Marca, logotipo, textos e elementos visuais da {site.name} são protegidos.
        É proibida reprodução sem autorização, salvo uso permitido por lei.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">5. Links de terceiros</h2>
      <p>
        Links para Instagram, Doctoralia, Google Maps e WhatsApp são de
        responsabilidade dos respectivos operadores. Recomendamos revisar as
        políticas desses serviços.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">6. Responsabilidade</h2>
      <p>
        Empregamos diligência razoável na manutenção do site, mas não garantimos
        disponibilidade ininterrupta. Em nenhuma hipótese o conteúdo do site
        substitui avaliação médica individualizada.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais é regido pela Política de Privacidade e
        pelo Aviso de Cookies.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">8. Foro</h2>
      <p>
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da
        comarca de Manaus/AM, sem prejuízo de normas de proteção ao consumidor.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">9. Contato</h2>
      <p>
        Dúvidas: {site.email} | {site.phoneDisplay} | {site.address.full}.
      </p>
    </LegalPage>
  );
}
