'use client';
import React from 'react';
import HomeSection from '.';
import { Rating as StarRating } from 'react-simple-star-rating';
import Img from '../img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';

const testimonials = [
  {
    username: 'NNAMDI ISICHEI AUSTIN',
    title: 'I will use their services again',
    explanation: `With Datafied, I learnt the core concepts of Data Analysis with Excel,
    PowerBI, Tableau. From managing a meagre income, I now work at my dream
    company at Silicon Valley.`,
    rating: 4,
    img: Img
  },
  {
    username: 'NNAMDI ISICHEI AUSTIN',
    title: 'I will use their services again',
    explanation: `With Datafied, I learnt the core concepts of Data Analysis with Excel,
    PowerBI, Tableau. From managing a meagre income, I now work at my dream
    company at Silicon Valley.`,
    rating: 4,
    img: Img
  },
  {
    username: 'NNAMDI ISICHEI AUSTIN',
    title: 'I will use their services again',
    explanation: `With Datafied, I learnt the core concepts of Data Analysis with Excel,
    PowerBI, Tableau. From managing a meagre income, I now work at my dream
    company at Silicon Valley.`,
    rating: 4,
    img: Img
  },
  {
    username: 'NNAMDI ISICHEI AUSTIN',
    title: 'I will use their services again',
    explanation: `With Datafied, I learnt the core concepts of Data Analysis with Excel,
    PowerBI, Tableau. From managing a meagre income, I now work at my dream
    company at Silicon Valley.`,
    rating: 4,
    img: Img
  }
];

const Testimonials = () => {
  return (
    <HomeSection
      title="What People Say About Us"
      className="tw-bg-[#f5f5f5]"
      // titleClassName="tw-mb-44"
    >
      <ul className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
        {testimonials.map(test => (
          <li className="tw-relative tw-mt-36 tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-white tw-rounded-xl tw-p-10 tw-pt-20 tw-min-w-[300px] tw-max-w-[350px]">
            <Image
              src={test.img.src}
              width={100}
              height={120}
              alt="Austin's avatar photo"
              className="tw-w-36 tw-h-36 tw-object-cover tw-absolute tw-left-1/2 tw-top-0 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-inline-block tw-rounded-full tw-ring-8 tw-ring-white"
            />
            <small className="tw-block tw-mb-10 tw-opacity-50 tw-uppercase">
              {test.username}
            </small>
            <h6 className="tw-font-medium tw-text-sec tw-mb-5">{test.title}</h6>
            <blockquote
              className={`tw-relative before:tw-absolute before:-tw-top-9 before:-tw-left-5 before:tw-content-['‟'] before:tw-text-9xl before:tw-opacity-5 tw-mb-5`}
            >
              <small>{test.explanation}</small>
            </blockquote>

            <StarRating
              readonly
              initialValue={test.rating}
              allowFraction
              fillIcon={
                <Icon
                  icon="ic:baseline-star"
                  color="#E95E10"
                  className="tw-inline-block"
                />
              }
              emptyIcon={
                <Icon
                  icon="ic:baseline-star"
                  color="#b1b1b1"
                  className="tw-inline-block"
                />
              }
              className="tw-flex"
            />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
};

export default Testimonials;
