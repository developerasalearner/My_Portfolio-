import React from 'react';
import { BookOpen, Users } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Research Contributions</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Book Chapter Publication</h3>
                <p className="text-blue-600 font-medium">Apple Academic Press</p>
                <p className="text-gray-500 text-sm mb-2">Expected Publication: May 2025</p>
                <p className="text-gray-600">
                  "IoT-Integrated Hybrid Renewable Energy System" - A comprehensive chapter exploring
                  the integration of IoT technologies in renewable energy systems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Conference Publication</h3>
                <p className="text-blue-600 font-medium">MDPI - 3rd International Electronic Conference</p>
                <p className="text-gray-500 text-sm mb-2">Process Control and Monitoring</p>
                <p className="text-gray-600">
                  Published research focusing on innovative approaches to process control and monitoring
                  systems, contributing to the field of industrial automation and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;