'use client';
import AppContainer from '@/components/helpers/AppContainer';
import Section from '@/components/helpers/Section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Metadata, NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEventHandler, useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import COURSES from '../../../data/courses';
import { toTitleCase } from '@/utils/string-utils';

const metadata: Metadata = {
  title: 'Data Analytics | Datafied',
  description: `The Data Analytics course is designed for anyone who wants to enhance their data analysis
  skills, whether you're a business professional, data analyst, or just starting
  your career in data science`
};

const LEVELS = ['beginner', 'advanced'];
type Level = 'beginner' | 'advanced';

const WHAT_YOU_LEARN = [
  'Use tools like Excel, SQL, and Power BI to gather and analyze data',
  'Analyze and interpret complex data sets to make informed business decisions',
  'Present your findings in a clear and concise manner'
];

interface Props {
  searchParams: {
    level?: Level;
  };
}

const CoursePreviewPage: NextPage<Props> = function (props) {
  const [level, setLevel] = useState<Level>(() => {
    if (LEVELS.includes(props.searchParams.level!)) return props.searchParams.level!;
    return 'beginner';
  });

  const course = useMemo(() => COURSES.find(c => c.level === level), [level]);

  const handleChangeLevel: ChangeEventHandler<HTMLSelectElement> = ev => {
    setLevel(ev.target.value as Level);
  };

  return (
    <main>
      <header className="tw-relative tw-z-[3] tw-h-[27rem] tw-flex tw-bg-gray-200 tw-font-raleway">
        <img
          src="/img/academy-page-photo.jpg"
          className="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover"
          alt=""
        />
        <h2 className="tw-w-full tw-h-full tw-flex-center tw-bg-black/[.55] tw-text-[#F6BE9E]/95 tw-text-6xl tabLand:tw-text-7xl tw-font-semibold tw-text-center tw-z-[3]">
          <span className="-tw-translate-y-[3rem] tw-max-w-[20ch] tw-font-raleway">
            Data Analytics
          </span>
        </h2>
      </header>

      <AppContainer className="phone: tw-shadow-lg tw-bg-white -tw-translate-y-[9rem] tw-z-[5] tw-relative">
        <Section className="tw-p-10 tw-px-2 tabPort:tw-p-24" paddingBlock={false}>
          <p className="tw-parag tw-mb-20">{course?.overview}</p>
          <h4 className="tw-font-semibold tw-mb-9">What You Will Learn</h4>
          <ul className="tw-flex tw-flex-col tw-gap-5">
            {WHAT_YOU_LEARN.map(item => (
              <li key={item.slice(-7)} className="tw-flex tw-items-start tw-gap-3 ">
                <span className="tw-block tw-bg-[#fff8f3] tw-flex-center tw-w-12 tw-h-12 tw-rounded-full">
                  <Icon icon="clarity:success-line" className="tw-text-pry" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </AppContainer>

      <AppContainer>
        <div className="tw-bg-[#fff] tw-border tw-border-gray-400 tw-flex tw-items-center tw-gap-5 tw-p-10 tw-px-12 tw-rounded-lg">
          Data Analytics course level:
          <Form.Select
            className="tw-text-[17px] tw-max-w-[120px] tw-bg-gray-50 tw-border-gray-100 focus:tw-shadow-none tw-cursor-pointer tw-duration-100"
            onChange={handleChangeLevel}
          >
            {COURSES.map(c => (
              <option key={c.level} value={c.level}>
                {toTitleCase(c.level)}
              </option>
            ))}
          </Form.Select>
        </div>
      </AppContainer>

      <Section>
        <AppContainer className="tw-flex tw-flex-col tw-gap-10">
          <div>
            <span className="tw-font-semibold">Course duration: </span> {course!.duration}
          </div>
          <div>
            <span className="tw-font-semibold tw-mb-5 tw-block">Course Curriculum: </span>
            {course ? (
              <Accordion className="tw-max-w-4xl tw-mb-14">
                {course.curriculum.map((topic, i) => {
                  const [[topicName, description]] = Object.entries(topic);
                  return (
                    <Accordion.Item eventKey={Math.random().toString()} key={i}>
                      <Accordion.Header className="tw-border-none tw-bg-none hover:tw-bg-gray-50 tw-duration-100 tw-shadow-none">
                        <span className="tw-text-sec tw-text-[17px]">{topicName}</span>
                      </Accordion.Header>
                      <Accordion.Body>{description}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            ) : null}

            <div>
              <span className="tw-font-semibold tw-mb-5 tw-block">
                Who this course is for:
              </span>
              <p className="tw-max-w-4xl">
                This course is designed for anyone who wants to enhance their data
                analysis skills, whether you&apos;re a business professional, data
                analyst, or just starting your career in data science.
              </p>
            </div>
          </div>

          <div className="tw-relative tw-bg-pryLight tw-p-10 tw-px-14 tw-mt-14 tw-rounded-lg tw-overflow-hidden before:tw-absolute before:-tw-left-1 before:tw-w-3 before:tw-inset-y-0 before:tw-bg-pry">
            <p className="tw-mb-8">
              Please make sure to carefully select the level that corresponds to your
              current skill level and familiarity with data analytics concepts. Both
              levels offer comprehensive training and hands-on experience to equip you
              with the necessary skills for a successful career in data analytics.
            </p>
            <span className="tw-block tw-mb-2">For more enquiries:</span>
            <a
              href="https://wa.me/+2347013623317"
              target="_blank"
              className="tw-btn tw-btn-sm sm:tw-w-max tw-border tw-border-[transparent] hover:tw-border-[#19DC5B] tw-bg-[#fff] tw-text-[#19DC5B] hover:tw-text-[#49be70] tw-gap-3"
            >
              <Icon icon="mdi:whatsapp" width={22} color="#19DC5B" /> Chat with us
            </a>
          </div>
        </AppContainer>
      </Section>
    </main>
  );
};

export default CoursePreviewPage;
