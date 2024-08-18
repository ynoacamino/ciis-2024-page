import { Section } from '@/components/ui/section';

export default function Mision() {
  return (
    <Section bgDirection="r" className="flex flex-col items-center ">
      <div className="w-full max-w-6xl flex gap-10 flex-wrap">
        <img
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1724002469/eddoicvbgmkzfyc5ednz.jpg"
          alt=""
          className="rounded-md w-full max-w-64"
        />
        <div className="flex flex-1 min-w-64 flex-col gap-10  ">
          <h1 className="text-4xl font-bold">
            Misión
          </h1>
          <p>
            La Escuela Profesional de Ingeniería de Sistemas forma profesionales competentes y éticos, con habilidades de investigación e innovación, capaces de gestionar proyectos de desarrollo de software y de tecnologías de la información que contribuyan al desarrollo del entorno local, nacional e internacional, aplicando conocimientos científicos, tecnológicos y humanísticos.
          </p>
        </div>
      </div>
    </Section>
  );
}
