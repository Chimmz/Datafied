import React from 'react';
import HomeSection from '.';
import Img from '../img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <HomeSection
      title="What People are Saying"
      className="tw-bg-[#f7f7f7]"
      titleClassName="tw-mb-44"
    >
      <ul className="tw-flex tw-flex-wrap tw-justify-center">
        <li className="tw-relative tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-white tw-rounded-xl tw-p-10 tw-pt-20 tw-min-w-[300px] tw-max-w-[350px]">
          <Image
            src={Img.src}
            width={100}
            height={120}
            alt="Austin's avatar photo"
            className="tw-w-36 tw-h-36 tw-object-cover tw-absolute tw-left-1/2 tw-top-0 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-inline-block tw-rounded-full tw-ring-8 tw-ring-white"
          />
          <small className="tw-block tw-mb-10 tw-opacity-50">NNAMDI ISICHEI AUSTIN</small>
          <h6 className="tw-font-medium tw-text-sec tw-mb-5">
            I will use their services again
          </h6>
          <blockquote className="">
            <small>
              With Datafied, I learnt the core concepts of Data Analysis with Excel,
              PowerBI, Tableau. From managing a meagre income, I now work at my dream
              company at Silicon Valley.
            </small>
          </blockquote>
        </li>
      </ul>
    </HomeSection>
  );
};

export default Testimonials;
