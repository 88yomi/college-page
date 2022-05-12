import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import News from './components/News';
import Enquiries from './components/Enquiries';
import SiteLinks from './components/SiteLinks';
import ImportantDates from './components/ImportantDates';
import AerialView from './components/AerialView';

const App: React.FC = () => {
  return (
    <div className="bg-gray-600 text-gray-100 App container max-w-4xl mx-auto">
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
