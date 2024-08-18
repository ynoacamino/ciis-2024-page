import { Section } from '@/components/ui/section';
import Link from '@/components/ui/link';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { LinkedinIcon } from 'lucide-react';

const EXPOSITORES = [
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },

  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/images/about-us/ponente.jpg',
  },
];

export default function Speakers() {
  return (
    <Section bgDirection="r" id="ponentes">
      <div className="w-full flex flex-col gap-4 max-w-6xl mx-auto justify-items-center">
        <div className="flex flex-col gap-3 text-xl justify-center">
          <h1 className="text-4xl text-primary-title font-bold">
            Ponentes
          </h1>
          <p>
            Como ponentes participarán destacados profesionales expositores académicos y de la industria internacionales desde Brasil, Chile, México, Estados Unidos, Perú.
          </p>
        </div>
        <div className="w-full max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
        EXPOSITORES.map((expositor) => (
          <div key={crypto.randomUUID()} className="flex gap-x-4 gap-y-8 items-center flex-col">
            <img
              src={expositor.imageUrl}
              alt={expositor.fullName}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4 px-2">
              <span className="w-full text-start font-bold text-primary text-xl">
                {expositor.fullName}
              </span>
              <p className="text-primary">
                {expositor.description}
              </p>
              <div className="flex gap-2 text-primary w-full justify-start">
                <Link href="/" className="bg-zinc-500 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link href="/" className="bg-zinc-500 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Linkedin</span>
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        ))
      }
        </div>
      </div>
    </Section>
  );
}
