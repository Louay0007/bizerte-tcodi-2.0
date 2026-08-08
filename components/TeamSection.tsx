"use client";

import Team5, { type Team5Member } from "@/components/ui/team-5";

const mockCommitteeMembers: Team5Member[] = [
  { id: "chair", name: "Committee Chair", role: "Event Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "linkedin", url: "#" }] },
  { id: "operations", name: "Operations Lead", role: "Logistics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "linkedin", url: "#" }] },
  { id: "technical", name: "Technical Lead", role: "Technology", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "github", url: "#" }] },
  { id: "design", name: "Creative Lead", role: "Design & Media", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "website", url: "#" }] },
  { id: "partnerships", name: "Partnerships Lead", role: "Sponsorships", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "linkedin", url: "#" }] },
  { id: "community", name: "Community Lead", role: "Volunteer Experience", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", socials: [{ platform: "linkedin", url: "#" }] },
];

export default function TeamSection() {
  return (
    <Team5
      heading="Meet The Managers"
      description="Meet the team shaping the next Bizerte Tcodi experience."
      members={mockCommitteeMembers}
    />
  );
}
