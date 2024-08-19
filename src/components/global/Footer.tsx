'use client';

import Link from 'next/link';
import { NAVLINKS } from '@/data/navLinks';
import IEEEOfficial from '../logos/IEEEOfficial';
import ImageCarousel from '../ui/ImageCarousel';

export default function Footer() {
  return (
    <footer className="w-full border-t border-section pt-10 flex justify-center items-start">
      <div className="w-full max-w-7xl mb-10 px-6 flex flex-col gap-16">
        <div className="w-11/12 flex items-center justify-center mx-auto">
          <ImageCarousel />
        </div>
        <div className="w-full grid md:grid-cols-3 gap-10">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.3716834651264!2d-71.524458!3d-16.405939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b01d1551105%3A0x64eb10832094761c!2sEscuela%20de%20ingenier%C3%ADa%20de%20sistemas!5e0!3m2!1ses!2sus!4v1723958775530!5m2!1ses!2sus"
            className="w-full aspect-square"
            loading="lazy"
          />
          <div className="flex-col flex gap-10">
            <iframe
              name="f7861faed184c64f0"
              width="340px"
              height="130px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              allow="encrypted-media"
              src="https://web.facebook.com/v18.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df9b5bd0d4b14fb841%26domain%3D435822453-atari-embeds.googleusercontent.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252F435822453-atari-embeds.googleusercontent.com%252Ff5984247ccee79fb2%26relation%3Dparent.parent&amp;container_width=349&amp;height=70&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPaginaOficialUNSA&amp;locale=es_ES&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
              className=""
            />
            <iframe
              name="f8d961adb120d04f1"
              width="340px"
              height="130px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              allow="encrypted-media"
              src="https://web.facebook.com/v18.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df4d03fd6ef59ee140%26domain%3D435822453-atari-embeds.googleusercontent.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252F435822453-atari-embeds.googleusercontent.com%252Ffab869cf97a7eebc2%26relation%3Dparent.parent&amp;container_width=349&amp;height=70&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100058821592327&amp;locale=es_ES&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
              className=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-xl">Informes</strong>
            <span>
              <strong>Direccion:</strong>
              <span className="ml-2">Av. Venezuela, Paucarpata - Arequipa</span>
            </span>
            <span>
              <strong>
                Teléfono:
              </strong>
              <span className="ml-2">
                (054) 283023
              </span>
            </span>
            <span>
              <strong>
                E-mail:
              </strong>
              <span className="ml-2">
                epis@unsa.edu.pe
              </span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-10 gap-y-14 w-full">
          <div className="w-full flex justify-center lg:justify-start">
            <IEEEOfficial className="w-full max-w-lg" />
          </div>
          <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
            {
          NAVLINKS.map(({ links, text, href }) => {
            if (links) {
              return (
                <div key={crypto.randomUUID()} className="flex flex-col gap-3 border-b-[1px] lg:border-b-0 border-web-gray-300 py-4 w-full lg:w-auto">
                  <Link
                    href={href}
                    className="font-bold text-primary-title text-2xl"
                  >
                    {text}
                  </Link>
                  <div className="flex flex-col text-lg gap-2 w-full">
                    {
                  links.map(({ name: subName, path: subPath }) => (
                    <Link
                      href={subPath}
                      key={crypto.randomUUID()}
                      className="flex items-start text-start hover:underline min-w-fit"
                    >
                      {subName}
                    </Link>
                  ))
                }
                  </div>
                </div>
              );
            }
            return null;
          })
        }
          </div>
        </div>
      </div>
    </footer>
  );
}
