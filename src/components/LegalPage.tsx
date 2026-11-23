import Link from "next/link";
import { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-14 md:px-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive-700 sm:text-xs sm:tracking-[0.22em]">
        Documento legal
      </p>
      <h1 className="section-title mt-3">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">Última atualização: {updated}</p>
      <div className="prose-legal mt-8 space-y-5 text-[0.98rem] leading-relaxed text-ink sm:mt-10 [overflow-wrap:anywhere]">
        {children}
      </div>
      <p className="mt-12 text-sm">
        <Link href="/" className="font-medium text-olive-800 underline">
          Voltar à página inicial
        </Link>
      </p>
    </article>
  );
}
