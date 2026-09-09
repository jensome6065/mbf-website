import Script from "next/script";

import { Reveal } from "@/components/reveal";

export default function ContactUsPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h1 className="page-title mt-3 text-foreground">Contact Us</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Interested in joining MBF, partnering with us, or learning more? Send us a message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-warm">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-line bg-white/95 p-6 shadow-sm sm:p-8">
              <div data-tf-live="01M23DT2GNQF574PJHHQPGN6E4" />
              <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center text-sm text-muted" delayMs={100}>
            Or email{" "}
            <a
              href="mailto:minutemenblockchainfund@gmail.com"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              minutemenblockchainfund@gmail.com
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
