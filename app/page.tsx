import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('/isenberg.jpg')] bg-cover bg-[center_72%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/65" aria-hidden="true" />
        <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Empowering Students to Lead the Next Financial Evolution.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            We are the Minutemen Blockchain Fund (MBF), a student-managed investment fund at
            UMass-Amherst focused on blockchain, digital assets, and fintech equities, providing
            members with hands-on experience through research-driven investment analysis and
            simulated portfolio management. Our structure mirrors real-world investment processes
            and industry engagement, equipping students with the technical skills and professional
            exposure needed for careers in finance.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/about/what-we-do"
            className="rounded-md border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Learn More
          </Link>
          <Link
            href="/contact-us"
            className="rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900">
            Latest Updates
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-md border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Spring 2026
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Fund Newsletter</h3>
              <p className="mt-2 text-slate-700">Highlights from research, events, and team growth.</p>
              <Link href="/about/what-we-do" className="mt-4 inline-block text-sm font-semibold underline">
                Read More
              </Link>
            </article>
            <article className="rounded-md border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Networking
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Industry Speaker Series</h3>
              <p className="mt-2 text-slate-700">
                Guest sessions with professionals in digital assets and venture.
              </p>
              <Link href="/venture-capital" className="mt-4 inline-block text-sm font-semibold underline">
                Learn More
              </Link>
            </article>
            <article className="rounded-md border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Recruiting
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Meet Our Junior Analysts
              </h3>
              <p className="mt-2 text-slate-700">Get involved through training and live pitch practice.</p>
              <Link
                href="/junior-analyst-program"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                Apply
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-slate-900">
          Have Any Questions?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          MBF serves as a center of information for students, sponsors, and partners looking to
          engage with the future of finance.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact-us"
            className="rounded-md border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Contact the Fund
          </Link>
        </div>
      </section>
    </div>
  );
}
