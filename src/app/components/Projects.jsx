import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1726550550053-6e5f7190f1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBjaGF0JTIwYm90fGVufDB8fDB8fHww"
                alt="Project 1"
                width={600}
                height={400}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">Chatbot</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ai Chatbot</h3>
              <p className="text-gray-300 mb-4">
                A modern AI-powered chatbot for my personl answer and other things.
              </p>
              <div className="flex justify-between items-center">
                <a href="https://teal-chebakia-4bab69.netlify.app/" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <div className="flex space-x-2">
                  <i className="fab fa-html5 text-orange-500"></i>
                  <i className="fab fa-css3-alt text-blue-500"></i>
                  <i className="fab fa-node-js text-green-500"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt="Project 2"
                width={600}
                height={400}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-pink-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">System Design</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Food Donation Matching System</h3>
              <p className="text-gray-300 mb-4">
                An Algorithms based platform that connects food donors with local charities to reduce food waste.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://stalwart-pavlova-fea142.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                >
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <div className="flex space-x-2">
                  <i className="fab fa-js text-yellow-400"></i>
                  <i className="fab fa-html5 text-orange-500"></i>
                  <i className="fab fa-css3-alt text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1677870728110-3b3b41677a9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 3"
                width={600}
                height={400}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                 System & Dashboard Design</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Game Leaderboard Ranking Dashboard</h3>
              <p className="text-gray-300 mb-4">
                A real-time competitive ranking system featuring live score updates, 
                player statistics tracking, and dynamic data filtering powered by Supabase.
              </p>
              <div className="flex justify-between items-center">
                <a href="https://phyopoke-hln200ihg-saw-bone-htets-projects.vercel.app/" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <div className="flex space-x-2">
                  <i className="fa-brands fa-react text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
           <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599008633840-052c7f756385?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 4"
                width={600}
                height={400}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                 Full-Stack Development</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Multi-Notepad Cloud Platform</h3>
              <p className="text-gray-300 mb-4">
                A type-safe productivity tool built with React.ts and Express.js. Features 
                secure Firebase Authentication and a flexible MongoDB schema for organized, 
                persistent note management across multiple categories.
              </p>
              <div className="flex justify-between items-center">
                <a href="https://mutinotepad.netlify.app/" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <div className="flex space-x-2">
                  <i className="fa-brands fa-react text-blue-500"></i>
                  <i className="fab fa-node-js text-green-500"></i>
                </div>
              </div>
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
