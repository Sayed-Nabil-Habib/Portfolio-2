import React from 'react';
import { useParams } from 'react-router-dom';
import jsFrameworksImg from '../media/js-frameworks.png';
import semesterProjectImg from '../media/semesterPrject.png';
import examProjectImg from '../media/ExamProject.png';


const projects = [
  {
    id: 1,
    title: 'JavaScript Frameworks',
    article: 'This is a simple e-commerce store built with React. The store allows users to browse products, view details, add items to the cart, and complete a checkout process. A Scroll to Top button was added as an improvement for better user experience',
  
    image: jsFrameworksImg,
    live: 'https://storied-sunflower-20e524.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/Online-Store',
    reflections: '- Implemented a "Scroll to Top" button to improve user navigation experience, especially on long pages Enhanced UI feedback and interactivity'
  },
  {
    id: 2,
    title: 'Semester Project 2',
    article: 'This project was developed as part of Semester Project 2. It is a responsive single-page application that allows users to browse auction-style listings, log in, post their own items, and interact with other users',
    image: semesterProjectImg,
    live: 'https://elio1.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/semesterProject2',
    reflections: 'Added brand logo to the navbar for better visual identity and branding.Improved accessibility by including descriptive alt text for all images, making the site more inclusive and SEO-friendly.Cleaned up and organized the HTML layout and spacing for easier maintenance and better readability'
  },
  {
    id: 3,
    title: 'Exam Project 2',
    article: 'This is a simple e-commerce store built with React. The store allows users to browse products, view details, add items to the cart, and complete a checkout process. A Scroll to Top button was added as an improvement for better user experience',
    image: examProjectImg,
    live: 'https://melodic-kheer-aa1fce.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/EasyStay',
    reflections: 'Provided improvement suggestions to enhance project complexity and performance.These included: authentication system, filtering and sorting for listings, global state management, calendar-based booking, and routing with React Router.Suggestions were documented and added to the README file for future development.'
  }
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <div className="p-6 text-white font-poppins">Project not found.</div>;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="container mx-auto px-4 text-white font-poppins">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-teal-400 mb-4">{project.title}</h1>
        <button onClick={copyLink} className="text-sm text-blue-400 underline">Copy Link</button>
      </div>
      <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-auto object-cover" />
      <figcaption className="mb-4 text-sm text-gray-400">Project Screenshot</figcaption>
      <p className="text-lg mb-4">{project.article}</p>
      <div className="flex gap-4 mb-4">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Live Site</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">GitHub Repo</a>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-teal-400">Reflections & Improvements</h2>
      <p className="text-lg">{project.reflections}</p>
    </div>
  );
}
