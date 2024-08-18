import { Section } from '@/components/ui/section';

export default function Info() {
  return (
    <Section bgDirection="l" className="flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-y-10">

        <p>
          La Universidad Nacional de San Agustín de Arequipa promueve dentro de sus objetivos estratégicos “Recibir una formación académica de calidad que les otorgue conocimientos generales para el desempeño profesional y herramientas de investigación”.
        </p>
        <p>
          La Escuela Profesional de Ingeniería de Sistemas se encuentra acreditada, por el periodo de 6 años, por ABET y uno de los objetivos es otorgar mantenimiento a la acreditación por medio de actividades académicas que den el sustento correspondiente, es así que la dirección de la Escuela promueve a través de la Resolución Directoral N° 002-2024-EPIS-UNSA, emitida el 10 de abril de 2024, la Implementación y Ejecución del “IV Congreso Internacional de Ingeniería de Sistemas de la EPIS de la UNSA – CIIS2024”, con la finalidad de propiciar, incentivar, organizar, apoyar y contribuir al normal desarrollo de las actividades académicas de la Escuela a efecto de garantizar el cumplimiento de sus fines y objetivos determinados y de conformidad con la Ley Universitaria Nº 30220 y permitir a la contribución en la pretensión de generar el escenario necesario para fomentar la transferencia de este conocimiento, pues se considera que es la forma eficaz de trasladar el mismo es a través de la creación de este tipo de formatos y/o eventos.
        </p>
        <p>
          El Congreso está referido a diferentes ejes temáticos los cuales forman parte de los tópicos de la Computing Currícula - CC2020 internacional. Por lo tanto, el objetivo principal del Congreso es fomentar el intercambio de conocimientos, investigaciones y experiencias de la aplicación del desarrollo de software y tecnologías de información emergentes.
        </p>
        <p>
          Destacados expositores de clase mundial participarán en el congreso y compartirán su visión sobre el tema propuesto.
        </p>
        <span className="text-primary-title text-3xl font-semibold">
          !Los esperamos al CIIS 2024!
        </span>
      </div>
    </Section>
  );
}
