import { Raleway, Rubik, Open_Sans, Poppins } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-poppins'
});

export default { raleway, rubik, openSans, poppins };
