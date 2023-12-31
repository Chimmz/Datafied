'use client';
import AppContainer from '@/components/helpers/AppContainer';
import Section from '@/components/helpers/Section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Metadata } from 'next';
import React from 'react';
import { Form } from 'react-bootstrap';

const metadata: Metadata = {
  title: 'Data Analytics | Datafied',
  description: `The Data Analytics course is designed for anyone who wants to enhance their data analysis
  skills, whether you're a business professional, data analyst, or just starting
  your career in data science`
};

const WHAT_YOU_LEARN = [
  'Use tools like Excel, SQL, and Power BI to gather and analyze data',
  'Analyze and interpret complex data sets to make informed business decisions',
  'Present your findings in a clear and concise manner'
];

const DataAnalyticsPage = () => {
  return (
    <main>
      <header className="tw-relative tw-z-[3] tw-h-[27rem] tw-flex tw-bg-gray-200 tw-font-raleway">
        <img
          src="/img/academy-page-photo.jpg"
          className="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover"
          alt=""
        />
        <h2 className="tw-w-full tw-h-full tw-flex-center tw-bg-black/[.55] tw-text-6xl tabLand:tw-text-7xl tw-text-[#F6BE9E] tw-font-semibold tw-text-center tw-z-[3]">
          <span className="-tw-translate-y-[3rem] tw-max-w-[20ch]">Data Analytics</span>
        </h2>
      </header>

      <AppContainer className="phone: tw-shadow-lg tw-bg-white -tw-translate-y-[9rem] tw-z-[5] tw-relative">
        <Section className="tw-p-24" paddingBlock={false}>
          <p className="tw-parag tw-mb-20">
            This course is designed for anyone who wants to enhance their data analysis
            skills, whether you're a business professional, data analyst, or just starting
            your career in data science.
          </p>
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
        <div className="tw-bg-[#f7f7f7] tw-flex tw-justify-between tw-items-center tw-p-10 tw-px-12 tw-rounded-lg">
          Please select the level of the Data Analytics course you are interested in
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            className="tw-cursor-pointer tw-accent-pry"
            label={<span className="tw-text-pry">ADVANCED</span>}
          />
        </div>
      </AppContainer>
    </main>
  );
};

export default DataAnalyticsPage;
