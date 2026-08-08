import Section from "../Section";
import MeetOurTeamCarousel from "./MeetOurTeamCarousel";
import StarsBackground from "../hero/StarsBackground";

const MeetOurTeam = () => {
  return (
    <Section title="Meet Our Team" className="items-center">
      <StarsBackground />
      <MeetOurTeamCarousel />
    </Section>
  );
};
export default MeetOurTeam;
