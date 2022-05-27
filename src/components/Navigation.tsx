/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

const listOfFaculties = [
  'Faculty of Agriculture',
  'Faculty of Basic Medical Sciences',
  'Faculty of Clinical Sciences',
  'Faculty of Education',
  'Faculty of Engineering',
  'Faculty of Law',
  'Faculty of Life Sciences',
  'Faculty of Pharmacy',
  'Faculty of Physical Sciences',
  'Faculty of Business Administration',
]

const listOfLinks = [
  'Home',
  'About Us',
  'Academics',
  'Library',
  'TETFund',
  'Admission',
  'Satellite Centres',
  'Enterprises',
  'Support Services',
  'Transcript and Alumni',
  'Bulletin',
]

const Navigation: React.FC = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const lines = document.querySelectorAll(".hamburger span");

    const faculties = document.querySelector(".faculties");
    const facultiesList = document.querySelector(".faculties .faculties-list")!;

    const colleges = document.querySelector(".colleges");
    const collegesList = document.querySelector(".colleges .colleges-list")!;

    const links = document.querySelector(".links");
    const linksList = document.querySelector(".links .links-list")!;

    hamburger?.addEventListener("click", () => {
      hamburger.classList.toggle("open");

      lines.forEach((node) => {
        node.classList.toggle("open");
      });

      document.querySelector('.overlay')?.classList.toggle('hidden');
      
    });

    faculties?.addEventListener("mouseover", () => {
      faculties?.classList.toggle("show");
      facultiesList?.classList.toggle("show");

      if(facultiesList?.classList.contains("show")) {
        collegesList?.classList.remove('show');
        linksList?.classList.remove('show');
      }
      if(faculties?.classList.contains("show")) {
        colleges?.classList.remove('show');
        links?.classList.remove('show');
      }    
    });

    faculties?.addEventListener("mouseout", () => {
      faculties?.classList.remove("show");
      facultiesList?.classList.remove("show");
    })
    
    colleges?.addEventListener("mouseover", () => {
      colleges.classList.toggle('show');
      collegesList?.classList.toggle("show");

      if(collegesList?.classList.contains("show")) {
        facultiesList?.classList.remove("show");
        linksList?.classList.remove('show');
      }
      if(colleges?.classList.contains("show")) {
        faculties?.classList.remove("show");
        links?.classList.remove('show');
      }
    });

    colleges?.addEventListener("mouseout", () => {
      colleges?.classList.remove("show");
      collegesList?.classList.remove("show");
    })


    links?.addEventListener("mouseover", () => {
      links?.classList.toggle("show");
      linksList?.classList.toggle("show");

      if(linksList?.classList.contains("show")) {
        collegesList?.classList.remove('show');
        facultiesList?.classList.remove("show");
      }
      if(links?.classList.contains("show")) {
        colleges?.classList.remove('show');
        faculties?.classList.remove("show");
      }
    });

    links?.addEventListener("mouseout", () => {
      links?.classList.remove("show");
      linksList?.classList.remove("show");
    })

  }, []);

  return (
    <div className="navigation pb-2 pt-4 w-full block relative">
      <button className="hamburger absolute right-4 md:hidden">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div className=" overlay hidden flex flex-col w-full md:pr-8 md:flex md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0 items-center h-full">
        <div className="faculties">
          Faculties
          <ul className="faculties-list">
            {listOfFaculties.map((faculty, index) => (
              <li key={index} className="py-1">
                <a href="#">{faculty}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="colleges">
          Colleges
          <ul className="colleges-list">
            <li className='py-1'>Main Campus</li>
            <li className='py-1'>College of Health Sciences</li>
            <li className='py-1'>College of Engineering</li>
          </ul>
        </div>
        <div className="links">
          Links
          <ul className="links-list">
            {listOfLinks.map((link, index) => (
              <li key={index} className='py-1'>{link}</li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
