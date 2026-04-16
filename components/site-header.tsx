"use client";

import Image from "next/image";
import Link from "next/link";
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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white pt-4">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/mbf.png"
              alt="Minutemen Blockchain Fund"
              width={180}
              height={74}
              priority
              className="h-auto w-[120px] sm:w-[150px]"
            />
          </Link>

          <nav className="ml-auto hidden items-center justify-end gap-6 text-lg font-medium text-slate-700 lg:flex">
            <div className="group relative">
              <span
                className={`inline-block cursor-default pb-1 transition hover:text-slate-900 ${
                  pathname.startsWith("/about")
                    ? "border-b-2 border-slate-900 text-slate-900"
                    : "border-b-2 border-transparent"
                }`}
              >
                About
              </span>
              <div className="absolute left-0 top-full z-20 h-3 w-44" />
              <div className="invisible absolute left-0 top-[calc(100%+0.25rem)] z-20 w-44 translate-y-0.5 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <Link href="/about/what-we-do" className="block rounded px-3 py-2 text-sm hover:bg-slate-100">
                  What We Do
                </Link>
                <Link href="/about/our-story" className="block rounded px-3 py-2 text-sm hover:bg-slate-100">
                  Our Story
                </Link>
              </div>
            </div>

            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.matchPrefix);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pb-1 transition hover:text-slate-900 ${
                    isActive ? "border-b-2 border-slate-900 text-slate-900" : "border-b-2 border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact-us"
            className="ml-4 rounded-md bg-black px-4 py-2.5 text-base font-semibold text-white transition hover:bg-slate-800 sm:px-6 sm:py-3"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-4 h-[2px] w-full bg-slate-900" />
      </div>
    </header>
  );
}
