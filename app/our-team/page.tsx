import Image from "next/image";

const teamMembers = [
  { name: "Amit Kopolovic", image: "/team/amit.JPG", position: "Co-President" },
  { name: "Nathan Sousa", image: "/team/nate.JPG", position: "Co-President" },
  { name: "Ryan Marino", image: "/team/ryan.JPG", position: "Chairman" },
  { name: "Aiden Colleary", image: "/team/aiden.JPG", position: "Portfolio Manager" }
];

export default function OurTeamPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Our Team</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        Meet the analysts, portfolio managers, and leadership team driving the Minutemen Blockchain Fund. 
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <article key={member.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={member.image}
                alt={`${member.name} headshot`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="px-4 py-4 text-center">
              <h2 className="text-lg font-semibold text-slate-900">{member.name}</h2>
              <p className="mt-2 min-h-[1.375rem] text-sm text-slate-600">
                {member.position || "\u00a0"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
