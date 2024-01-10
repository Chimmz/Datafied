'use client';
import React from 'react';
import AppContainer from '../helpers/AppContainer';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
// import {toTitleCase} from '.'

const Footer = () => {
  const socials = [
    { name: 'facebook', link: 'https://www.facebook.com/profile.php?id=100093213545379' },
    { name: 'instagram', link: 'https://www.instagram.com/datafied.academy/' },
    { name: 'linkedin', link: 'https://www.linkedin.com/company/datafiedhub/' }
  ];
  return (
    <footer className="tw-bg-[#292624] tw-relative tw-text-[1.3rem] tw-text-white/50 tw-border-t tw-border-t-gray-300">
      <AppContainer className="tw-flex tw-flex-col md:tw-flex-row tw-gap-10 tw-items-center tw-justify-between tw-py-24">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-8">
          <Image
            src="/img/datafied-logo_bg-white.png"
            width={60}
            height={60}
            alt="Datafied's logo"
          />
          Copyright © 2023 Datafied
        </div>
        <ul className="tw-mx-auto tw-flex tw-items-center tw-gap-5">
          <li>
            <Link href="/" className="tw-simple-link">
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://www.datafied.tech/"
              target="_blank"
              className="tw-simple-link"
            >
              Blog
            </a>
          </li>
          <li>
            <Link href="/academy" className="tw-simple-link">
              Datafied Academy
            </Link>
          </li>
        </ul>

        <ul className="tw-flex tw-items-center tw-gap-6">
          {socials.map(soc => (
            <li key={soc.name}>
              <a href={soc.link} target="_blank">
                <Icon
                  icon={`ri:${soc.name}-fill`}
                  className="hover:tw-text-white tw-duration-200 tw-transition-colors"
                  width={24}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/+2348168995496"
          target="_blank"
          className="tw-absolute tw-right-1/2 tw-translate-x-1/2 md:tw-right-7 md:tw-translate-x-0 tw-bottom-3 tw-min-w-max tw-text-white hover:tw-text-gray-300"
        >
          Designed & Developed by Divine
        </a>
      </AppContainer>
    </footer>
  );
};

export default Footer;
