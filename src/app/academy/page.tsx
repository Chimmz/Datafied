import AppContainer from '@/components/helpers/AppContainer';
import Section from '@/components/helpers/Section';
import Testimonials from '@/components/pages/academy/sections/Testimonials';
import TestimonialsSlider from '@/components/pages/academy/sections/TestimonialsSlider';
import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

const COURSES = [
  {
    name: 'Data Analytics',
    stage: 'beginner',
    url: '/courses/data-analytics?level=beginner'
  },
  {
    name: 'Data Analytics',
    stage: 'advanced',
    url: '/courses/data-analytics?level=advanced'
  },
  { name: 'Data Science', url: '' },
  { name: 'Data Engineering', url: '' }
];

const AcademyPage = function () {
  return (
    <>
      <header className="tw-relative tw-h-[23rem] tw-flex tw-bg-gray-200 tw-font-raleway">
        <img
          src="/img/academy-page-photo.jpg"
          className="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover"
          alt=""
        />
        <h2 className="tw-w-full tw-h-full tw-text-[#3DCBFF]/[.8] tw-px-10 tw-flex-center tw-bg-black/[.55] tw-text-6xl tabLand:tw-text-7xl tw-font-semibold tw-text-center tw-z-10">
          <span className="tw-max-w-[20ch]">
            Simplify your journey as you start your tech career!
          </span>
        </h2>
      </header>

      <Section as="main" className="tw-flex-1">
        <div>
          <p className="tw-parag tw-text-center">
            We are passionate about taking the ambiguity associated with gaining tech
            skills by breaking them down into the simplest form that can be understood
            even by a 5-year-old. We want to help you simplify learning complications as
            you go through your journey to becoming an expert.
          </p>
          {/*  after:tw-top-full after:-tw-translate-y-1/2 after:tw-left-1/2 after:-tw-translate-x-1/2 after:tw-text-[12px] after:tw-uppercase after:tw-bg-gray-100 */}
          <Section title="Courses" className="tw-my-40">
            <ul className="tw-flex tw-justify-center tw-gap-8 tw-flex-wrap">
              {COURSES.map(course => (
                <Link
                  key={course.name}
                  href={course.url!}
                  className={cls(
                    'group hover:tw-bg-pry hover:tw-text-white tw-grid tw-place-items-center tw-gap-2 tw-relative tw-border tw-rounded-lg tw-p-8 tw-px-10 tw-cursor-pointer tw-shadow-md tw-duration-75 hover:not:after:tw-text-white',
                    course.stage &&
                      'after:tw-uppercase after:tw-text-[12px] after:tw-p-1 after:tw-px-3 after:tw-rounded-full group-hover:tw-bg-white',
                    course.stage === 'beginner' &&
                      "after:tw-content-['beginner'] after:tw-bg-[#3DCBFF]/10 after:tw-text-[#3b6d80]",
                    course.stage === 'advanced' &&
                      "after:tw-content-['advanced'] after:tw-bg-purple-700/10 after:tw-text-purple-700"
                  )}
                >
                  {course.name}
                </Link>
              ))}
            </ul>
          </Section>

          <TestimonialsSlider />

          <div className="tw-my-20 tw-flex tw-flex-col tabPort:tw-flex-row tw-items-center tw-justify-between tw-gap-14 tabPort:tw-gap-3 tw-text-center tabPort:tw-text-left tw-bg-pry tw-rounded-3xl tw-text-white tw-px-8 tw-py-24 md:tw-p-20">
            <p className="tw-text-6xl tw-parag tw-max-w-max tabPort:tw-max-w-[25ch] tw-font-raleway">
              Empower your decision-making with our expert-led Data Analytics courses.
            </p>
            <a
              href="https://bit.ly/datafied-data-analytics-registration"
              target="_blank"
              className="tw-btn-white  tw-rounded-full"
            >
              Sign up now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AcademyPage;
