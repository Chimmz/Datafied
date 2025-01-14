import Image from 'next/image';
import AppContainer from '../helpers/AppContainer';
import Link from 'next/link';

/* FFF5F0 fff1e8 fff8f3*/
const Nav = function () {
  return (
    <nav className="tw-h-[14vh] tw-grid tw-place-items-center tw-bg-[#fff] tw-p-4 md:tw-px-0">
      <AppContainer className="tw-flex tw-items-center tw-justify-between">
        <Link href="/">
          <Image
            src="/img/datafied-logo.png"
            width={60}
            height={60}
            alt="Datafied's logo"
          />
        </Link>
        <ul className="tw-flex tw-items-center tw-gap-12">
          <li>
            <a
              href="https://www.datafied.tech"
              target="_blank"
              className="hover:tw-text-pry tw-transition-colors duration-200"
            >
              Blog
            </a>
          </li>
          <li>
            <Link
              href="/#services"
              className="hover:tw-text-pry tw-transition-colors duration-200"
            >
              Our services
            </Link>
          </li>
        </ul>
      </AppContainer>
    </nav>
  );
};

export default Nav;
