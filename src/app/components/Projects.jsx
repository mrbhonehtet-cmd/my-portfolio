import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Project 1 - Blue to Cyan Gradient */}
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
    {/* ... Image section remains same ... */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Ai Chatbot
      </h3>
      <p className="text-gray-300 mb-4">A modern AI-powered chatbot...</p>
      {/* ... rest of card ... */}
    </div>
  </div>

  {/* Project 2 - Orange to Pink Gradient */}
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
    {/* ... Image section remains same ... */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Food Donation Matching System
      </h3>
      <p className="text-gray-300 mb-4">An Algorithms based platform...</p>
      {/* ... rest of card ... */}
    </div>
  </div>

  {/* Project 3 - Purple to Indigo Gradient */}
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
    {/* ... Image section remains same ... */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        Game Leaderboard Ranking Dashboard
      </h3>
      <p className="text-gray-300 mb-4">A real-time competitive ranking...</p>
      {/* ... rest of card ... */}
    </div>
  </div>
</div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
          >
            Other Projects are in local 
          </a>
        </div>
      </div>
    </section>
  );
}
