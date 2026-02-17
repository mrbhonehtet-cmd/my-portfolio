import Image from "next/image";

export default function Projects() {

const projects = [
  {
    label: "Chatbot",
    labelcolor:"bg-blue-500",
    pname:"Ai Chatbot",
    img:"https://plus.unsplash.com/premium_photo-1726550550053-6e5f7190f1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBjaGF0JTIwYm90fGVufDB8fDB8fHww",
    description:"A modern AI-powered chatbot for my personl answer and other things.",
    link:"https://teal-chebakia-4bab69.netlify.app/",
    icons: [
      "fab fa-html5 text-orange-500",
      "fab fa-css3-alt text-blue-500",
      "fab fa-node-js text-green-500",
  ]},
  {
  label: "System Design",
  labelcolor: "bg-pink-500",
  pname: "Food Donation Matching System",
  img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  description: "An algorithms-based platform that connects food donors with local charities to reduce food waste.",
  link: "https://stalwart-pavlova-fea142.netlify.app/",
  icons: [
    "fab fa-js text-yellow-400",
    "fab fa-html5 text-orange-500",
    "fab fa-css3-alt text-blue-500",
  ]
},
{
  label: "System & Dashboard Design",
  labelcolor: "bg-purple-500",
  pname: "Game Leaderboard Ranking Dashboard",
  img: "https://plus.unsplash.com/premium_photo-1677870728110-3b3b41677a9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A real-time competitive ranking system featuring live score updates, player statistics tracking, and dynamic data filtering powered by Supabase.",
  link: "https://phyopoke-hln200ihg-saw-bone-htets-projects.vercel.app/",
  icons: [
    "fa-brands fa-react text-blue-500",
  ]
},
{
  label: "Full-Stack Development",
  labelcolor: "bg-purple-500",
  pname: "Multi-Notepad Cloud Platform",
  img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A type-safe productivity tool built with React.ts and Express.js. Features secure Firebase Authentication and a flexible MongoDB schema for organized, persistent note management across multiple categories.",
  link: "https://mutinotepad.netlify.app/",
  icons: [
    "fa-brands fa-react text-blue-500",
    "fab fa-node-js text-green-500",
  ]
}

];  
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
  {/* Project section*/}
  {projects.map((project, index)=>(
  <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.img}
        alt={project.name}
        width={600}
        height={400}
        className="w-full h-full object-cover transition duration-500 hover:scale-110"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-4 left-4">
        <span className={`${project.labelcolor} text-white text-xs font-medium px-2.5 py-0.5 rounded`}>{project.label}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{project.pname}</h3>
      <p className="text-gray-300 mb-4">
       {project.description}
      </p>
      <div className="flex justify-between items-center">
        <a href={project.link} className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
          View Project <i className="fas fa-arrow-right ml-2"></i>
        </a>
        <div className="flex space-x-2">
          {project.icons.map((icon, iconindex)=>(
            <i key={iconindex} className={icon}></i>
          ))}
          
        </div>
      </div>
    </div>
  </div>
  ))}
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
