"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/our-team", label: "Our Team", matchPrefix: "/our-team" },
  { href: "/equity-research", label: "Equity Research", matchPrefix: "/equity-research" },
  { href: "/venture-capital", label: "Venture Capital", matchPrefix: "/venture-capital" },
  {
    href: "/junior-analyst-program",
    label: "Junior Analyst Program",
    matchPrefix: "/junior-analyst-program",
  },
];

const aboutLinks = [
  { href: "/about/what-we-do", label: "What We Do" },
  { href: "/about/our-story", label: "Our Story" },
];

function navClass(active: boolean) {
  return `pb-1 transition hover:text-brand ${
    active ? "border-b-2 border-brand text-brand" : "border-b-2 border-transparent text-foreground/80"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header sticky top-0 z-40 bg-white pt-3 sm:pt-4 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/mbf.png"
              alt="Minutemen Blockchain Fund"
              width={180}
              height={74}
              priority
              className="h-auto w-[96px] sm:w-[120px] md:w-[150px]"
            />
          </Link>

          <nav className="ml-auto hidden items-center justify-end gap-6 text-base font-medium lg:flex">
            <div className="group relative">
              <span
                className={`inline-block cursor-default pb-1 transition hover:text-brand ${
                  pathname.startsWith("/about")
                    ? "border-b-2 border-brand text-brand"
                    : "border-b-2 border-transparent text-foreground/80"
                }`}
              >
                About
              </span>
              <div className="absolute left-0 top-full z-20 h-3 w-44" />
              <div className="invisible absolute left-0 top-[calc(100%+0.25rem)] z-20 w-44 translate-y-0.5 rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:bg-brand-soft hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.matchPrefix);
              return (
                <Link key={item.href} href={item.href} className={navClass(isActive)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact-us"
              className="btn-motion rounded-md bg-brand px-3 py-2 text-xs font-semibold text-white hover:bg-brand-hover sm:px-4 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact Us</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span
                  className={`h-0.5 w-full bg-foreground transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`h-0.5 w-full bg-foreground transition ${menuOpen ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-full bg-foreground transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="animate-header-line mt-3 h-[2px] w-full bg-brand sm:mt-4" />
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <p className="eyebrow px-2 pb-2 pt-1">About</p>
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 text-base font-medium ${
                  pathname === item.href ? "bg-brand-soft text-brand" : "text-foreground hover:bg-brand-wash"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.matchPrefix);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    isActive ? "bg-brand-soft text-brand" : "text-foreground hover:bg-brand-wash"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
