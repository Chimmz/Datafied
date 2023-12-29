import React from 'react';
import AppContainer from '../helpers/AppContainer';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="tw-text-[1.3rem] tw-text-white/50 tw-border-t tw-border-t-gray-300 tw-bg-[#3C4B55]">
      <AppContainer className="tw-flex tw-flex-col md:tw-flex-row tw-gap-10 tw-items-center tw-justify-between tw-py-24">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-8">
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
            <Link href="/" className="tw-simple-link">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="tw-simple-link">
              Datafied Academy
            </Link>
          </li>
        </ul>
      </AppContainer>
    </footer>
  );
};

export default Footer;
