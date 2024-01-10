import Contact from '@/components/pages/home/sections/Contact';
import WhatWeOffer from '@/components/pages/home/sections/WhatWeOffer';
import About from '@/components/pages/home/sections/About';
import Header from '@/components/pages/home/sections/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <WhatWeOffer />
        {/* <Contact /> */}
      </main>
    </>
  );
}
