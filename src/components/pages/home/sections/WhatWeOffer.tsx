import React from 'react';

import cls from 'classnames';
import HomeSection from '.';
import Image from 'next/image';
import { services } from '../config';

const WhatWeOffer = () => {
  return (
    <HomeSection
      id="services"
      title={
        <>
          What we Offer
          <br />
          <span className="tw-text-[1.4rem] tw-uppercase tw-text-textColor tw-tracking-[4px]">
            Level up your Data game with Datafied
          </span>
        </>
      }
    >
      <ul>
        {services.map((service, i) => {
          const shouldReverse = i % 2;
          const needsTopSpace = [2, 3, 4, 5];
          return (
            <li
              className={cls(
                'tw-flex tw-items-center tw-gap-14',
                shouldReverse && 'tw-flex-row-reverse',
                needsTopSpace.includes(i) && 'tw-mt-14'
              )}
            >
              <Image src={service.img.src} width={450} height={200} alt="" />
              <div>
                {/* <h4 className="tw-text-sec tw-text-4xl tw-font-openSans tw-mb-5"> */}
                <h4 className="tw-text-pry tw-tracking-[2px] tw-font-openSans tw-uppercase tw-mb-9">
                  {service.title}
                </h4>
                <p className="tw-leading-relaxed">{service.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </HomeSection>
  );
};

export default WhatWeOffer;
