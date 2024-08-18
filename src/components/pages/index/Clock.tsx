'use client';

import { Section } from '@/components/ui/section';
import { useEffect, useState } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const countdown = new Date('10-21-2024').getTime();

export default function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      setDays(Math.floor(distance / DAY));
      setHours(Math.floor((distance % DAY) / HOUR));
      setMinutes(Math.floor((distance % HOUR) / MINUTE));
      setSeconds(Math.floor((distance % MINUTE) / SECOND));
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days]);

  return (
    <Section bgDirection="l" className="w-full max-w-6xl flex flex-col justify-center items-center py-10 gap-y-10">
      <h1 className="text-5xl font-bold text-primary-title text-center">
        Cuenta regresiva para el evento
      </h1>
      <div className="uppercase text-primary flex gap-2 text-sm md:text-xl">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl font-semibold">{days}</span>
          <span>Dias</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl font-semibold">{hours}</span>
          <span>Horas</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl font-semibold">{minutes}</span>
          <span>Minutos</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl font-semibold">{seconds}</span>
          <span>Segundos</span>
        </div>
      </div>
    </Section>
  );
}
