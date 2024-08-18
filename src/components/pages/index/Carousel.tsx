import Gradient from '@/components/ui/gradient';
import Image from 'next/image';

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953801/jvunl5jqtwthwsyf0gzd.webp',
    alt: 'Conocenos 2',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953873/yay6ppum6lqqwrgn57kr.webp',
    alt: 'Conocenos 3',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953894/wxpk7ugm3f7shschdkar.webp',
    alt: 'Conocenos 4',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953914/tfgzbuwlvuwmedz6ufhm.webp',
    alt: 'Conocenos 5',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953801/jvunl5jqtwthwsyf0gzd.webp',
    alt: 'Conocenos 2',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953873/yay6ppum6lqqwrgn57kr.webp',
    alt: 'Conocenos 3',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953894/wxpk7ugm3f7shschdkar.webp',
    alt: 'Conocenos 4',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1716953914/tfgzbuwlvuwmedz6ufhm.webp',
    alt: 'Conocenos 5',
  },
];

export default function Carousel() {
  return (
    <div className="w-full overflow-hidden relative" id="sliderAbout">
      <div id="sliderAbout-track">
        {
      IMAGES.map(({ alt, src }) => (
        <div key={crypto.randomUUID()} className="w-[40rem] pr-4">
          <Image
            className="w-full aspect-video rounded-lg bg-web-gray-100 dark:bg-accent object-cover"
            alt={alt}
            src={src}
            width={600}
            height={600}
          />
        </div>
      ))
    }
      </div>
      <Gradient direction="l" />
      <Gradient direction="r" />
    </div>
  );
}
