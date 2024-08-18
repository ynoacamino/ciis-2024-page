import { Section } from '@/components/ui/section';

export default function AboutEvent() {
  return (
    <Section id="about2" bgDirection="r" className="">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col gap-5 text-xl justify-center max-w-6xl">
          <h1 className="text-4xl text-primary-title font-bold">Sobre nosotros</h1>
          <p>
            El IV Congreso Internacional de Ingeniería de Sistemas (CIIS 2024) de la Universidad Nacional de San Agustín de Arequipa es un espacio internacional de reflexión académica, práctica e inculcar habilidades blandas; en el cual se abordarán temas relacionados a los siguientes ejes temáticos:
          </p>
          <p>
            Tendencias de la Ingeniería de Software, Ciberseguridad, Ciencia de datos y aplicaciones avanzadas, Inteligencia Artificial y Robótica y Nuevas tecnologías emergentes; con foco especial en sus aplicaciones para contribuir con el desarrollo sostenible.
          </p>
          <p>
            En ese sentido, invitamos a investigadores, profesionales y estudiantes a participar del evento este presente año.
          </p>
        </div>
      </div>
    </Section>
  );
}
