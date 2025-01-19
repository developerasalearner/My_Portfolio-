import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Lead',
      company: 'Technoclare Global Solution',
      period: 'Jan 2025 - Present',
      description: 'Managed a team at Technoclare Global Solution to develop and implement innovative AI solutions, driving business growth and operational efficiency.',
    },
    {
      title: 'Research Intern',
      company: 'Next-Gen Research and Innovation Hub',
      period: 'Dec 2024 - Jan 2025',
      description: 'Acquired advanced research skills through expert-led sessions and collaborative projects, focusing on machine learning, NLP, academic writing, and innovation.',
    },
    {
      title: 'Research Intern',
      company: 'NISER Bhubaneswar',
      period: 'May 2024 – July 2024',
      description: 'Researched RISC V architecture applications in machine learning.',
    },
    {
      title: 'Advanced Data Analytics Intern',
      company: 'Edunet Foundation',
      period: 'Feb 2024 – Mar 2024',
      description: 'Led a customer segmentation project using Python.',
    },
    {
      title: 'Machine Learning Intern',
      company: 'Feynn Labs',
      period: 'Jan 2024 – Feb 2024',
      description: 'Collaborated on ML projects, enhancing team workflows and technical outputs.',
    },
    {
      title: 'Data Analyst Trainee',
      company: 'MedTourEasy',
      period: 'Jan 2024 - Jan 2024',
      description: 'Gained expertise in data analytics and healthcare insights by completing the Google Analytics Professional Certification and applying data-driven decision-making with R.',
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'AICTE NEAT',
      period: 'May 2023 - Sep 2023',
      description: 'Explored the world of #AI, enhancing skills in Matlab coding and machine learning algorithms while engaging with advanced technologies.',
    },
    {
      title: 'Incubation Intern',
      company: 'Weneurs Forum',
      period: 'May 2023 - Jul 2023',
      description: 'Contributed to the Aadyaa project by supporting aspiring entrepreneurs through strategy development, market research, and resource planning to nurture their entrepreneurial growth.',
    },
    {
      title: 'AIML Intern',
      company: 'CTTC Bhubaneswar',
      period: 'Jun 2023 – Jul 2023',
      description: 'Developed a face recognition system integrating Python, ML, and Computer Vision.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;