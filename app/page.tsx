import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const featuredEvents = [
  {
    title: "Mass Fintech Hub Bootcamp",
    location: "Bentley University",
    blurb:
      "Members engaged with founders and professionals across digital assets and fintech, placing 3rd and 4th in the token pitch competition with analyses of Ondo and HBAR.",
    images: [
      { src: "/events/bentley-1.png", alt: "MBF members presenting Value Capture & Tokenomics at Bentley" },
      { src: "/events/bentley-2.png", alt: "MBF members presenting HBAR Thesis at Bentley" },
    ],
  },
  {
    title: "Institutional DeFi: Drivers, Trends and Adoption",
    location: "Fidelity Digital Assets · Boston",
    blurb:
      "Hosted with the Boston Blockchain Association at Fidelity’s Boston office, featuring perspectives on institutional DeFi adoption from industry leaders.",
    images: [{ src: "/events/fidelity.jpg", alt: "MBF members at Fidelity Digital Assets in Boston" }],
  },
  {
    title: "MIT Bitcoin Hackathon",
    location: "MIT · Boston",
    blurb:
      "MBF’s development sector competed in the MIT Bitcoin Hackathon, building VAIP—a decentralized trust layer for AI agent-to-agent protocols.",
    images: [{ src: "/events/mit-bitcoin.jpg", alt: "MBF members at the MIT Bitcoin Expo" }],
  },
];

const moreEvents = [
  {
    title: "Boston Blockchain Association × Allium",
    location: "Isenberg School of Management",
    blurb: "On-campus Allium demo covering real-time and historical on-chain data infrastructure.",
  },
  {
    title: "Guest Speaker Series",
    location: "CAIA · Steven Novokovic",
    blurb:
      "Spring speakers from CAIA, VanEck, Franklin Templeton, Fidelity Digital Assets, and F-Prime Capital.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative isolate min-h-[78vh] overflow-hidden sm:min-h-[85vh]">
        <div
          className="absolute inset-0 -z-10 animate-ken-burns bg-[url('/isenberg.jpg')] bg-cover bg-[center_72%]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/50 to-black/70"
          aria-hidden="true"
        />
        <div className="mx-auto flex min-h-[78vh] w-full max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[85vh] sm:px-6">
          <p className="animate-hero-in font-display text-2xl tracking-wide text-white sm:text-5xl">
            Minutemen Blockchain Fund
          </p>
          <h1 className="animate-hero-in-delay mx-auto mt-5 max-w-3xl text-xl font-semibold leading-snug tracking-tight text-white/95 sm:text-3xl">
            Empowering students to lead the next financial evolution.
          </h1>
          <p className="animate-hero-in-delay-2 mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            A student-managed investment fund at UMass Amherst focused on blockchain, digital
            assets, and fintech equities.
          </p>
          <div className="animate-hero-in-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about/what-we-do"
              className="btn-motion rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Learn More
            </Link>
            <Link
              href="/contact-us"
              className="btn-motion rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wash border-y border-line">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow text-center">Spring 2026</p>
            <h2 className="section-title mt-3 text-center text-foreground sm:text-5xl">
              Events of the Semester
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Competitions, industry visits, and campus demos that shaped the semester.
            </p>
          </Reveal>

          <div className="mt-12 space-y-14">
            {featuredEvents.map((event, index) => (
              <Reveal key={event.title} as="article" delayMs={(index % 3) * 80}>
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    {event.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {event.images.map((image) => (
                          <div
                            key={image.src}
                            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="photo-zoom object-cover"
                              sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm">
                        <Image
                          src={event.images[0].src}
                          alt={event.images[0].alt}
                          fill
                          className="photo-zoom object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    )}
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                    <p className="eyebrow">{event.location}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">{event.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{event.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-line pt-10">
            <h3 className="text-lg font-semibold text-foreground">Also this semester</h3>
            <ul className="mt-6 space-y-5">
              {moreEvents.map((event) => (
                <li key={event.title} className="grid gap-1 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
                  <p className="text-sm font-semibold text-brand">{event.location}</p>
                  <div>
                    <p className="font-semibold text-foreground">{event.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{event.blurb}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-warm">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Fall 2026</p>
            <h2 className="section-title mt-3 text-foreground sm:text-4xl">
              First Junior Analyst Class
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Six new members paired with senior analysts for mentorship, modeling, and live pitch
              practice.
            </p>
            <Link
              href="/junior-analyst-program"
              className="btn-motion mt-8 inline-block rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Learn More
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="section-title text-center text-foreground">
              Have any questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
              MBF serves students, sponsors, and partners looking to engage with the future of
              finance.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                className="btn-motion rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                Contact the Fund
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
