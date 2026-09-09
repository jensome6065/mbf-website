import { Reveal } from "@/components/reveal";

const equityPitches = [
  { title: "XYZ", file: "/pitches/equity/xyz.pdf", focus: "Fintech equity thesis" },
  { title: "SHOP", file: "/pitches/equity/shop.pdf", focus: "Commerce & payments" },
  { title: "HUT8", file: "/pitches/equity/hut8.pdf", focus: "Digital asset infrastructure" },
  { title: "TOST", file: "/pitches/equity/tost.pdf", focus: "Fintech platform analysis" },
];

export default function EquityResearchPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Research</p>
            <h1 className="page-title mt-3 text-foreground">
              Equity Research
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Analyst-led diligence on fintech and blockchain-related equities, reviewed through
              investment committee processes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-wash border-b border-line">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
          <Reveal as="article">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Equity Portfolio</h2>
            <p className="mt-3 leading-7 text-muted">
              Holdings are selected through analyst-led diligence and regular investment committee
              reviews.
            </p>
          </Reveal>
          <Reveal as="article" delayMs={100}>
            <p className="eyebrow">Process</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Equity Pitches</h2>
            <p className="mt-3 leading-7 text-muted">
              Members present thesis-driven pitches supported by financial modeling and
              research-backed conviction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="eyebrow">Work product</p>
          <h2 className="section-title mt-3 text-foreground">Pitch Decks</h2>
        </Reveal>

        <div className="mt-10 space-y-12">
          {equityPitches.map((pitch, index) => (
            <Reveal key={pitch.file} as="article" delayMs={(index % 2) * 60}>
              <div className="rounded-2xl border border-line bg-white/95 p-6 shadow-sm">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{pitch.title}</h3>
                    <p className="mt-1 text-sm text-muted">{pitch.focus}</p>
                  </div>
                  <a
                    href={pitch.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-motion rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
                  >
                    Open PDF
                  </a>
                </div>

                <a
                  href={pitch.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex min-h-40 items-center justify-center rounded-xl border border-line bg-brand-soft px-6 py-10 text-center md:hidden"
                >
                  <div>
                    <p className="text-lg font-semibold text-foreground">{pitch.title} deck</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Open the PDF in a new tab for the best mobile viewing experience.
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand">Open PDF</span>
                  </div>
                </a>

                <iframe
                  src={pitch.file}
                  title={`${pitch.title} pitch deck`}
                  className="mt-4 hidden h-[70vh] w-full rounded-xl border border-line bg-brand-soft md:block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-warm border-t border-line">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Approach</p>
            <h2 className="section-title mt-3 text-foreground">
              Investment Philosophy
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              Our Equity Research team follows a disciplined, data-driven approach focused on
              fintech and blockchain-related equities. We identify high-conviction opportunities by
              analyzing industry trends to form thesis-driven research, backed by financial models.
              Beyond companies already operating on-chain, we also evaluate businesses positioned to
              benefit from blockchain adoption across payments, financial infrastructure, and
              digital assets. Research is reviewed regularly by portfolio managers, allowing the
              portfolio to adapt as market conditions evolve.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
