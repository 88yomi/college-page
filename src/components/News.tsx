import React from "react";

const mockNews = [
  {
    title: 'National University Games Opening Ceremony',
    details: 'The 67th university games lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi, veniam.'
  },
  {
    title: 'International Research Club Committee Visit',
    details: 'The committee of the International Research Club Committee is visiting our prestigious university on the 2nd of August, 2022. The annual maintenance is scheduled for two weeks after then.'

  },
  {
    title: 'New Minerals Discovered in the school\'s environs',
    details: 'Diamonds were found on the ground around the school gate by the gateman and his coworkers around 7: 14pm last week'
  },
  {
    title: 'National University Games Opening Ceremony',
    details: 'The 67th university games lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi, veniam.'
  }
]

const News = () => {
  return (
    <div className=" px-6 py-6">
      <h3 className="text-4xl font-bold text-gray-100 font-[forum] mb-8">University College News: <em>The Official School Magazine</em></h3>
      <ul className="news-items space-y-16 text-center md:text-left">
        {mockNews.map((news, index) => (
          <li key={index} className="flxcol text-gray-200 cursor-pointer md:space-x-4">
            <img className="w-5/6 h-32 mx-auto bg-green-50 mb-2 md:w-[98%] md:h-48 md:rounded-md md:mb-4" src="" alt="news headline" />
            <div className="">
              <h6 className="capitalize font-semibold text-lg mb-1 md:text-xl">
                {news.title}
              </h6>
              <p className="text-sm text-gray-400 px-1 md:px-0 md:text-base">
                {news.details}
              </p>
            </div>
          </li>
        ))}        
      </ul>
    </div>
  );
};

export default News;