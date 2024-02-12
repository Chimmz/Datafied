const SignupCta = () => {
  return (
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
  );
};

export default SignupCta;
