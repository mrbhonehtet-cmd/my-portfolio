export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold gradient-text">PORTFOLIO</span>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/zixing002" className="text-gray-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://t.me/Zi_Xing002" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <i className="fa-brands fa-telegram text-xl"></i>
            </a>
            <a href="https://github.com/mrbhonehtet-cmd" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">&copy; 2023 My Portfolio. All rights reserved. This Website Build with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
