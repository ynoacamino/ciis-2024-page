import IEEELogo from '@/components/logos/IEEELogo';
import { Section } from '@/components/ui/section';
import Link from 'next/link';

export default function Join() {
  return (
    <Section bgDirection="l">
      <div className="w-full flex flex-col items-center gap-4 text-center text-xl max-w-6xl mx-auto">
        <IEEELogo className="w-60 aspect-square" />
        <h1 className="text-4xl text-primary font-bold my-4">
          Únete y se parte del CIIS 2024
        </h1>
        <h2>
          El CIIS 2024 se realizará con forma virtual (online).
        </h2>
        <Link
          className="w-full max-w-64 text-center py-3 bg-primary-title rounded-md hover:bg-primary-title/80 my-10 text-primary-foreground font-semibold"
          href="https://docs.google.com/forms/d/e/1FAIpQLScDocSNq1tb0gPDnQAf683hlmwmVP6DppiXwqFvxyjXuh-q5g/closedform?pli=1"
        >
          Inscripciones aquí
        </Link>
      </div>
    </Section>
  );
}
