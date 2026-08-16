"use client";

import Team5, { type Team5Member } from "@/components/ui/team-5";

const mockCommitteeMembers: Team5Member[] = [
  {
    id: "louay-rjili",
    name: "Louay Rjili",
    role: "Technical Manager",
    image: "/images/managers/louay-rjili.jpg",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/louay.rjili.16" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/louay-rjili-26401a33a/" },
    ],
  },
  {
    id: "amal-benjamaa",
    name: "Amal Benjamaa",
    role: "Chair, IEEE ISET Bizerte Student Branch",
    image: "/images/managers/amal-benjamaa.jpg",
    socials: [{ platform: "facebook", url: "https://www.facebook.com/amalbenjamaa" }],
  },
  {
    id: "ayoub-ghiloufi",
    name: "Ayoub Ghiloufi",
    role: "Chair, Computer Society, IEEE ISSATM Student Branch",
    image: "/images/managers/ayoub-ghiloufi.png",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/ayoub.gh.514019" },
      { platform: "instagram", url: "https://www.instagram.com/ayoubgh123/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/ayoub-ghiloufi-6aa548357/" },
    ],
  },
  {
    id: "ghassen-keraani",
    name: "Ghassen Keraani",
    role: "Vice Chair, Technical Activities, IEEE ISSATM Student Branch",
    image: "/images/managers/ghassen-keraani.jpg",
    socials: [
      { platform: "facebook", url: "https://facebook.com/ghassen.ker" },
      { platform: "instagram", url: "https://www.instagram.com/ghsssnn/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/ghassen-keraani-020a1b375/" },
    ],
  },
  {
    id: "mariem-mejri",
    name: "Mariem Mejri",
    role: "Vice Chair, IEEE ENIB Student Branch",
    image: "/images/managers/mariem-mejri.jfif",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/mariem.mejri.3705/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/mariem-mejri-8996a4374/" },
    ],
  },
  {
    id: "maryem-missaoui",
    name: "Maryem Missaoui",
    role: "Vice Chair, Non-Technical Activities, IEEE ISSATM Student Branch",
    image: "/images/managers/maryem-missaoui.jpg",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/maryem.missaoui.376/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/maryem-missaoui-a7844a328/" },
    ],
  },
  {
    id: "ranim-hmaidi",
    name: "Ranim Hmaidi",
    role: "Treasurer, IEEE ISSAT Mateur Student Branch",
    image: "/images/managers/ranim-hmaidi.png",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/ra.nim.51859/" },
      { platform: "instagram", url: "https://www.instagram.com/it_s._.r_a_n_i_m/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/ranim-hmaidi-8756a1366/" },
    ],
  },
];

export default function TeamSection() {
  return (
    <Team5
      heading="Meet The Managers"
      description="Meet the student-branch leaders shaping the next Bizerte Tcodi experience."
      members={mockCommitteeMembers}
    />
  );
}
