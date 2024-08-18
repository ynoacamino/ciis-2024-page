import { Section } from '@/components/ui/section';
import Avatars from './Avatars';
/*
Maribel Molina Barriga

Richart Smith Escobedo Quispe

Giovanni Rolando Cabrera Málaga

Christian Alain Revilla Arroyo

Diego Alonso Iquira Becerra

Ernesto

Edith

Fabrizio
*/

const LIST = [
  {
    name: 'Maribel Molina Barriga',
    avatar: '/images/teams/avatar/chair.webp',
    position: 'Presidenta',
  },
  {
    name: 'Richart Smith Escobedo Quispe',
    avatar: '/images/teams/avatar/secretary.webp',
    position: 'Secretario',
  },
  {
    name: 'Giovanni Rolando Cabrera Málaga',
    avatar: '/images/teams/avatar/webMaster.webp',
    position: 'Web Master',
  },
  {
    name: 'Christian Alain Revilla Arroyo',
    avatar: '/images/teams/avatar/webMaster.webp',
    position: 'Web Master',
  },
  {
    name: 'Diego Alonso Iquira Becerra',
    avatar: '/images/teams/avatar/webMaster.webp',
    position: 'Web Master',
  },
];

export default function Comite() {
  return (
    <Section bgDirection="r" className="flex flex-col items-center gap-y-20">
      <h2 className="text-4xl font-bold">Comisión del evento:</h2>
      <Avatars list={LIST} />
    </Section>
  );
}
