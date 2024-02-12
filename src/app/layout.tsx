import type { Metadata } from 'next';
import fonts from './fonts';
import Image from 'next/image';
import AppContainer from '@/components/helpers/AppContainer';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '@/components/clients/BootstrapClient';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/pages/home/sections/Contact';

export const metadata: Metadata = {
  title: 'Datafied',
  description: 'Level up your Data Analytics game with Datafied!'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${fonts.raleway.variable} ${fonts.rubik.variable} tw-scroll-smooth`}
    >
      <body className="tw-font-rubik tw-text-textColor tw-min-h-screen tw-flex tw-flex-col">
        <Nav />

        {children}
        {/* <Contact /> */}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
};

export default RootLayout;
