export default function EquityResearchPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Equity Research</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Equity Portfolio</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Portfolio holdings are selected through analyst-led diligence and regular investment
            committee reviews.
          </p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Equity Pitches</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Members present thesis-driven pitches supported by financial modeling and
            research-backed conviction.
          </p>
        </article>
      </div>
      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Investment Philosophy</h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">
        Our Equity Research team follows a disciplined, data-driven
approach focused on fintech and blockchain-related equities. We identify high-conviction
opportunities by analyzing industry trends to form thesis-driven research, backed by financial
models. Beyond companies already operating on-chain, we also evaluate businesses positioned
to benefit from the adoption of blockchain technology across payments, financial infrastructure,
and digital assets. Research is reviewed regularly by portfolio managers, allowing the portfolio
to adapt as market conditions evolve.
        </p>
      </div>
    </section>
  );
}
