import type { Metadata } from "next";
import ChallengeExperience from "@/components/challenge/ChallengeExperience";

export const metadata: Metadata = {
  title: "Challenge | Bizerte Tcodi",
  description: "Read and download the official Bizerte Tcodi coding problem set on competition day.",
};

export default function ChallengePage() {
  return <ChallengeExperience />;
}
