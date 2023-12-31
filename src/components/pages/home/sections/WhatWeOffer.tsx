import React from 'react';

import cls from 'classnames';
import Image from 'next/image';
import { services } from '../config';
import Section from '@/components/helpers/Section';

const WhatWeOffer = () => {
  return (
    <Section
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
      <ul className="tw-flex tw-flex-col tw-gap-44 md:tw-gap-5">
        {services.map((service, i) => {
          const shouldReverse = i % 2;
          const needsTopSpace = [2, 3, 4, 5];
          return (
            <li
              className={cls(
                'tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-5 tabLand:tw-gap-14 tw-text-center md:tw-text-left',
                shouldReverse && 'tw-flex-col md:tw-flex-row-reverse',
                needsTopSpace.includes(i) && 'tw-mt-14'
              )}
            >
              <Image src={service.img.src} width={450} height={200} alt="" />
              <div>
                {/* <h4 className="tw-text-sec tw-text-4xl tw-font-openSans tw-mb-5"> */}
                <h4 className="tw-text-pry tw-tracking-[1px] tw-font-openSans tw-uppercase tw-mb-7">
                  {service.title}
                </h4>
                <p className="tw-leading-relaxed">{service.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default WhatWeOffer;
