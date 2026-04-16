export default function VentureCapitalPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Venture Capital</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">VC Portfolio</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The portfolio targets resilient, high-utility protocols and long-term ecosystem
            opportunities.
          </p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">VC Pitches</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Analysts pitch opportunities based on utility, adoption potential, governance quality,
            and technical durability.
          </p>
        </article>
      </div>
      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Investment Philosophy</h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">
        Our Venture Capital team adopts a long-term, survivability-focused
approach to investing in on-chain cryptocurrencies. We invest in people and future use
cases—not pure speculation or market hype. The team prioritizes blockchain protocols with
compelling real-world utility, clear adoption potential, and sustainable network growth.
Investment decisions are grounded in rigorous evaluation of founding teams and governance
structures, emphasizing execution capability, transparency, and strategic vision. We further
conduct in-depth technical diligence, assessing protocol architecture, security, scalability, and
tokenomics alignment to ensure each investment is supported by both innovation and enduring
value within the blockchain ecosystem.
        </p>
      </div>
    </section>
  );
}
