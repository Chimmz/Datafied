import Image from 'next/image';

const AcademyPage = function () {
  return (
    <>
      <header className="tw-relative tw-h-72 tw-bg-gray-200 tw-grid tw-place-items-center tw-font-raleway">
        <Image
          src="/img/academy-page-photo.jpg"
          width={1}
          height={1}
          className="tw-w-full tw-h-full tw-absolute tw-left-0 tw-object-cover"
          alt=""
        />
        <h1 className="tw-text-6xl tw-max-w-[20ch] tw-text-[#FFBB95] tw-font-semibold tw-text-center ">
          Simplify your journey as you start your tech career!
        </h1>
      </header>
      <main className="tw-flex-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente optio
          cum omnis, magnam non repellendus maiores iste recusandae cupiditate. A repellat
          quidem eaque modi sunt facere accusantium voluptate possimus.
        </p>
      </main>
    </>
  );
};

export default AcademyPage;
