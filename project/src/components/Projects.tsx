import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CNNFaceQuest',
      description: 'A CNN-enabled attendance system achieving 98.87% accuracy, leveraging deep learning for facial recognition and automated attendance tracking.',
      tags: ['Python', 'CNN', 'OpenCV', 'Deep Learning'],
      github: '#',
      demo: '#',
    },
    {
      title: 'HealthSense',
      description: 'A predictive healthcare model utilizing machine learning for healthcare management, enabling early disease detection and personalized treatment recommendations.',
      tags: ['Machine Learning', 'Python', 'Healthcare', 'Data Analytics'],
      github: '#',
      demo: '#',
    },
    {
      title: 'IoT Sensor Network for Agriculture',
      description: 'Research in progress on integrating IoT for smarter agricultural solutions, focusing on sensor networks and data-driven decision making.',
      tags: ['IoT', 'Python', 'Agriculture', 'Sensors'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;