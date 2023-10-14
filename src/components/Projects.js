import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Import your CSS file

const Projects = () => {
  const projectData = [
    {
      title: 'IOT Project',
      description: 'Description for Project ',
    },
    {
      title: 'Web Project',
      description: 'Description for project',
    },
    {
      title: 'Machine Learning Project',
      description: 'Description for Project ',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
