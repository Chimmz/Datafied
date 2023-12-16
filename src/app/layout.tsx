import type { Metadata } from 'next';
import './globals.css';
import fonts from './fonts';
import Image from 'next/image';
import AppContainer from '@/components/helpers/AppContainer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datafied',
  description: 'Level up your Data Analytics game with Datafied!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fonts.raleway.variable} ${fonts.rubik.variable} tw-scroll-smooth`}
    >
      <body className="tw-font-rubik">
        <nav className="tw-bg-[#FFF5F0] tw-py-3 tw-h-[14vh] tw-grid tw-place-items-center">
          <AppContainer className="tw-flex tw-items-center tw-justify-between">
            <Image
              src="/img/datafied-logo.png"
              width={60}
              height={60}
              alt="Datafied's logo"
            />
            <ul className="tw-flex tw-items-center tw-gap-12">
              <li>
                <Link
                  href="/blog"
                  className="hover:tw-text-pry tw-transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:tw-text-pry tw-transition-colors duration-200"
                >
                  Our services
                </Link>
              </li>
            </ul>
          </AppContainer>
        </nav>
        {children}
      </body>
    </html>
  );
}
