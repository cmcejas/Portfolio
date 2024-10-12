import { useEffect, useRef } from 'react';
import Image from 'next/image';
import code from 'public/code.png';
import education from 'public/education.png';
import os from 'public/os.png';
import briefcase from 'public/briefcase.png';
import languages from 'public/languages.png';
import guitar from 'public/guitar.png';

const Tiles = () => {
  const tileRefs = useRef([]); // Create a ref array to hold tile references

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    tileRefs.current.forEach((tile) => {
      if (tile) observer.observe(tile);
    });

    return () => {
      tileRefs.current.forEach((tile) => {
        if (tile) observer.unobserve(tile);
      });
    };
  }, []);

  return (
    <section id="two" className="pt-30 md:pt-0 lg:pt-0">
      <br className="invisible md:visible"></br>
      <div>
        <h3 className="py-1 text-5xl font-bold text-white">About Me</h3>
      </div>

      <div className="gap-10 px-7 md:px-10 lg:flex-wrap lg:flex">
        {[
          {
            img: education,
            title: 'Education',
            description: 'High School Student',
            details: [
              'Programming I (Python)',
              'AP Computer Science A (Java)',
              'AP Calc AB/BC',
              'Trig/Pre-Calc Honors',
              'Algebra II Honors',
              'Engineering Design IS',
            ],
            imgWidth: 250,
            imgHeight: 250,
            detailsHeader: 'Relevant Courses',
          },
          {
            img: code,
            title: 'Programming Languages',
            description: 'I am fluent in these.',
            details: [
              'Python',
              'Java',
              'HTML',
              'CSS',
              'ReactJS',
              'TailwindCSS',
              'NextJS',
            ],
            imgWidth: 150,
            imgHeight: 150,
          },
          {
            img: os,
            title: 'Operating Systems',
            description: 'In order from most to least used.',
            details: [
              'Microsoft Windows',
              'Ubuntu based distributions',
              'Arch based distributions',
              'Debian based distributions',
              'Apple Mac OS',
            ],
            imgWidth: 218,
            imgHeight: 250,
          },
          {
            img: briefcase,
            title: 'Professional Experience',
            description: 'More Information on Resume.',
            details: [
              <span className="font-extrabold">Web Developer at Parkt</span>,
              'I work alongside a team to develop the ',
              <span className="font-bold text-teal-500 underline">
                <a href="https://parkt.app/" target="_blank" rel="noopener noreferrer">website</a>
              </span>,
              'Many projects on GitHub.',
            ],
            imgWidth: 160,
            imgHeight: 250,
          },
          {
            img: languages,
            title: 'Languages Spoken',
            description: 'English Bilingual Proficiency',
            details: [
              'English Bilingual Proficiency',
              'Spanish Bilingual Proficiency',
              'French Limited Working Proficiency',
              <span>Currently Learning: <span className="font-bold text-teal-500">German Elementary Level</span></span>,
            ],
            imgWidth: 210,
            imgHeight: 250,
          },
          {
            img: guitar,
            title: 'Hobbies',
            description: 'Club and High School Soccer',
            details: [
              'Club and High School Soccer',
              'Acoustic and Electric Guitar',
              'Programming personal projects',
              <span>School Clubs <span className="font-bold text-teal-500 cursor-pointer"><a href="#one">listed on resume</a></span></span>,
            ],
            imgWidth: 270,
            imgHeight: 250,
          },
        ].map((tile, index) => (
          <div
            key={index}
            className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            ref={(el) => (tileRefs.current[index] = el)} // Assign ref to each tile
            style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}
          >
            <Image
              src={tile.img}
              width={tile.imgWidth}
              height={tile.imgHeight}
              alt={tile.title}
              className="pb-3 mx-auto"
            />
            <h3 className="pt-8 pb-2 text-lg font-medium text-white">{tile.title}</h3>
            <p className="py-2 text-slate-300">{tile.description}</p>
            {tile.detailsHeader && <h4 className="py-3 text-teal-500">{tile.detailsHeader}</h4>}
            {tile.details.map((detail, idx) => (
              <p key={idx} className="py-1 text-gray-400 text-sm">{detail}</p> // Adjusted font size
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiles;
