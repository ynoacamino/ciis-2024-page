import Link from 'next/link';

export default function Info() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Feria de Proyectos de Investigación 2024</h2>
        <p className="text-muted-foreground w-full max-w-4xl text-lg">
          La Feria de Proyectos es un evento que se realiza anualmente en la Universidad Nacional de Ingeniería (UNI)
          con el objetivo de promover la creatividad y la innovación en los estudiantes de la Facultad de Ingeniería Industrial y de Sistemas (FIIS).
        </p>
        <Link
          className="w-full max-w-sm text-center py-3 bg-primary-title rounded-md hover:bg-primary-title/80 my-10 text-primary-foreground font-semibold"
          href="https://sites.google.com/unsa.edu.pe/feriadeproyectos2023/"
        >
          Ir a página web de Feria de Proyectos
        </Link>
      </div>
    </div>
  );
}
