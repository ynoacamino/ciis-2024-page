import Title from '@/components/pages/acerca-de/Title';
import Description from '@/components/pages/acerca-de/Description';
import Estudiantes from '@/components/pages/acerca-de/Estudiantes';
import Comite from '@/components/pages/acerca-de/Comite';
import Info from '@/components/pages/acerca-de/Info';

export default function AcercaDePage() {
  return (
    <>
      <Title />
      <Info />
      <Comite />
      <Description />
      <Estudiantes />
    </>
  );
}
