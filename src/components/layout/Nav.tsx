import Image from 'next/image';
import AppContainer from '../helpers/AppContainer';
import Link from 'next/link';

/* FFF5F0 fff1e8 fff8f3*/
const Nav = function () {
  return (
    <nav className="tw-bg-[#fff] tw-py-3 tw-h-[14vh] tw-grid tw-place-items-center">
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
  );
};

export default Nav;
