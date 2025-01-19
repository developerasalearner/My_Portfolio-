import React from 'react';
import { ArrowRight, Code, Database, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl mx-auto relative">
            {/* Floating Icons Background */}
            <div className="absolute inset-0 -z-10">
              <Code className="text-blue-100 absolute top-0 left-0 animate-float" size={40} />
              <Database className="text-blue-100 absolute top-20 right-0 animate-float-delayed" size={40} />
              <Brain className="text-blue-100 absolute bottom-0 left-1/4 animate-float" size={40} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Chinmaya Kumar Palo
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6 animate-slide-up">
              Committed to Advancing Data Science and Pioneering Research Excellence
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
              I am a final-year CSE (Data Science) undergraduate with extensive experience in data science, 
              machine learning, artificial intelligence, and IoT. My academic journey, internships, research 
              contributions, and projects have prepared me to excel in solving real-world problems with 
              cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up-delayed">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;