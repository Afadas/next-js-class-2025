'use client';
import { useEffect, useState } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';

export default function Home() {
  const [isNameMoved, setIsNameMoved] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const hasAnimated = localStorage.getItem('hasAnimated') === 'true';
    if (hasAnimated) {
      setIsNameMoved(true);
      setIsInitial(false);
    }
  }, []);

  const handleNameClick = () => {
    setIsNameMoved(true);
    localStorage.setItem('hasAnimated', 'true');
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.add('visible');
  };

  const projects = [
    {
      id: 1,
      title: "Project A",
      date: "13/2/2025",
      description: "Short project description here"
    },
    {
      id: 2,
      title: "Project B",
      date: "13/2/2025",
      description: "Another project description"
    },
    {
      id: 3,
      title: "Project C",
      date: "13/2/2025",
      description: "Another project description"
    },
    {
      id: 4,
      title: "Project D",
      date: "13/2/2025",
      description: "Another project description"
    }
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className={`centered-name text-center ${!isNameMoved ? 'initial' : 'moved'}`}
        id="nameSection"
      >
        <Link href="/blank">
          <h1 className="text-6xl font-bold mb-4">Chanin J.</h1>
        </Link>
        <p className="text-2xl text-gray-600">A1198</p>
      </div>
      <Menubar />
      <div className="content-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-date">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}