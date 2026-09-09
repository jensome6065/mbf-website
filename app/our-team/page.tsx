import Image from "next/image";
import { Reveal } from "@/components/reveal";

const leadership = [
  { name: "Amit Kopolovic", image: "/team/amit.JPG", position: "Co-President" },
  { name: "Nathan Sousa", image: "/team/nate.JPG", position: "Co-President" },
  { name: "Ryan Marino", image: "/team/ryan.JPG", position: "Chairman" },
  { name: "Aiden Colleary", image: "/team/aiden.JPG", position: "Portfolio Manager" },
  { name: "Vincent Hill", image: "/team/vincent.jpg", position: "Portfolio Manager" },
  { name: "Jennifer Ye", image: "/team/jennifer.jpg", position: "Head of Development" },
  { name: "Connie Reyes", image: "/team/connie.jpg", position: "Marketing Assistant" },
];

const foundingAnalysts = [
  { name: "Kaitlyn Huynh", image: "/team/kaitlyn.jpg", position: "Founding Analyst" },
  { name: "Alex Kowaleski", image: "/team/alex.jpg", position: "Founding Analyst" },
  { name: "Divyanshi Gupta", image: "/team/divyanshi.jpg", position: "Founding Analyst" },
  { name: "Owen Klumpenaar", image: "/team/owen.jpg", position: "Founding Analyst" },
  { name: "Ben Scott", image: "/team/ben.jpg", position: "Founding Analyst" },
  { name: "Devin Capurso", image: "/team/devin.jpg", position: "Founding Analyst" },
];

function MemberGrid({
  members,
  columns = "lg:grid-cols-4",
}: {
  members: { name: string; image: string; position: string }[];
  columns?: string;
}) {
  return (
    <div className={`mt-8 grid gap-8 sm:grid-cols-2 ${columns}`}>
      {members.map((member, index) => (
        <Reveal
          key={member.name}
          as="article"
          delayMs={(index % 4) * 70}
          className="text-center"
        >
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm">
            <Image
              src={member.image}
              alt={`${member.name} headshot`}
              fill
              className="photo-zoom object-cover object-top"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm text-brand">{member.position}</p>
        </Reveal>
      ))}
    </div>
  );
}

function TeamGroup({
  title,
  members,
  columns,
}: {
  title: string;
  members: { name: string; image: string; position: string }[];
  columns?: string;
}) {
  return (
    <div className="mt-16">
      <Reveal>
        <p className="eyebrow">{title}</p>
        <div className="mt-3 h-px w-full bg-line" />
      </Reveal>
      <MemberGrid members={members} columns={columns} />
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <div>
      <section className="page-intro border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="eyebrow">People</p>
            <h1 className="page-title mt-3 text-foreground">Our Team</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Analysts, portfolio managers, and leadership driving the Minutemen Blockchain Fund.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <Reveal className="overflow-hidden">
          <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-brand-soft shadow-sm">
            <Image
              src="/team/group.jpg"
              alt="Minutemen Blockchain Fund team group photo"
              fill
              className="photo-zoom object-cover object-center"
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
            />
          </div>
        </Reveal>

        <TeamGroup title="Leadership" members={leadership} columns="lg:grid-cols-4" />
        <TeamGroup title="Founding Analysts" members={foundingAnalysts} />
      </section>
    </div>
  );
}
