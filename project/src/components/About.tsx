import React from 'react';
import { BookOpen, Award, Code } from 'lucide-react';

const About = () => {
  const skills = [
    'Python',
    'C',
    'R',
    'SQL',
    'Data Science',
    'Machine Learning',
    'Applied Statistic',
    'Deep Learning',
    'Data Structures',
    'Advanced Excel',
    'Tableau',
    'Data Visualization',
    'ANN',
    'CNN',
  ];

  const certifications = [
    'Google Analytics Professional Certification (Google)',
    'Career Essentials in Generative AI (Microsoft & Linkedin)',
    'Career Essentials in Data Analysis (Microsoft & Linkedin)',
    'Career Essentials in Business Analysis (Microsoft & Linkedin)',
    'IT Service Management Professional Certificate (Atlassian)',
    'Artificial Intelligence Primer Certification (Infosys)',
    'Advance Excel (Internshala)',
    'SQL for Beginners (Udemy)',
    'Data Visualization in Tableau (Unstop)'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <p className="text-gray-700 font-medium">CSE (Data Science)</p>
                <p className="text-gray-600">Gandhi Institute of Engineering and Technology University, Gunupur</p>
                <p className="text-blue-600 font-medium mt-2">SGPA 8.88(last Sem), CGPA 8.33/10</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;