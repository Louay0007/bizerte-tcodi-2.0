import { Linkedin, Instagram, MapPin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  status: "Open to chat" | "Heads down";
  bio: string;
  location: string;
}

const team: TeamMember[] = [
  {
    name: "Event Coordinator",
    role: "Chair / Coordinator",
    initials: "EC",
    status: "Open to chat",
    bio: "Shapes the event vision and keeps the team aligned on delivering an ambitious, practical experience.",
    location: "Bizerte, Tunisia",
  },
  {
    name: "Logistics Lead",
    role: "Logistics",
    initials: "LL",
    status: "Heads down",
    bio: "Owns venue, schedule, and on-the-ground operations so the event runs reliably from start to finish.",
    location: "Bizerte, Tunisia",
  },
  {
    name: "Technical & Jury",
    role: "Technical Coordination",
    initials: "TJ",
    status: "Open to chat",
    bio: "Builds the technical track and guides the jury to keep challenges fair, clear, and well-judged.",
    location: "Bizerte, Tunisia",
  },
  {
    name: "Marketing & Design",
    role: "Marketing",
    initials: "MD",
    status: "Open to chat",
    bio: "Turns the event narrative into clear, accessible communication across every channel.",
    location: "Bizerte, Tunisia",
  },
  {
    name: "Sponsorship",
    role: "Sponsorship & Partnerships",
    initials: "SP",
    status: "Heads down",
    bio: "Forges the partnerships that power the event and make the experience possible.",
    location: "Bizerte, Tunisia",
  },
  {
    name: "Volunteers",
    role: "Volunteers Coordinator",
    initials: "VC",
    status: "Open to chat",
    bio: "Recruits and supports the volunteer crew that holds the event together on the day.",
    location: "Bizerte, Tunisia",
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-white/15 text-base font-semibold text-neutral-300">
      {initials}
    </div>
  );
}

function StatusBadge({ status }: { status: TeamMember["status"] }) {
  const open = status === "Open to chat";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
      <span
        className={`h-1.5 w-1.5 rounded-full ${open ? "bg-neutral-300" : "bg-neutral-600"}`}
      />
      {status}
    </span>
  );
}

export default function TeamGrid() {
  return (
    <section className="bg-dark px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Organizing Committee
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            A focused group combining research, design, engineering, and
            logistics to ship a clear, attendee-facing outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-4">
                <Avatar initials={member.initials} />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-400">{member.role}</p>
                </div>
              </div>

              <StatusBadge status={member.status} />

              <p className="text-sm leading-relaxed text-neutral-400">
                {member.bio}
              </p>

              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {member.location}
                </span>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-neutral-500 transition-colors hover:text-white" />
                  <Instagram className="h-4 w-4 text-neutral-500 transition-colors hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
