import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de Cookies",
  description: `Aviso de cookies e preferências de tracking da ${site.name}.`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Aviso de Cookies" updated="16 de novembro de 2026">
      <p>
        Este aviso explica como a {site.name} utiliza cookies e tecnologias
        semelhantes no site.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos armazenados no seu dispositivo para
        lembrar preferências, manter segurança e, se autorizado, medir o uso do
        site.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">2. Categorias</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Essenciais:</strong> necessários ao funcionamento (ex.:
          lembrar sua escolha de cookies). Não exigem consentimento além do
          estritamente necessário.
        </li>
        <li>
          <strong>Analytics (opcionais):</strong> scripts de medição (ex.: Google
          Analytics) só são carregados após consentimento explícito no banner.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-olive-900">3. Como gerenciar</h2>
      <p>
        Você pode aceitar analytics ou manter apenas cookies essenciais no
        banner exibido na primeira visita. Também pode limpar cookies no
        navegador e revisitar o site para escolher novamente.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">4. Terceiros</h2>
      <p>
        Embeds de mapa (Google) e redirecionamentos (WhatsApp, Instagram,
        Doctoralia) podem definir cookies próprios quando você interage com
        esses serviços.
      </p>

      <h2 className="font-serif text-2xl text-olive-900">5. Contato</h2>
      <p>
        Dúvidas sobre cookies e privacidade: {site.email}. Consulte também a
        Política de Privacidade.
      </p>
    </LegalPage>
  );
}
