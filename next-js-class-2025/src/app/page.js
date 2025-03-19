'use client';
import { useEffect, useState, useRef } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(
  () => import('../components/ModelViewer').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading 3D model...</p>
  }
);

export default function Home() {
  const [isNameMoved, setIsNameMoved] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectCardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const hasAnimated = localStorage.getItem('hasAnimated') === 'true';
    if (hasAnimated) {
      setIsNameMoved(true);
      setIsInitial(false);
    }

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        (!projectCardRef.current || !projectCardRef.current.contains(event.target))
      ) {
        setExpandedProject(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNameClick = () => {
    setIsNameMoved(true);
    localStorage.setItem('hasAnimated', 'true');
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.add('visible');
  };

  const handleProjectClick = (projectId, event) => {
    event.stopPropagation(); // Stop propagation to prevent minimizing when clicking inside the box
    setExpandedProject(projectId === expandedProject ? null : projectId);
  };

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleCloseClick = () => {
    setExpandedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "Project A",
      date: "13/2/2025",
      description: "Short project description",
      details: "Detailed information about Project A.",
      modelPath: "/models/testcube.gltf"
    },
    {
      id: 2,
      title: "Project B",
      date: "13/2/2025",
      description: "Short project description",
      details: "Detailed information about Project B.",
      modelPath: "/models/testreal.gltf"
    },
    {
      id: 3,
      title: "Project C",
      date: "13/2/2025",
      description: "Short project description",
      details: "Detailed information about Project C."
    },
    {
      id: 4,
      title: "Project D",
      date: "13/2/2025",
      description: "Short project description",
      details: "Detailed information about Project D."
    }
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className="centered-name text-center moved"
        id="nameSection"
      >
        <Link href="/blank">
          <h1 className="text-6xl font-bold mb-4">Chanin J.</h1>
        </Link>
        <p className="text-2xl text-gray-600">A1198</p>
      </div>
      <Menubar />
      <div className="content-container" ref={containerRef}>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
              onClick={(event) => handleProjectClick(project.id, event)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              ref={expandedProject === project.id ? projectCardRef : null}
            >
              <div className="project-card-content">
                {project.modelPath && !expandedProject && (
                  <div className="project-thumbnail">
                    <ModelViewer modelPath={project.modelPath} isThumb={hoveredProject === project.id} />
                  </div>
                )}
                <h2 className="project-title">{project.title}</h2>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                {expandedProject === project.id && (
                  <div className="project-details" onClick={(e) => e.stopPropagation()}>
                    <p>{project.title}</p>
                    {project.modelPath && (
                      <div className="model-viewer-container">
                        <ModelViewer modelPath={project.modelPath} isThumb={false} />
                      </div>
                    )}
                    <button className="close-button" onClick={handleCloseClick}></button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {expandedProject && (
          <div className="project-card expanded">
            <div className="project-card-content">
              <h2 className="project-title">{projects.find(p => p.id === expandedProject).title}</h2>
              <p className="project-date">{projects.find(p => p.id === expandedProject).date}</p>
              <p className="project-description">{projects.find(p => p.id === expandedProject).description}</p>
              <div className="project-details" onClick={(e) => e.stopPropagation()}>
                <p>{projects.find(p => p.id === expandedProject).title}</p>
                {projects.find(p => p.id === expandedProject).modelPath && (
                  <div className="model-viewer-container">
                    <ModelViewer modelPath={projects.find(p => p.id === expandedProject).modelPath} isThumb={false} />
                  </div>
                )}
                <button className="close-button" onClick={handleCloseClick}></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}