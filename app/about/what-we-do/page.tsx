import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function WhatWeDoPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="page-title mt-3 text-foreground">What We Do</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              A student-managed investment fund at Isenberg exploring blockchain finance through
              live research, simulated capital, and industry engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
        <Reveal>
          <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm">
            <Image
              src="/events/fidelity.jpg"
              alt="MBF members at an industry event"
              fill
              className="photo-zoom object-cover"
              sizes="(min-width: 896px) 56rem, 100vw"
              priority
            />
          </div>
        </Reveal>

        <Reveal className="mt-12 space-y-6 text-lg leading-8 text-muted">
          <p>
            The Minutemen Blockchain Fund (MBF) is a student-managed investment fund at the
            University of Massachusetts-Amherst, in the Isenberg School of Management. MBF explores
            one of the fastest-growing ecosystems in modern finance while managing a live portfolio
            of simulated capital across digital assets and emerging technology equities. Our mission
            is to bridge the academic gap in blockchain financial literacy by providing students
            with hands-on projects, research opportunities, and career pipelines into competitive
            roles in high finance.
          </p>
          <p>
            Members conduct in-depth market research, financial analysis, and company due diligence
            to develop investment theses and pitch recommendations to portfolio managers. These
            pitches support simulated capital allocation decisions and mirror real-world investment
            committee processes.
          </p>
        </Reveal>
      </section>

      <section className="section-wash border-y border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Structure</p>
            <h2 className="section-title mt-3 text-foreground">
              Two pillars of the fund
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Reveal as="article">
              <p className="text-sm font-semibold text-brand">01</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Equity Research</h3>
              <p className="mt-3 leading-7 text-muted">
                Thesis-driven coverage of fintech and blockchain-related equities, backed by
                modeling and investment committee review.
              </p>
              <Link
                href="/equity-research"
                className="mt-4 inline-block text-sm font-semibold text-brand transition hover:text-brand-hover"
              >
                View equity work →
              </Link>
            </Reveal>
            <Reveal as="article" delayMs={100}>
              <p className="text-sm font-semibold text-brand">02</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Venture Capital</h3>
              <p className="mt-3 leading-7 text-muted">
                Long-term evaluation of protocols and ecosystems with a focus on utility, adoption,
                and technical durability.
              </p>
              <Link
                href="/venture-capital"
                className="mt-4 inline-block text-sm font-semibold text-brand transition hover:text-brand-hover"
              >
                View VC work →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="section-title text-foreground">Industry access</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            MBF hosts guest speakers and Q&A sessions at private analyst meetings, featuring
            professionals across equity and digital asset research, venture capital, and respected
            associations—building connections that support members’ careers.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
