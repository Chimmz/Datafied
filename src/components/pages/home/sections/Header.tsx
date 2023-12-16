'use client';
import React from 'react';
import HomeSection from '.';
import Img1 from '../img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';
import Img2 from '../img/erik-brolin-ZARfCYDaVg0-unsplash.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

const Header = () => {
  /* #f7f7f7 fff3ed*/
  return (
    <HomeSection
      as="header"
      className="tw-bg-[#FFF5F0] tw-min-h-[80vh] tw-grid tw-place-items-center"
      containerClassName="tw-flex tw-items-start tw-gap-10"
    >
      <div className="tw-max-w-[45ch]">
        <h1 className="tw-font-raleway tw-font-light tw-text-8xl tw-text-sec tw-mb-16">
          <span className="tw-text-pry tw-uppercase tw-text-[20px] tw-font-bold tw-block tw-mb-4">
            Datafied:
          </span>
          Simplified data solutions in a data-driven era.
        </h1>

        <div className="tw-flex tw-items-center tw-space-x-6">
          <Link href="#services" className="tw-btn tw-bg-pry hover:tw-bg-pryDark">
            Explore more
          </Link>
          <button className="tw-flex tw-items-center tw-gap-1 tw-border tw-border-[#a8a8a8] hover:tw-border-pry tw-px-7 tw-py-4 tw-rounded-md hover:tw-text-pry tw-transition tw-duration-300">
            Datafied Academy
            <Icon icon="system-uicons:arrow-right" width={22} />
          </button>
        </div>
      </div>

      <figure className="tw-relative tw-borde tw-flex-1">
        <img
          src={Img1.src}
          className="tw-absolut tw-aspect-video tw-object-cover tw-h-52 tw-mb-32"
          alt=""
        />
        <img
          src={Img2.src}
          className="tw-absolute tw-left-1/2 -tw-translate-x-16 tw-top-1/2 -tw-translate-y-1/2 tw-aspect-video tw-object-cover tw-h-52"
          alt=""
        />
        <img
          src="/img/restaurant.jpg"
          className="tw-absolut tw-aspect-video tw-object-cover tw-h-52"
          alt=""
        />
      </figure>
    </HomeSection>
  );
};

export default Header;
