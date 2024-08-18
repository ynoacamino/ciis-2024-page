import { Section } from '@/components/ui/section';

export default function InfoParticipant() {
  return (
    <Section id="informacion-del-participante" bgDirection="l" className="">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col gap-5 text-xl justify-center max-w-6xl">
          <h1 className="text-4xl text-primary-title font-bold">
            Información del participante
          </h1>
          <ul className="flex flex-col gap-5">
            <li>El CIIS 2024 se realizará con forma virtual (online).</li>
            <li>
              El presente evento es totalmente gratuito, por lo que los participantes deberán inscribirse mediante un formulario.
            </li>
            <li>
              El cierre de inscripciones es el :  05 de noviembre de 2024 (o hasta completar el aforo).
            </li>
            <li>
              Asistencia virtual: Los participantes inscritos con opción de asistencia virtual emplearán las credenciales enviadas a su correo electrónico para acceder a la sala virtual de acuerdo a los horarios del programa.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
