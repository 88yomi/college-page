import React, { useEffect } from 'react';
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
import { Route, Routes } from 'react-router-dom';
import Faculty from '../src/pages/Faculty'

const App: React.FC = () => {
  
  // close the menu dropdown when elsewhere is clicked;
  useEffect(() => {
    const body = document.querySelector('body')!;
    const menuItems = '.faculties, .colleges, .links, .links-list, .faculties-list, .colleges-list';

    const hamburger = document.querySelector(".hamburger");
    const lines = document.querySelectorAll(".hamburger span");


    hamburger?.addEventListener("click", () => {
      hamburger.classList.remove("open");

      lines.forEach((node) => {
        node.classList.remove("open");
      });

      document.querySelector('.overlay')?.classList.remove('hidden');

    });

    
    body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if(!document.querySelector('.navigation')?.contains(target)) {
        document.querySelectorAll(menuItems).forEach(el => {
          el.classList.remove('show');  
        })};
    });
  }, [])
  
  
  return (
      <Routes>
    <div className="font-[Inter] bg-custom-300 text-gray-100 App container max-w-4xl mx-auto tracking-normal">
        <Route path='/' element={
        <>
          <Header />
          <Carousel />
          <News />
          <ImportantDates />
          <AerialView />
          {/* Some of our Top Courses */}
          <SiteLinks />
          <Enquiries />
          <Footer /> 
        </>
      } />
        <Route path='faculty'>
          <Route path=':culty' element={<Faculty />} />
        </Route>
      
    </div>
      </Routes> 
  );
}

export default App;
