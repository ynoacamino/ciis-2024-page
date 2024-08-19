import { Section } from '@/components/ui/section';

const EJES_TEMATICOS = [
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1724036733/vqqn7u29tpprvvgsz95o.png',
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
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1724036771/ylgoaf3sl5mat6tct9tz.png',
    title: 'Ciberseguridad',
    content: [
      'Seguridad de la nube',
      'Blockchain y la ciberseguridad',
      'Gestión de identidad y acceso',
      'Análisis de amenazas y detección de intrusiones',
      'Seguridad en dispositivos móviles',
      'Cumplimiento normativo y regulaciones de seguridad',
      'Informática forense',
      'Seguridad IoT',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1724036811/rxlgj1ijrxxrl96tgmkq.png',
    title: 'Ciencia de datos y aplicaciones avanzadas',
    content: [
      'Análisis de datos y minería de datos',
      'Visualización de datos',
      'Big Data',
      'Ciencia de datos en la nube y Analytics en tiempo real',
      'Deep Learning y Machine Learning',
      'Ética  y privacidad en la ciencia de datos',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1724036733/vqqn7u29tpprvvgsz95o.png',
    title: 'Inteligencia Artificial y Robótica',
    content: [
      'Aprendizaje automático (Machine Learning)',
      'Redes neuronales artificiales',
      'Procesamiento del lenguaje natural (Natural Language Processing, NLP)',
      'Robótica colaborativa',
      'Interacción Humano Computador',
    ],
  },
  {
    imageUrl: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1724036771/ylgoaf3sl5mat6tct9tz.png',
    title: 'Nuevas Tecnologías emergentes',
    content: [
      'Computación cuántica',
      'Realidad virtual y aumentada',
      'Internet de las cosas (IoT)',
      'Blockchain',
      'Impresión 3D',
      'Vehículos autónomos',
      'Bioingeniería y nanotecnología',
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
          <div className="flex gap-x-10 gap-y-20 items-start justify-around flex-wrap">
            {
              EJES_TEMATICOS.map((eje) => (
                <div key={crypto.randomUUID()} className="flex flex-col gap-4 w-full max-w-[20rem] text-base items-center justify-start">
                  <img src={eje.imageUrl} alt={eje.title} className="w-full max-w-80" />
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
