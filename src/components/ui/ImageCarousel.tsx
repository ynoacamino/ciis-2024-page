/* eslint-disable react/no-array-index-key */

'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="w-full">
      {
        Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={`/carousel/${index + 1}.jpeg`}
            alt="Ponente"
            className="w-full aspect-video md:aspect-[24/9] object-cover rounded-lg"
          />
        ))
      }
    </Slider>
    // <div />
  );
}
