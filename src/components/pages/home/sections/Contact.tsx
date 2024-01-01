'use client';
import React, { FormEventHandler } from 'react';
import Image from 'next/image';
import AppForm from '@/components/clients/AppForm';
import Section from '@/components/helpers/Section';
import { EmailJSResponseStatus } from '@emailjs/browser';
import useRequest from '@/hooks/useRequest';
import useInput from '@/hooks/useInput';
import { isRequired, isValidPhone } from '@/utils/validators/inputValidators';
import TextField from '@/components/ui/TextField';

const Contact = function () {
  const {
    sendReq: sendContactEmailReq,
    loading: isSendingContactEmail,
    response: emailResponse
  } = useRequest<EmailJSResponseStatus | undefined>();

  // const {
  //   inputValue: firstname,
  //   onChange: handleChangeFirstname,
  //   validationErrors: firstnameValidationErrors,
  //   runValidators: runFirstnameValidators,
  //   clearInput: clearFirstname
  // } = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });

  // const {
  //   inputValue: lastname,
  //   validationErrors: lastnameValidationErrors,
  //   onChange: handleChangelLastname,
  //   runValidators: runlLastnameValidators,
  //   clearInput: clearlLastname
  // } = useInput({ init: '', validators: [] });

  // const {
  //   inputValue: email,
  //   validationErrors: emailValidationErrors,
  //   onChange: handleChangeEmail,
  //   runValidators: runEmailValidators,
  //   clearInput: clearEmail
  // } = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });

  // const {
  //   inputValue: message,
  //   validationErrors: messageValidationErrors,
  //   onChange: handleChangeMessage,
  //   runValidators: runMessageValidators,
  //   clearInput: clearMessage
  // } = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });
  const firstname = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });
  const lastName = useInput({ init: '', validators: [] });
  const email = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });
  const phoneNo = useInput({ init: '', validators: [{ fn: isValidPhone, params: [] }] });
  const message = useInput({ init: '', validators: [{ fn: isRequired, params: [] }] });

  const validateFields = () => {
    const validations = [
      firstname.runValidators,
      lastName.runValidators,
      email.runValidators,
      message.runValidators
    ];
    if (phoneNo.inputValue.length) validations.push(phoneNo.runValidators);
    return validations.map(v => v()).every(v => !v.errorExists);
  };

  const sendMessage = () => {
    if (!validateFields()) return;
    console.log('Validation passed');
    // Send email here
  };

  return (
    <Section title="Have a Message for Us?" id="contact">
      <div className="tw-shadow-xl tw-flex tw-flex-col md:tw-flex-row tw-rounded-3xl tw-overflow-hidden tw-max-w-4x tw-mx-auto">
        <figure className="tw-hidden md:tw-flex-center tw-bg-[#f8f8f8] tw-flex-1">
          <Image
            src="/img/datafied-logo.png"
            width={150}
            height={150}
            alt="Datafied Logo"
          />
        </figure>

        <AppForm
          className="tw-bg-gradient-to-bl tw-from-[#FF5C00] tw-to-pry tw-flex-1 tw-grid tw-grid-cols-2 tw-gap-7 tw-p-12"
          onSubmit={sendMessage}
        >
          <TextField
            value={firstname.inputValue}
            onChange={firstname.handleChange}
            validationErrors={firstname.validationErrors}
            className="tw-col-span-2 phone:tw-col-span-1 "
            inputClassName="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white focus:tw-text-white tw-rounded-md tw-py-3 tw-px-5"
            placeholder="Your First Name"
            errorClassName="tw-text-[#ffb3f2]"
          />

          <TextField
            value={lastName.inputValue}
            onChange={lastName.handleChange}
            validationErrors={lastName.validationErrors}
            className="tw-col-span-2 phone:tw-col-span-1 "
            inputClassName="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white focus:tw-text-white tw-rounded-md tw-py-3 tw-px-5"
            placeholder="Your Last Name"
            errorClassName="tw-text-[#ffb3f2]"
          />
          {/* <input
            type="text"
            placeholder="Your Last Name"
            className='tw-col-span-2 phone:tw-col-span-1 '
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          /> */}
          <TextField
            value={email.inputValue}
            onChange={email.handleChange}
            validationErrors={email.validationErrors}
            className="tw-col-span-2 phone:tw-col-span-1 "
            inputClassName="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white focus:tw-text-white tw-rounded-md tw-py-3 tw-px-5"
            placeholder="Your Email"
            errorClassName="tw-text-[#ffb3f2]"
          />
          {/* <input
            type="email"
            placeholder="Your Email"
            className='tw-col-span-2 phone:tw-col-span-1 '
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          /> */}

          <TextField
            type="tel"
            value={phoneNo.inputValue}
            onChange={phoneNo.handleChange}
            validationErrors={phoneNo.validationErrors}
            className="tw-col-span-2 phone:tw-col-span-1 "
            inputClassName="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white focus:tw-text-white tw-rounded-md tw-py-3 tw-px-5"
            placeholder="Your Mobile Number"
            errorClassName="tw-text-[#ffb3f2]"
          />
          {/* <input
            type="tel"
            placeholder="Your Mobile Number"
            className='tw-col-span-2 phone:tw-col-span-1 '
            className="tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-3 tw-px-5"
          /> */}

          <TextField
            as="textarea"
            cols={10}
            rows={10}
            value={message.inputValue}
            onChange={message.handleChange}
            validationErrors={message.validationErrors}
            className="tw-col-span-2 tw-row-span-6"
            inputClassName="tw-col-span-1 tw-h-52 phone:tw-col-span-2 tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white focus:tw-text-white tw-rounded-md tw-py-3 tw-px-5"
            placeholder="Write your message here..."
            errorClassName="tw-text-[#ffb3f2]"
          />
          {/* <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            placeholder="Write your message here..."
            className="tw-col-span-2 tw-bg-white/30 focus:tw-bg-white/40 placeholder:tw-text-white/50 tw-text-white tw-rounded-md tw-py-2 tw-px-5"
          ></textarea> */}
          <button
            className="tw-col-span-2 tw-btn tw-bg-white/95 tw-text-pry tw-font-medium hover:tw-bg-white/100 hover:tw-text-textColor"
            type="submit"
          >
            Submit
          </button>
        </AppForm>
      </div>
    </Section>
  );
};

export default Contact;
