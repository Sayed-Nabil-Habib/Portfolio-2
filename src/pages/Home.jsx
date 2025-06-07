import React from 'react';
import { Link } from 'react-router-dom';
import jsFrameworksImg from '../media/js-frameworks.png';
import semesterProjectImg from '../media/semesterPrject.png';
import examProjectImg from '../media/ExamProject.png';

const projects = [
  {
    id: 1,
    title: 'JavaScript Frameworks',
    teaser: 'A quick overview of building scalable apps using popular JavaScript frameworks.',
    image: jsFrameworksImg,
  },
  {
    id: 2,
    title: 'Semester Project 2',
    teaser: 'An academic full-stack application featuring user auth and dynamic content.',
    image: semesterProjectImg,
  },
  {
    id: 3,
    title: 'Exam Project 2',
    teaser: 'Final assessment project using modern web tools for a deployed portfolio site.',
    image: examProjectImg,
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-white">
      <div className="mb-12 flex items-center min-h-[60vh]">
        <div>
          <h1 className="text-2xl font-poppins">Hi, My name is</h1>
          <h2 className="text-5xl font-bold font-poppins">Sayed Habib.</h2>
          <h3 className="text-3xl font-semibold text-teal-400 font-poppins">I build things for the web.</h3>
          <p className="mt-4 max-w-xl text-white text-lg font-poppins">
            I am currently studying web development at Noroff, and I am on the road to becoming a tech maestro. I am set to graduate in the summer of 2025.
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 font-poppins">Featured Projects</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="bg-white p-4 border rounded-xl shadow hover:shadow-yellow-400 transition-shadow duration-300 cursor-pointer h-full flex flex-col">
              <div className="relative mb-3 w-full h-32 rounded overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <h2 className="text-xl font-semibold text-teal-400 font-poppins">{project.title}</h2>
              <p className="text-black mt-2 text-sm font-poppins">{project.teaser}</p>
              <div className="mt-auto text-black text-sm pt-4 font-poppins">Read more →</div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
