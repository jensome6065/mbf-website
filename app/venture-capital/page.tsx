import { Reveal } from "@/components/reveal";

const vcPitches = [
  { title: "Solana", file: "/pitches/vc/solana.pdf", focus: "High-throughput L1 ecosystem" },
  { title: "Ondo", file: "/pitches/vc/ondo.pdf", focus: "Tokenized real-world assets" },
  { title: "Bose", file: "/pitches/vc/bose.pdf", focus: "Protocol & market thesis" },
];

export default function VentureCapitalPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Research</p>
            <h1 className="page-title mt-3 text-foreground">
              Venture Capital
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Long-term, survivability-focused coverage of protocols and ecosystems with real-world
              utility.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-wash border-b border-line">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
          <Reveal as="article">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">VC Portfolio</h2>
            <p className="mt-3 leading-7 text-muted">
              The portfolio targets resilient, high-utility protocols and long-term ecosystem
              opportunities.
            </p>
          </Reveal>
          <Reveal as="article" delayMs={100}>
            <p className="eyebrow">Process</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">VC Pitches</h2>
            <p className="mt-3 leading-7 text-muted">
              Analysts pitch opportunities based on utility, adoption potential, governance quality,
              and technical durability.
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
          {vcPitches.map((pitch, index) => (
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
              Our Venture Capital team adopts a long-term, survivability-focused approach to
              investing in on-chain cryptocurrencies. We invest in people and future use cases—not
              pure speculation or market hype. The team prioritizes blockchain protocols with
              compelling real-world utility, clear adoption potential, and sustainable network
              growth. Investment decisions are grounded in rigorous evaluation of founding teams and
              governance structures, emphasizing execution capability, transparency, and strategic
              vision. We further conduct in-depth technical diligence, assessing protocol
              architecture, security, scalability, and tokenomics alignment to ensure each
              investment is supported by both innovation and enduring value within the blockchain
              ecosystem.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
