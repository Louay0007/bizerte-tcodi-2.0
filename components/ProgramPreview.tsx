"use client";

import ScrollStory from "@/components/motion/ScrollStory";

const stages = [
  { eyebrow: "Problem set", title: "Read", description: "Study each statement, input format, output format, and constraint before writing code.", href: "/program" },
  { eyebrow: "Strategy", title: "Think", description: "Break the problem into cases, choose the right algorithm, and plan for edge conditions.", href: "/program" },
  { eyebrow: "Competition", title: "Solve", description: "Implement efficient solutions and improve them against increasingly demanding cases.", href: "/program" },
  { eyebrow: "Results", title: "Rank", description: "Submit within the time limit and climb the standings through correct, efficient solutions.", href: "/program" },
];

export default function ProgramPreview() {
  return <ScrollStory stages={stages} />;
}
