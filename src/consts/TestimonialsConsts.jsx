import React from 'react';
import AUB from '../assets/AUB_logo.3f1150ac.svg';
import BiRiZ from '../assets/biRiZ_logo.d3aa371f.svg';
import BlueChip from '../assets/blueChip_logo.2fd68ab2.svg';
import ColumbiaGC from '../assets/columbiaGC_logo.d83e8aeb.svg';
import DotLe from '../assets/dotLe_logo.358c40c7.svg';
import ICDF from '../assets/ICDF_logo.d5934fe8.svg';
import IstanbulUni from '../assets/istanbulUni_logo.90779e87.svg';
export const testimonialsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 2,
};
export const OurProductsCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export const ourPartnersInfo = [
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={AUB} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={BiRiZ} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={BlueChip} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={ColumbiaGC} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={DotLe} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={ICDF} />
  </div>,
  <div>
    <img alt="Partner" className=" w-24 sm:w-24 xl:w-56" src={IstanbulUni} />
  </div>,
];
export const testimonialsInfo = [
  <div>
    <h3 className="text-gray-600 pt-2">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="text-gray-600 pt-2">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
];
