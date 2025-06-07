import React from 'react';
import { useParams } from 'react-router-dom';
import jsFrameworksImg from '../media/js-frameworks.png';
import semesterProjectImg from '../media/semesterPrject.png';
import examProjectImg from '../media/ExamProject.png';


const projects = [
  {
    id: 1,
    title: 'JavaScript Frameworks',
    article: '...',
    image: jsFrameworksImg,
    live: 'https://storied-sunflower-20e524.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/Online-Store',
    reflections: '...'
  },
  {
    id: 2,
    title: 'Semester Project 2',
    article: '...',
    image: semesterProjectImg,
    live: 'https://elio1.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/semesterProject2',
    reflections: '...'
  },
  {
    id: 3,
    title: 'Exam Project 2',
    article: '...',
    image: examProjectImg,
    live: 'https://melodic-kheer-aa1fce.netlify.app/',
    github: 'https://github.com/Sayed-Nabil-Habib/Online-Store',
    reflections: '...'
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
