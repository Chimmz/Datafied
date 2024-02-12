import React, { FC, useCallback } from 'react';
import cls from 'classnames';

import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Rating as StarRating } from 'react-simple-star-rating';

interface Props {
  title: string;
  username: string;
  explanation: string;
  rating: number;
  picturePosition?: string;
  index: number;
  onSeeMore?: () => void;
}

const MAX_EXPLANATION_WORDS = 30;

const TestimonialCard: FC<Props> = testimony => {
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

  const { explanation, hasMore } = resizeExplanation(testimony.explanation);

  return (
    <li
      id={`testimonial-${testimony.index}`}
      className="tw-z-10 tw-min-w-full tw-relative tw-border-t tw-border-t-[#f9f9f9] tw-mt-36 tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-white tw-rounded-xl tw-p-8 md:tw-p-14"
    >
      <Image
        src={`/img/testimonials/${testimony.username}.jpg`}
        width={130}
        height={130}
        alt={`Datafied's testifier: ${testimony.username} picture avatar`}
        className={cls(
          `tw-object-${testimony.picturePosition}`,
          testimony.username.toLowerCase().includes('pelumi') && 'tw-object-top',
          'tw-h-40 tw-w-40 tw-object-cover tw-absolute tw-left-1/2 tw-top-0 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-inline-block tw-rounded-full tw-ring-8 tw-ring-white'
        )}
      />
      <small className="tw-block tw-mb-20 tw-translate-y-14 md:tw-translate-y-10 tw-opacity-70 tw-uppercase">
        {testimony.username}
      </small>

      <StarRating
        className="tw-flex tw-mb-10"
        readonly
        initialValue={testimony.rating}
        allowFraction
        fillIcon={
          <Icon
            icon="ic:baseline-star"
            color="#E95E10"
            className="tw-inline-block"
            width={23}
          />
        }
        emptyIcon={
          <Icon
            icon="ic:baseline-star"
            color="#dedede"
            className="tw-inline-block"
            width={23}
          />
        }
      />

      <h4 className="tw-font-medium tw-text-sec tw-mb-10 tw-max-w-[35ch]">
        {testimony.title}
      </h4>

      <blockquote
        className={`tw-relative tw-mb-auto before:tw-absolute before:-tw-top-20 before:-tw-left-8 md:before:-tw-left-4 before:tw-content-['‟'] before:tw-text-[80px] before:tw-opacity-5`}
      >
        <p className="tw-text-[1.6rem]">{explanation}</p>
        <button
          onClick={testimony.onSeeMore}
          className={cls(
            !hasMore && 'hidden',
            'tw-btn tw-uppercase tw-text-[13px] hover:tw-text-pry tw-underline tw-underline-offset-[3px] tw-mx-auto'
          )}
        >
          Read more
        </button>
      </blockquote>
    </li>
  );
};

export default TestimonialCard;
