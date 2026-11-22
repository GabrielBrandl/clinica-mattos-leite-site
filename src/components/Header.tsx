"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/#localizacao", label: "Localização" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5 md:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          aria-label={`${site.name} — página inicial`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-secundaria.png"
            alt={site.name}
            width={220}
            height={56}
            className="h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[240px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-mint"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/agendar"
            className="hidden rounded-sm bg-mint px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-mint-soft md:inline-flex"
          >
            Agendar consulta
          </Link>
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-white/25 px-3 text-sm font-semibold text-white xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-[61px] z-50 overflow-y-auto bg-navy-900 px-4 py-5 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-sm px-2 py-3.5 text-lg font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/agendar"
                className="inline-flex w-full items-center justify-center rounded-sm bg-mint px-4 py-3.5 text-base font-semibold text-navy-900"
                onClick={() => setOpen(false)}
              >
                Agendar consulta
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
