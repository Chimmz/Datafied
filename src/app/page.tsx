import Contact from '@/components/pages/home/sections/Contact';
import WhatWeOffer from '@/components/pages/home/sections/WhatWeOffer';
import About from '@/components/pages/home/sections/About';
import Header from '@/components/pages/home/sections/Header';
import Testimonials from '@/components/pages/home/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <WhatWeOffer />
      <Testimonials />
      <Contact />
    </>
  );
}
