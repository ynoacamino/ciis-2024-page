import { Section } from '@/components/ui/section';
import { TEAM } from '@/data/team';
import Avatars from './Avatars';

export default function Estudiantes() {
  return (
    <Section bgDirection="l" className="flex flex-col items-center gap-y-20">
      <h2 className="text-4xl font-bold">Apoyo de los Estudiantes:</h2>
      <Avatars list={TEAM} />
    </Section>
  );
}
