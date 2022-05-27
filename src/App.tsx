import React, { useEffect } from 'react';
// import Header from './components/Header';
// import Carousel from './components/Carousel';
// import News from './components/News';
// import Enquiries from './components/Enquiries';
// import SiteLinks from './components/SiteLinks';
// import ImportantDates from './components/ImportantDates';
// import AerialView from './components/AerialView';
// import Footer from './components/Footer';

import {
  Header,
  Carousel,
  News,
  Enquiries,
  SiteLinks,
  ImportantDates,
  AerialView,
  Footer,
} from './components';

const App: React.FC = () => {
  
  // close the menu dropdown when elsewhere is clicked;
  useEffect(() => {
    const body = document.querySelector('body')!;
    const menuItems = '.faculties, .colleges, .links, .links-list, .faculties-list, .colleges-list';

    body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if(!document.querySelector('.navigation')?.contains(target)) {
        document.querySelectorAll(menuItems).forEach(el => {
          el.classList.remove('show');  
        })};
    });
  }, [])
  
  
  return (
    <div className="font-[Inter] bg-gray-600- bg-custom-300 text-gray-100 App container max-w-4xl mx-auto">
      <Header />
      <Carousel />
      <News />
      <ImportantDates />
      <AerialView />
      {/* Some of our Top Courses */}
      <SiteLinks />
      <Enquiries />
      <Footer />
    </div>
  );
}

export default App;
