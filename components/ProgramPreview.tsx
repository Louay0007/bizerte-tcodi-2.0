"use client";

import ScrollStory from "@/components/motion/ScrollStory";

const stages = [
  { eyebrow: "Challenge", title: "Build", description: "Turn a real-world prompt into a working solution with your team.", href: "/program" },
  { eyebrow: "Knowledge", title: "Learn", description: "Get practical guidance from mentors, workshops, and peers who build.", href: "/program" },
  { eyebrow: "Community", title: "Connect", description: "Meet student innovators, IEEE communities, and future collaborators.", href: "/program" },
  { eyebrow: "Impact", title: "Pitch", description: "Bring your idea to the room, demonstrate its value, and make the case for it.", href: "/program" },
];

export default function ProgramPreview() {
  return <ScrollStory stages={stages} />;
}