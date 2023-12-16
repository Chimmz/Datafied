import { Raleway, Rubik, Open_Sans } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export default { raleway, rubik, openSans };
