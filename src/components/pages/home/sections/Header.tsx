'use client';
import React from 'react';
import Img1 from '../img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';
import Img2 from '../img/erik-brolin-ZARfCYDaVg0-unsplash.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import Section from '@/components/helpers/Section';

const Header = () => {
  /* #f7f7f7 fff3ed fff1e8 fff8f3*/
  return (
    <Section
      as="header"
      className="tw-bg-[#fff] tw-min-h-[80vh] tw-grid tw-place-items-center"
      containerClassName="tw-flex tw-flex-col tw-text-center tw-items-center tw-gap-20 tabPort:tw-flex-row tabPort:tw-text-left tabPort:tw-items-start"
    >
      <div className="tw-max-w-[70ch] tabPort:tw-max-w-[40ch]">
        <h1 className="tw-font-raleway tw-font-light tw-text-7xl tabPort:tw-text-8xl tw-text-sec tw-mb-16">
          <span className="tw-text-pry tw-uppercase tw-text-[20px] tw-font-bold tw-block tw-mb-8 tabPort:tw-mb-4">
            Datafied:
          </span>
          Simplified data solutions in a data-driven era.
        </h1>

        <div className="tw-flex tw-flex-col phone:tw-flex-row tabPort:tw-items-center tw-justify-center tw-gap-6 tabPort:tw-justify-start">
          <Link href="#services" className="tw-btn-pry">
            Explore more
          </Link>
          {/* <Link
            href="/academy"
            className="tw-btn tw-gap-1 tw-bg-white tw-text-pry tw-border tw-border-transparent hover:tw-border-pry hover:tw-text-pry"
          >
            Datafied Academy
            <Icon icon="system-uicons:arrow-right" width={22} />
          </Link> */}
          <Link
            href="/academy"
            className="tw-btn tw-gap-1 tw-border tw-border-[#d6d6d6] hover:tw-border-pry hover:tw-text-pry"
          >
            Datafied Academy
            <Icon icon="system-uicons:arrow-right" width={22} />
          </Link>
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
    </Section>
  );
};

export default Header;
