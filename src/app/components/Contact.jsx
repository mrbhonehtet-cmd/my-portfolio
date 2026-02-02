"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-12 w-full my-12">
          {/* <div className="lg:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input id="name" type="text" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input id="email" type="email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input id="subject" type="text" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300">
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div> */}

          <div className="lg:w-1/2">
            <div className="bg-gray-900 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                I'm available for freelance work and full-time opportunities. Let's create something amazing together!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg text-blue-400">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold gradient-text">Location</h4>
                    <p className="text-gray-300">Yangon tharkayta, Myanmar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg text-pink-400">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold gradient-text">Email</h4>
                    <p className="text-gray-300">mr.bhonehtet@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg text-blue-400">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold gradient-text">Phone</h4>
                    <p className="text-gray-300">+95 9965091291, +95 95091291</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg text-pink-400">
                    <i className="fas fa-globe text-xl"></i>
                  </div>

                  <div className="ml-4">
                    <h4 className="font-bold gradient-text">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                      <a href="www.linkedin.com/in/zixing002" className="text-gray-300 hover:text-blue-600 transition duration-300">
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a href="https://t.me/Zi_Xing002" className="text-gray-300 hover:text-pink-500 transition duration-300">
                        <i className="fa-brands fa-telegram text-xl"></i>
                      </a>
                      <a href="https://github.com/mrbhonehtet-cmd" className="text-gray-300 hover:text-gray-100 transition duration-300">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                    </div>

                   <div className="mt-8 w-full flex justify-center md:justify-start md:ml-20">
                      <a 
                        href="https://t.me/Zi_Xing002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 shadow-lg flex items-center justify-center"
                      >
                        Send Message on Telegram
                        <i className="fas fa-paper-plane ml-2"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
