import React from 'react';
import Skill from './Skill';
import img3 from '../images/3.jpg';
const About = () => {
  return (
    <section className="p-6 mt-16 bg-gray-100">
      
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
          <img 
            src={img3} 
            alt="Profile" 
            className="rounded-full shadow-lg transform hover:scale-105 h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 transition-transform duration-300"
          />
        </div>
        
        <div className="md:w-2/3 md:pl-6">
        <h2 className="text-3xl sm:text-3xl font-semibold text-gray-700 mb-4">About Me</h2>
      
          <p className="text-base sm:text-lg text-gray-700 mb-4">
          Hello! I'm Muhammad Insha, a passionate backend developer with a knack for creating robust and efficient server-side applications. With a strong background in backend technologies and experience in various modern web frameworks, I strive to build performant, secure, and scalable applications.
          </p>

          <h2 className="text-3xl sm:text-3xl font-semibold text-gray-700 mb-4">Work Experience</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
          As a Node.js developer with 1 year of experience, I gained valuable skills during my internship at KPIT Technologies, where I contributed to various projects such as a e-Commerce platform, ChatApp, and a Hospital Management System. I developed robust backend services using Node.js and Express, integrated databases like MongoDB, and implemented RESTful APIs for seamless functionality. My work on real-time messaging features using Socket.IO in the ChatApp and managing secure data handling in the hospital system further honed my technical and problem-solving abilities. Additionally, I have experience in authentication, version control with Git, and collaborating in agile development environments.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Background</h3>
          <p className="text-gray-700 mb-6">
            I have a Bachelor's degree in Computer Science from CECOS University and have been working in the web development field for 1 year. During my career, I've had the opportunity to work on numerous projects, ranging from small business websites to large-scale web applications. 
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Skill skill="JavaScript" level="91%" />
            <Skill skill="React.js" level="88%" />
            <Skill skill="HTML/CSS" level="95%" />
            <Skill skill="Bootstrap" level="70%" />
            <Skill skill="API Development" level="80%" />
            <Skill skill="Version Control (Git)" level="85%" />
            <Skill skill="Database Management" level="76%" />
            <Skill skill="Caching & Optimization" level="75%" />
            <Skill skill="Authentication & Authorization" level="80%" />
            <Skill skill="CI/CD Pipeline" level="83%" />
            {/* Add more skills as needed */}
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-8 mb-4">Interests</h3>
          <p className="text-gray-700 mb-4">
            When I'm not coding, I enjoy playing e-games, cricket, and hiking in the mountains. I also love to explore the latest web development trends, contribute to open-source projects, and write blog posts about my experiences in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
