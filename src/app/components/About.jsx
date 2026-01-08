"use client";
import Lanyard from './Lanyard';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center relative">
          {/* Lanyard component overlapping the content */}
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center absolute md:relative md:z-0 z-20" style={{ marginTop: '-50px' }}>
            <div className="w-64 h-100 md:w-96 md:h-[800px]">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
          
          {/* Content section with padding to accommodate the overlapping card */}
          <div className="md:w-2/3 w-2/3 md:pl-16 pt-60 md:pt-5 relative z-10">
            <h3 className="text-5xl font-bold mb-6 text-white">Who am I?</h3>
            <p className="text-gray-300 md:text-2xl text-justify text-1xl mb-6">
I am a dynamic young professional dedicated to bridging the gap between creativity and technology. My journey into the digital world began with a simple curiosity about how websites work, which quickly evolved into a passion for building clean, user-focused interfaces.
As a Junior Frontend & Backend Developer and UI/UX Designer, I stand at the intersection of technical precision and artistic innovation. I specialize in building responsive applications using HTML, CSS, JavaScript, and React, while also leveraging Python to support backend functionality.
            </p>
            <p className="text-gray-300 md:text-2xl text-justify text-1xl mb-8">
            My design philosophy focuses on simplicity and usability. I believe that a great digital product should not only look beautiful but also create an emotional connection through thoughtful, seamless interactions. I am constantly exploring new ways to bring impactful ideas to life, ensuring that every project I touch is both innovative and resonant with its
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="mr-4 text-blue-400">
                  <i className="fas fa-calendar-alt text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Experience</h4>
                  <p className="text-gray-300">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-pink-400">
                  <i className="fas fa-project-diagram text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Projects</h4>
                  <p className="text-gray-300">10+ Completed</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-pink-400">
                  <i className="fas fa-award text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Awards</h4>
                  <p className="text-gray-300">2 Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
