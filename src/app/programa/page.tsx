import Calendar from '@/components/pages/programa/Calendar';
import Title from '@/components/pages/programa/Title';
import Day from '@/components/pages/programa/Day';

const DAYS = [
  {
    date: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
    ],
  },
  {
    date: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
    ],
  },
  {
    date: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'Redes neuronales generativas adversativas ¿cómo funcionan? ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
      },
      {
        hour: '9:00 - 9:30 am',
        speacker: 'Ing. Jesús Zúñiga Cueva',
        description: 'La Interacción Humano-Computador en Iberoamérica: Retos y Oportunidades ',
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
