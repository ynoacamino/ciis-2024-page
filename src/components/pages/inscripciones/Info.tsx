import { Section } from '@/components/ui/section';
import Link from 'next/link';

export default function Info() {
  return (
    <Section bgDirection="l" className="flex flex-col items-center justify-center gap-4">
      <p className="w-full max-w-6xl text-center text-3xl font-semibold">
        El CIIS 2024 se realizará con forma virtual (online).
      </p>
      <Link
        className="uppercase w-full max-w-sm text-center py-3 bg-primary-title rounded-md hover:bg-primary-title/80 my-10 text-primary-foreground font-semibold"
        href="https://docs.google.com/forms/d/e/1FAIpQLScDocSNq1tb0gPDnQAf683hlmwmVP6DppiXwqFvxyjXuh-q5g/closedform?pli=1"
      >
        Inscripciones aquí
      </Link>
      <p className="w-full max-w-6xl">
        El cierre de inscripciones es el :  05 de NOVIEMBRE de 2024 (o hasta completar el aforo).
      </p>
      <p className="w-full max-w-6xl">
        Asistencia virtual: Los participantes inscritos con opción de asistencia virtual emplearán las credenciales enviadas a su correo electrónico para acceder a la sala virtual de acuerdo a los horarios del programa.
      </p>
    </Section>
  );
}
