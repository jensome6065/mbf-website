import Link from "next/link";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Structured training",
    body: "Build foundational skills in investment research, valuation, and blockchain market analysis.",
  },
  {
    title: "Senior mentorship",
    body: "Pair with senior analysts for modeling guidance, feedback, and live pitch practice.",
  },
  {
    title: "Real workflows",
    body: "Collaborate and present ideas in a professional, team-based setting that mirrors investment processes.",
  },
];

export default function JuniorAnalystProgramPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">Programs</p>
            <h1 className="page-title mt-3 text-foreground">
              Junior Analyst Program
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              For students ready to build foundational research skills inside a live investment
              process.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
        <Reveal className="space-y-6 text-lg leading-8 text-muted">
          <p>
            The Junior Analyst Program is designed for students who want to build foundational
            skills in investment research, valuation, and blockchain market analysis. Participants
            work through structured training, collaborate with senior members, and present ideas in
            a professional setting that mirrors real investment workflows.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} as="article" delayMs={index * 80}>
              <p className="text-sm font-semibold text-brand">0{index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold text-foreground">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-wash border-y border-line">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Fall 2026</p>
            <h2 className="section-title mt-3 text-foreground">
              First class of six
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Application timeline and onboarding materials will be published as recruiting opens
              each semester.
            </p>
            <Link
              href="/contact-us"
              className="btn-motion mt-8 inline-block rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Inquire about joining
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
