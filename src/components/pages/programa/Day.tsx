'use client';

import { Clock } from 'lucide-react';

import { Section } from '@/components/ui/section';

export default function Day({ day, bgDirection } : { bgDirection: 'l' | 'r', day: {
  date: string,
  events: {
    hour: string,
    speacker: string,
    description: string,
  }[]
} }) {
  return (
    <Section bgDirection={bgDirection} id="upcoming-events">
      <div className="w-full flex flex-col items-center gap-4 max-w-6xl">
        <h1 className="text-primary-title font-bold text-5xl text-center">
          {day.date}
        </h1>
        <p className="text-xl text-center w-full max-w-2xl mb-24">
          Únanse a uno de nuestros próximos eventos. Desde talleres hasta conferencias,
          nosotros te cubrimos.
        </p>
        <div className="flex flex-col gap-x-10 gap-y-16 md:gap-y-10" id="UpcomingEvents">
          {
        day.events.map(({
          description, hour, speacker,
        }) => (
          <>
            <article key={crypto.randomUUID()} className="w-full grid grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex flex-col gap-4 text-lg pl-4 items-end">
                <div className="flex gap-4 items-center w-48">
                  <Clock className="w-8 h-8" />
                  <h4 className="">{hour}</h4>
                </div>
              </div>
              <div className="flex flex-col gap-2 max-w-2xl">
                <h2 className="font-bold text-2xl text-start text-primary-title">
                  {description}
                </h2>
                <p className="text-xl text-start mb-6">
                  {speacker}
                </p>
              </div>
            </article>
            <div className="w-full max-w-4xl h-[3px] bg-accent mx-auto" />
          </>
        ))
      }
        </div>
      </div>
    </Section>
  );
}
