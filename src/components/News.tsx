import React from "react";

const News = () => {
  return (
    <div className="mb-8 px-6 ">
      <h2>News</h2>
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