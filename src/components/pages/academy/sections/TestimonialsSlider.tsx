'use client';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import TESTIMONIES from '../../../../data/testimonials-data';
import { Modal } from 'react-bootstrap';
import cls from 'classnames';
import Section from '@/components/helpers/Section';
import TestimonialCard from './comps/TestimonialCard';
import { Rating as StarRating } from 'react-simple-star-rating';
import HorizontalScroll from '@/components/HorizontalScroll';

const TestimonialsSlider = () => {
  const [activeTestimonyIndex, setActiveTestimonyIndex] = useState<number | undefined>();
  const listRef = useRef<HTMLUListElement | null>(null);

  const testimonies = useMemo(
    () => TESTIMONIES.sort((prev, next) => next.rating - prev.rating),
    []
  );

  return (
    <Section title="What People Say About Us" className="tw-bg-[#fff] tw-relative">
      <ul
        ref={listRef}
        className="tw-max-w-[50rem] tw-flex tw-gap-8 tw-mx-auto tw-borde tw-pb-16 tw-px-4 tw-overflow-x-scroll tw-u-scrollbar-none"
      >
        {testimonies.map((testimony, i) => (
          <TestimonialCard
            key={testimony.username}
            {...testimony}
            index={i}
            onSeeMore={setActiveTestimonyIndex.bind(null, i)}
          />
        ))}
      </ul>
      {/* Slider buttons */}
      <HorizontalScroll
        itemsTotal={testimonies.length}
        containerRef={listRef}
        itemsLoaded
      />

      <Modal
        show={typeof activeTestimonyIndex === 'number'}
        size="lg"
        centered
        onHide={setActiveTestimonyIndex.bind(null, undefined)}
        scrollable
      >
        <Modal.Header className="tw-flex tw-items-start tw-flex-wrap tw-border-none tw-px-12 tw-pt-12">
          <h6 className="tw-text-4xl tw-text-sec tw-mb-5">
            {testimonies[activeTestimonyIndex!]?.title}
          </h6>
          <StarRating
            readonly
            initialValue={testimonies[activeTestimonyIndex!]?.rating}
            allowFraction
            fillIcon={
              <Icon
                icon="ic:baseline-star"
                color="#E95E10"
                className="tw-inline-block"
                width={22}
              />
            }
            emptyIcon={
              <Icon
                icon="ic:baseline-star"
                color="#dedede"
                className="tw-inline-block"
                width={22}
              />
            }
            className="tw-flex"
          />
        </Modal.Header>
        <Modal.Body className="tw-px-12 tw-pb-12">
          <p className="tw-text-[16px] tw-leading-loose">
            {testimonies[activeTestimonyIndex!]?.explanation}
          </p>
        </Modal.Body>
        <Modal.Footer className="tw-justify-center tw-items-stretch tw-bg-gray-100 tw-p-0">
          <button
            className="tw-w-full tw-simple-link tw-py-8"
            onClick={setActiveTestimonyIndex.bind(null, undefined)}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </Section>
  );
};

export default TestimonialsSlider;
