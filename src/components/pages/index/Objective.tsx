import { Section } from '@/components/ui/section';

export default function Objective() {
  return (
    <Section bgDirection="l" id="about">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto justify-items-center">
        <div className="flex flex-col gap-3 text-xl justify-center md:col-span-2">
          <h1 className="text-4xl text-primary-title font-bold">Objetivo</h1>
          <p>
            El objetivo principal es fomentar el intercambio de experiencias en los distintos ámbitos profesionales que exige la aplicación, desarrollo de software y el uso de tecnologías de información emergentes a través del IV Congreso Internacional de la Escuela Profesional de Ingeniería de Sistemas – CIIS 2024.
          </p>
        </div>
        <img
          className="w-full aspect-square rounded-lg object-cover max-w-sm"
          alt=""
          src="/images/about-us/objetivo.png"
          width={600}
          height={600}
        />
      </div>
    </Section>
  );
}
