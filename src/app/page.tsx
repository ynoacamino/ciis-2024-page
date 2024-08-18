import Title from '@/components/pages/index/Title';
import Subtitle from '@/components/pages/index/Subtitle';
import About from '@/components/pages/index/Objective';
import AboutEvent from '@/components/pages/index/AboutEvent';
import UpcomingEvents from '@/components/pages/index/UpcomingEvents';
import Join from '@/components/pages/index/Join';
import InfoParticipant from '@/components/pages/index/InfoParticipant';
import ThematicAxes from '@/components/pages/index/ThematicAxes';
import Speakers from '@/components/pages/index/Speakers';
import Clock from '@/components/pages/index/Clock';

export default function Home() {
  return (
    <>
      <Title />
      <Subtitle />
      <Clock />
      <About />
      <AboutEvent />
      <InfoParticipant />
      <ThematicAxes />
      <UpcomingEvents />
      <Speakers />
      <Join />
    </>
  );
}
