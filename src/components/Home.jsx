import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skill';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://kinsta.com/wp-content/uploads/2019/10/wordpress-portfolio-plugin.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6 mx-4 md:mx-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">I'm Muhammad Insha, a Node js Backend Developer</h3>
            <p className="text-base md:text-lg lg:text-xl mb-6">
            Passionate about building robust and efficient web applications, I specialize in backend development using technologies like Node.js, Express, and databases such as MongoDB and SQL. I focus on creating scalable, secure, and performant APIs, ensuring seamless data flow and optimizing server-side logic to solve real-world challenges.
            </p>
            <a href="/contact" className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
