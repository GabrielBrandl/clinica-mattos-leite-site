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
    <header className="sticky top-0 z-50 border-b border-olive-700/15 bg-cream-soft/95 backdrop-blur-md supports-[backdrop-filter]:bg-cream-soft/88">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5 sm:py-3 md:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-sm sm:gap-3"
          aria-label={`${site.name} — página inicial`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-olive-700/20 transition duration-500 group-hover:scale-[1.03] sm:h-11 sm:w-11"
            priority
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate font-serif text-base tracking-wide text-olive-900 sm:text-lg">
              {site.name}
            </p>
            <p className="truncate text-[0.58rem] font-medium uppercase tracking-[0.14em] text-ink-muted sm:text-[0.62rem] sm:tracking-[0.22em]">
              {site.tagline}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition hover:text-olive-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/agendar"
            className="hidden rounded-sm bg-olive-800 px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-olive-700 md:inline-flex"
          >
            Agendar consulta
          </Link>
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-olive-700/25 px-3 text-sm font-semibold text-olive-900 xl:hidden"
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
          className="fixed inset-x-0 bottom-0 top-[57px] z-50 overflow-y-auto border-t border-olive-700/10 bg-cream-soft px-4 py-5 sm:px-5 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-sm px-2 py-3.5 text-lg font-medium text-ink active:bg-cream-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/agendar"
                className="inline-flex w-full items-center justify-center rounded-sm bg-olive-800 px-4 py-3.5 text-base font-semibold text-cream"
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
