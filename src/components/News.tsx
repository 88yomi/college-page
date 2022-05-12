import React from "react";

const News = () => {
  return (
    <div className="my-6 px-6 py-10">
      <h2>News</h2>
      <h3 className="mb-4 hidden md:block">
        University College News is the official magazine of The University of
        Simcity. It is produced by a small volunteer editorial staff comprising
        undergraduate students, graduates and visiting scholars.
        <s>
          It's not just a publication, but also a platform for emerging writers,
          photographers, poets and illustrators to showcase their talents.
        </s>
      </h3>
      <ul className="news-items space-y-8 md:grid md:grid-cols-2 md:grid-rows-2">
        <li className="flex md:flex-col">
          <img className="hidden md:block" src="" alt="news headline" />
          <div className="">
            <h6 className="uppercase font-semibold text-lg">
              National University Games Opening Ceremony
            </h6>
            <p className="text-sm">
              The 67th university games lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi, veniam.
            </p>
          </div>
        </li>
        <li className="flex md:flex-col">
          <img className="hidden md:block" src="" alt="news headline" />
          <div className="">
            <h6 className="uppercase font-semibold text-lg">
              International Research Club Committee Visit
            </h6>
            <p className="text-sm">
              The committee of the International Research Club Committee is visiting our prestigious university on the 2nd of August, 2022. The annual maintenance is scheduled for two weeks after then.
            </p>
          </div>
        </li>
        <li className="flex md:flex-col">
          <img className="hidden md:block" src="" alt="news headline" />
          <div className="">
            <h6 className="uppercase font-semibold text-lg">
              New Minerals Discovered in the school's environs
            </h6>
            <p className="text-sm">
              Diamonds were found on the ground around the school gate by the gateman and his coworkers around 7:14pm last week
            </p>
          </div>
        </li>
        <li className="flex md:flex-col">
          <img className="hidden md:block" src="" alt="news headline" />
          <div className="">
            <h6 className="uppercase font-semibold text-lg">
              National University Games Opening Ceremony
            </h6>
            <p className="text-sm">
              The 67th university games lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi, veniam.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default News;