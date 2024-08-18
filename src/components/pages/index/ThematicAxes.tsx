import { Section } from '@/components/ui/section';

const EJES_TEMATICOS = [
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1723739388/ulxel6hmkyq1pyvpzdvc.png',
    title: 'Tendencias de la Ingeniería de Software',
    content: [
      'Desarrollo ágil y DevOps',
      'Cloud computing',
      'Automatización de pruebas de software',
      'Calidad de Software',
      'Desarrollo móvil',
      'Gestión del cambio y la evolución del software',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1723739388/ulxel6hmkyq1pyvpzdvc.png',
    title: 'Tendencias de la Ingeniería de Software',
    content: [
      'Desarrollo ágil y DevOps',
      'Cloud computing',
      'Automatización de pruebas de software',
      'Calidad de Software',
      'Desarrollo móvil',
      'Gestión del cambio y la evolución del software',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1723739388/ulxel6hmkyq1pyvpzdvc.png',
    title: 'Tendencias de la Ingeniería de Software',
    content: [
      'Desarrollo ágil y DevOps',
      'Cloud computing',
      'Automatización de pruebas de software',
      'Calidad de Software',
      'Desarrollo móvil',
      'Gestión del cambio y la evolución del software',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1723739388/ulxel6hmkyq1pyvpzdvc.png',
    title: 'Tendencias de la Ingeniería de Software',
    content: [
      'Desarrollo ágil y DevOps',
      'Cloud computing',
      'Automatización de pruebas de software',
      'Calidad de Software',
      'Desarrollo móvil',
      'Gestión del cambio y la evolución del software',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1723739388/ulxel6hmkyq1pyvpzdvc.png',
    title: 'Tendencias de la Ingeniería de Software',
    content: [
      'Desarrollo ágil y DevOps',
      'Cloud computing',
      'Automatización de pruebas de software',
      'Calidad de Software',
      'Desarrollo móvil',
      'Gestión del cambio y la evolución del software',
    ],
  },
];

export default function ThematicAxes() {
  return (
    <Section id="ejes-tematicos" bgDirection="r" className="">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col gap-10 text-xl justify-center max-w-6xl">
          <h1 className="text-4xl text-primary-title font-bold">
            Ejes temáticos
          </h1>
          <div className="flex gap-x-10 gap-y-20 items-center justify-around flex-wrap">
            {
              EJES_TEMATICOS.map((eje) => (
                <div key={crypto.randomUUID()} className="flex flex-col gap-4 w-full max-w-[20rem] text-base items-center">
                  <img src={eje.imageUrl} alt={eje.title} className="w-full max-w-40" />
                  <h3 className="text-xl text-primary-title font-semibold text-center">{eje.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {
                    eje.content.map((item) => (
                      <li key={crypto.randomUUID()} className="flex gap-3 items-center">
                        <div className="w-2 h-2 rounded-full bg-foreground" />
                        <span>
                          {item}
                        </span>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Section>
  );
}
