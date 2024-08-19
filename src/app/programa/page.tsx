import Calendar from '@/components/pages/programa/Calendar';
import Title from '@/components/pages/programa/Title';
import Day from '@/components/pages/programa/Day';

const DAYS = [
  {
    date: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Director de la Dirección Académica de Ingeniería de Sistemas e Informática Ing. Jesús Zúñiga Cueva',
        description: 'CEREMONIA DE INAGURACIÓN',
      },
      {
        hour: '9:30 - 10:30 am ',
        speacker: 'César Alberto Collazos Ordóñez ',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '10:30 - 11:30 am',
        speacker: 'Renzo Alejandro Macedo Eden',
        description: 'Videojuegos y Aplicaciones de Inteligencia Artificial en Domath Software',
      },
      {
        hour: '11:30 - 12:30 am',
        speacker: 'Aurea Rossi Soriano Vargas',
        description: 'Fundamentos de Ciencia de Datos ',
      },
      {
        hour: '12:30 - 13:30 am',
        speacker: 'Sara Vera Noguez',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan?',
      },
      {
        hour: '13:30 - 15:00 am',
        speacker: '',
        description: 'COFEE BREAK',
      },
      {
        hour: '15:00 - 16:00 pm ',
        speacker: 'Karlin Ortega',
        description: 'Mecanismos de protección de los desarrollo informáticos patentes y derechos de autor - INDECOPI',
      },
      {
        hour: '16:00 - 17:00 pm',
        speacker: 'Edwar Velarde Allazo',
        description: 'Espectro de luz en la productividad y calidad de las plantas en sistemas agrícolas verticales',
      },
      {
        hour: '17:00 - 18:00 pm',
        speacker: 'César Beltrán Castañón',
        description: 'Inteligencia Artificial generativa y LLMs',
      },
      {
        hour: '18:00 - 19:00 pm',
        speacker: 'Miguel Alonso Lopez Abarca',
        description: 'El ABC de la Protección Web: Introducción a OWASP TOP TEN 2021',
      },
      {
        hour: '19:00 - 20:00 pm',
        speacker: 'Juan Felipe Miranda Medina',
        description: '¿Qué tiene de inteligente la Inteligencia Artificial?',
      },
    ],
  },
  {
    date: '07 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 10:00 am',
        speacker: 'Ricardo Elias Valdivia Pinto',
        description: 'Programación de restricciones utilizando el solver CP-SAT',
      },
      {
        hour: '10:00 - 11:00 pm',
        speacker: 'Jomar Silva Santos',
        description: 'Inteligencia artificial aplicada a la ciberseguridad',
      },
      {
        hour: '11:00 - 12:00 pm',
        speacker: 'Dr. Rubén Trajtman Kizner',
        description: 'La protección del software a través del derecho de Autor - INDECOPI',
      },
      {
        hour: '12:00 - 13:00 pm',
        speacker: 'Daniel Alexis Gutierrez Pachas',
        description: 'Introducción al Aprendizaje Estadístico',
      },
      {
        hour: '13:00 - 14:00 pm',
        speacker: '',
        description: 'COFEE BREAK',
      },
      {
        hour: '14:00 - 15:00 pm',
        speacker: 'Laura Jovani Estacio Cerquin',
        description: 'Evaluating the Role of AI-driven Image-to-Image Registration in Response Evaluation',
      },
      {
        hour: '15:00 - 16:00 pm',
        speacker: 'Eder Ramiro Quispe Vargas',
        description: 'Proceso de diseño de user experience (UX) para productos digitales',
      },
      {
        hour: '16:00 - 17:00 pm',
        speacker: 'Rolfy Montufar Mercado',
        description: 'Entre Habilidades y Cultura: Un Viaje en la Ingeniería de Software con xDesign',
      },
      {
        hour: '17:00 - 18:00 pm ',
        speacker: 'Marisol Cristel Galarza Florez',
        description: 'El futuro de la Robótica',
      },
      {
        hour: '18:00 - 19:00 pm',
        speacker: 'Abigail Geronimo',
        description: 'Data Science For Startup',
      },
    ],
  },
  {
    date: '08 DE NOVIEMBRE',
    events: [
      {
        hour: '8:30 - 9:30 am ',
        speacker: 'Alexis José Meneses Carnero',
        description: 'El uso de procesamiento natural de Lenguaje en human agent interaction',
      },
      {
        hour: '9:30 - 10:30 am',
        speacker: 'María del Pilar Arista Flores',
        description: 'Inteligencia Artificial Generativa aplicada a la Gestión de Proyectos ',
      },
      {
        hour: '10:30 - 11:30 am',
        speacker: 'Eder Alonso Acevedo Marin',
        description: 'Metodología para la Implementación de Centros de Operaciones de Seguridad en Empresas Medianas y Pequeñas.',
      },
      {
        hour: '11:30 - 12:30 pm',
        speacker: 'Palabras del Mg. Jesús Heraclio Zúñiga Cueva, Director del Departamente Académico de Ingeniería de Sistemas e Informática',
        description: 'CEREMONIA DE CLAUSURA',
      },
    ],
  },
];

export default function EventsPage() {
  return (
    <>
      <Title />
      <Calendar />
      {
        DAYS.map((day, i) => <Day key={crypto.randomUUID()} day={day} bgDirection={i % 2 === 0 ? 'l' : 'r'} />)
      }
    </>
  );
}
