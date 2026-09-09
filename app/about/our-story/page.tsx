import Image from "next/image";
import { Reveal } from "@/components/reveal";

export default function OurStoryPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="page-title mt-3 text-foreground">Our Story</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Founded in 2025 at Isenberg by students who believed blockchain would reshape finance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
        <Reveal>
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm">
            <Image
              src="/team/group.jpg"
              alt="Founding members of the Minutemen Blockchain Fund"
              fill
              className="photo-zoom object-cover object-center"
              sizes="(min-width: 896px) 56rem, 100vw"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[8rem_1fr] md:gap-12">
          <Reveal>
            <p className="font-display text-5xl text-brand">2025</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-muted">Founded</p>
          </Reveal>
          <Reveal delayMs={80} className="space-y-6 text-lg leading-8 text-muted">
            <p>
              The Minutemen Blockchain Fund (MBF) was established at the University of
              Massachusetts-Amherst in the Isenberg School of Management by forward-thinking
              students united by a shared belief that blockchain technology is the future of
              finance. Recognizing an opportunity to expand education in emerging technologies, the
              founders created a home for students pursuing careers in blockchain, finance,
              computer science, and Web3.
            </p>
            <p>
              In collaboration with Isenberg faculty and essential campus resources, the founding
              group secured recognition and built the fund into an established organization. Demand
              made clear how many students needed a pipeline into the blockchain ecosystem. MBF
              continues to leave a lasting impact on the UMass Amherst community, empowering
              students to stay at the forefront of technological advancement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-wash border-y border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Looking ahead</p>
            <h2 className="section-title mt-3 text-foreground">
              Building the next generation of blockchain talent
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              From founding analysts to our first Junior Analyst class, MBF grows by pairing
              rigorous research with real industry exposure.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
