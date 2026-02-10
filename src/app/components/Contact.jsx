"use client";

import React, { useState } from "react"; 

export default function Contact() {

const [koko, setkoko] = useState(false);
const [sending, setsending] = useState(false);
const openmassagebox = () => {setkoko(!koko);};
const [fromdata, setfromdata] = useState ({
  name: "",
  company: "",
  role: "",
  sendmassage: "",
});


const sendmassagechange = (e) => {
    setfromdata({ ...fromdata, [e.target.name]: e.target.value });
  };

async function sendmassagesubmit(e) {
e.preventDefault();
setsending(true);
const googlesheeturl = process.env.NEXT_PUBLIC_SHEET_URL;
const googlesheetformed =`${googlesheeturl}?name=${encodeURIComponent(fromdata.name)}&company=${encodeURIComponent(fromdata.company)}&role=${encodeURIComponent(fromdata.role)}&sendmassage=${encodeURIComponent(fromdata.sendmassage)}`;

try {
    await fetch(googlesheetformed, {
      method: "POST",
      mode: "no-cors" });

      alert("Message sent successfully!");
      setkoko(false);
} catch (error) {
  console.log("Error sending message:", error);
  alert("Failed to send message. Please try again later.");
} finally {
  setsending(false);  }
};

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

          {koko && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur">
            <div className="relative bg-gray-900 rounded-lg p-6 pt-5 w-full max-w-md">
            <button onClick={() => setkoko(false)} className=" font-bold absolute top-4 right-4 gradient-text rounded-full text-4xl">✕</button>

             <h3 className="text-2xl font-bold mb-2 text-white text-center">Message Box</h3>
             
            <form onSubmit={sendmassagesubmit} className="space-y-4">

              <h4 className="text-lg font-semibold text-white">name</h4>
              <input name="name" placeholder="Your Name" onChange={sendmassagechange} required className="w-full p-2 bg-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"/>
              <h4 className="text-lg font-semibold text-white">company</h4>
              <input name="company" placeholder="Company Name" onChange={sendmassagechange} required className="w-full p-2 bg-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"/>
              <h4 className="text-lg font-semibold text-white">role</h4>
              <input name="role" placeholder="Role" onChange={sendmassagechange} required className="w-full p-2 bg-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"/>
              <h4 className="text-lg font-semibold text-white">message</h4>
              <textarea name="sendmassage" placeholder="Your Message" onChange={sendmassagechange}  required className="w-full p-2 bg-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"/>
              <button type="submit" disabled={sending} className={`${sending ? "w-full py-2 px-4 rounded-lg bg-gray-600 cursor-not-allowed" : 
                "w-full py-2 px-4 rounded-lg transition duration-300 bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90"}`}>
                {sending? 
                (<span className="item-center justify-center">
                Sending...<i className="fas fa-spinner animate-spin ml-2"></i>
                </span>):
                ("Send Message")
                }
              </button>
            </form>
            </div>
          </div> 
        )}



          <div className="lg:w-1/2 ">
            <div className="bg-gray-900 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Contact Information</h3>
              <p className="text-gray-300 mb-8 text-center">
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
                      <a href="https://www.linkedin.com/in/zixing002" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition duration-300">
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
                    
                    <button onClick={openmassagebox} className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 shadow-lg flex items-center justify-center">
                       Open Massage Box
                        <i className="fas fa-paper-plane ml-2"></i>
                      </button>
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
