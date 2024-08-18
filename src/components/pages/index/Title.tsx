'use client';

import { cn, randomStrings } from '@/lib/utils';
import {
  useEffect, useMemo, useState,
} from 'react';

import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Title() {
  const FIRST_WORD = 'CIIS';
  const SECOND_WORD = '2024';
  const MILISECONDS = 80;
  const TIMES = 10;

  const [firstWord, setFirstWord] = useState(';&-1@:=');
  const [secondWord, setSecondWord] = useState('.:/=3,');

  const words1 = useMemo(() => randomStrings({
    strEnd: FIRST_WORD,
    strStart: '/-4!!)@',
    times: TIMES,
  }), []);

  const words2 = useMemo(() => randomStrings({
    strEnd: SECOND_WORD,
    strStart: "8+2>.'",
    times: TIMES + FIRST_WORD.length,
  }), []);

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstWord(words1[index1]);
      setSecondWord(words2[index2]);

      if (index1 < words1.length - 1) setIndex1(index1 + 1);
      if (index2 < words2.length - 1) setIndex2(index2 + 1);

      if (index1 >= words1.length - 1 && index2 >= words2.length - 1) {
        clearInterval(interval);
      }
    }, MILISECONDS);

    return () => clearInterval(interval);
  }, [index1, index2, firstWord, secondWord, words1, words2]);

  return (
    <div className={cn('', 'flex flex-col w-full mb-32 mt-28 max-w-4xl gap-4 px-6')}>
      <h1 className={cn(ibmPlexMono.className, 'text-primary-title font-extrabold flex flex-col text-9xl sm:text-9xl md:text-[10rem] leading-[0.9] overflow-hidden')}>
        <span className="text-web-gray text-4xl sm:text-5xl md:text-6xl">IEEE</span>
        <span className="flex">
          {
            firstWord.split('').map((letter, i) => (
              <span
                key={crypto.randomUUID()}
                className={cn('', {
                  'text-web-gray-200': letter !== FIRST_WORD[i],
                })}
              >
                {letter}
              </span>
            ))
          }
          <span className="sr-only">{FIRST_WORD}</span>
        </span>
        <span className="flex">
          {
            secondWord.split('').map((letter, i) => (
              <span
                key={crypto.randomUUID()}
                className={cn('', {
                  'text-web-gray-200': letter !== SECOND_WORD[i],
                })}
              >
                {letter}
              </span>
            ))
          }
          <span className="sr-only">{SECOND_WORD}</span>
        </span>
      </h1>
      <h2 className="text-4xl md:text-5xl font-semibold uppercase">
        IV Congreso Internacional de Ingenieria de Sistemas
      </h2>
    </div>
  );
}
