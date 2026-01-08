"use client";
import { useEffect } from "react";

const skillsLeft = [
  { name: "HTML/CSS", percent: 95 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 45 },
  { name: "Node.js", percent: 30 },
];

const skillsRight = [
  { name: "UI/UX Design", percent: 90 },
  { name: "Communication", percent: 60 },
  { name: "Problem Solving", percent: 95 },
  { name: "Teamwork", percent: 88 },
];

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-progress");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width") || "0%";
            entry.target.style.width = "0";
            setTimeout(() => {
              entry.target.style.width = width;
            }, 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {skillsLeft.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-gray-300">{s.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width={`${s.percent}%`} style={{ width: `${s.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Professional Skills</h3>
            <div className="space-y-6">
              {skillsRight.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-gray-300">{s.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width={`${s.percent}%`} style={{ width: `${s.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-html5 text-4xl text-orange-500 mb-2"></i>
              <span className="text-sm">HTML5</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-css3-alt text-4xl text-blue-500 mb-2"></i>
              <span className="text-sm">CSS3</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-js text-4xl text-yellow-400 mb-2"></i>
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fa-brands fa-python text-4xl text-blue-400 mb-2"></i>
              <span className="text-sm">Python</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-node-js text-4xl text-green-600 mb-2"></i>
              <span className="text-sm">Node.js</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-figma text-4xl text-purple-500 mb-2"></i>
              <span className="text-sm">Figma</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fa-brands fa-react text-4xl text-blue-500 mb-2"></i>
              <span className="text-sm">React</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center w-24 hover:bg-gray-600 transition duration-300">
              <i className="fab fa-git-alt text-4xl text-orange-600 mb-2"></i>
              <span className="text-sm">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
