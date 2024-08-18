import { Section } from '@/components/ui/section';

export default function Presentacion() {
  return (
    <Section bgDirection="r" className="flex flex-col items-center ">
      <div className="w-full max-w-6xl flex flex-col gap-10">
        <h1 className="text-4xl font-bold">
          Presentación
        </h1>
        <div className="flex flex-col gap-5">
          <p>
            La Escuela Profesional de Ingeniería de Sistemas, creada el 17 de febrero de 1995 según Resolución Rectoral N° 106-95 de fecha 24 de febrero de 1995, es consciente del rol que le toca cumplir en nuestra sociedad logrando una mejor comprensión de la necesidad de reflexionar sobre el desarrollo tecnológico, así como de las limitaciones que deben tener los estudiantes en su afán de encontrar soluciones a los problemas de la sociedad.
          </p>
          <p>
            El advenimiento de modernas tecnologías de información y comunicaciones provocan transformaciones en la forma de ser y actuar, a nivel individual y como sociedad. Hoy en día se han originado grandes cambios producto de las formas de ver y acceder a la información generando un distanciamiento entre el sujeto y el conocimiento.
          </p>
          <p>
            Estas tecnologías están induciendo grandes cambios de las que la Escuela de Sistemas es consciente por lo que como consecuencia a ello vincula el objetivo de estudio con el desarrollo tecnológico conduciéndose como facilitador de estos.
          </p>
          <p>
            Para cumplir con este nuevo rol, la Escuela de Sistemas prepara a los estudiantes en el estudio científico de los factores asociados a las tecnologías, sistemas buscando soluciones técnicas a problemas de índole social.
          </p>
          <p>
            La Escuela Profesional de Ingeniería de Sistemas está acreditada  internacionalmente por ABET &quot;Comisión de Acreditación en Ingeniería ABET&quot;
          </p>
        </div>
      </div>
    </Section>
  );
}
