import React from 'react';
import HomeSection from '.';
import Image from 'next/image';

const Contact = () => {
  return (
    <HomeSection title="Send us a Message">
      <div className="tw-shadow-xl tw-flex tw-flex-col tablet:tw-flex-row tw-rounded-3xl tw-overflow-hidden tw-max-w-4x tw-mx-auto">
        {/* bg-gray-200 */}
        <figure
          className="tw-bg-white tw-flex-1 tw-flex-center"
          // style={{ backgroundImage: "url('/img/restaurant.jpg')" }}
        >
          <Image
            src="/img/datafied-logo.png"
            width={200}
            height={200}
            alt="Datafied Logo"
          />
        </figure>

        <form className="tw-bg-gradient-to-bl tw-from-[#FF5C00] tw-to-pry tw-flex-1 tw-grid tw-grid-cols-2 tw-gap-7 tw-p-12">
          <input
            type="text"
            placeholder="Your First Name"
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          />
          <input
            type="text"
            placeholder="Your Last Name"
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          />
          <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            placeholder="Write your message here..."
            className="tw-col-span-2 tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-2 tw-px-5"
          ></textarea>
          <button
            className="tw-col-span-2 tw-btn tw-bg-white/95 tw-text-pry tw-font-medium hover:tw-bg-white/100 hover:tw-text-textColor"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeSection>
  );
};

export default Contact;
