'use client';
import React, { useCallback, useMemo, useState } from 'react';
import { Rating as StarRating } from 'react-simple-star-rating';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { testimonials } from '../../../../data/testimonials.json';
import { Modal } from 'react-bootstrap';
import cls from 'classnames';
import Section from '@/components/helpers/Section';

const MAX_EXPLANATION_WORDS = 30;

const Testimonials = () => {
  const [activeTestimonyIndex, setActiveTestimonyIndex] = useState<number | undefined>();

  const testimonies = useMemo(
    () => testimonials.sort((prev, next) => next.rating - prev.rating),
    []
  );

  const resizeExplanation = useCallback((text: string) => {
    const words = text.split(' ');
    const hasMore = words.length > MAX_EXPLANATION_WORDS;
    return {
      hasMore,
      explanation: words
        .slice(0, MAX_EXPLANATION_WORDS + 1)
        .join(' ')
        .concat(hasMore ? '...' : '')
    };
  }, []);

  return (
    <Section title="What People Say About Us" className="tw-bg-[#f5f5f5]">
      <ul className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
        {testimonies.map((testimony, index) => {
          const { explanation, hasMore } = resizeExplanation(testimony.explanation);

          return (
            <li
              key={testimony.title}
              className="tw-relative tw-mt-36 tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-white tw-rounded-xl tw-p-10 tw-pt-20 tw-min-w-[350px] tw-max-w-[400px]"
            >
              <Image
                src="/img/restaurant.jpg"
                width={130}
                height={130}
                alt="Austin's avatar photo"
                className="tw-w-36 tw-h-36 tw-object-cover tw-absolute tw-left-1/2 tw-top-0 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-inline-block tw-rounded-full tw-ring-8 tw-ring-white"
              />
              <small className="tw-block tw-mb-10 tw-opacity-70 tw-uppercase">
                {testimony.username}
              </small>
              <h6 className="tw-font-medium tw-text-sec tw-mb-5 tw-max-w-[25ch]">
                {testimony.title}
              </h6>
              <blockquote
                className={`tw-relative before:tw-absolute before:-tw-top-14 before:-tw-left-2 before:tw-content-['‟'] before:tw-text-[80px] before:tw-opacity-5 tw-mb-4`}
              >
                <small>{explanation}</small>
                <button
                  onClick={setActiveTestimonyIndex.bind(null, index)}
                  className={cls(
                    !hasMore && 'hidden',
                    'tw-btn tw-uppercase tw-text-[13px] hover:tw-text-pry tw-underline tw-underline-offset-[3px] tw-mx-auto'
                  )}
                >
                  Read more
                </button>
              </blockquote>

              <StarRating
                readonly
                initialValue={testimony.rating}
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
                    color="#dedede"
                    className="tw-inline-block"
                  />
                }
                className="tw-flex"
              />
            </li>
          );
        })}
      </ul>
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
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Section>
  );
};

export default Testimonials;
