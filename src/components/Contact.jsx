import React from 'react';
import { Github, Linkedin, DownloadIcon, Mail, Phone, MapPin, Youtube, YoutubeIcon, Instagram, Send, SendIcon, LucideBatteryMedium } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-black">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-black">Get in touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-sm">ankitkarki8088@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-sm">+977 9745941262, +977 9823645664</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-sm">Open to remote opportunities</span>
              </div>
            </div>
            <div className="flex space-x-2 pt-2">
              <a
                href="https://github.com/ankitkarki27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg  text-gray-800 hover:text-black transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitkarki27/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg  text-gray-800 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/meenfaforlife/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg  text-gray-800 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@meenfaforlifeyt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg  text-gray-800 hover:text-red-600 transition-colors"
              >
                <YoutubeIcon className="w-6 h-6 " />
                {/* <span>Resume</span> */}
              </a>
              <a
                href="https://drive.google.com/file/d/1BSCrZHHkZtsSkV5M2qYXZ4f9Fx-aoh45/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-800 hover:text-green-800 transition-colors"
              >
                <DownloadIcon className="w-6 h-6" />
                {/* <span>Resume</span> */}
              </a>
            </div>
          </div>

          <div className="p-4 rounded">
            <h3 className="font-semibold text-black mb-3">Send me a message <LucideBatteryMedium className="w-6 h-6 inline-block mr-2" /></h3>
            <form
              action="https://formspree.io/f/xdkzgjjl"
              method="POST"
              className="space-y-3"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="Ram Bahadur"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
              {/* <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Phone No.</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="^\+977\d{10}$"
                  title="Phone number should start with +977 followed by 10 digits"
                  className="w-full px-3 py-2 sm:py-3 bg-white border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="+9779800000000"
                />
              </div> */}
              <div>
                <label htmlFor="project" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="Describe your project idea..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-black hover:bg-gray-800 border-1 border-gray-300 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm font-medium transition-colors cursor-pointer"
              >

                Send Message <SendIcon className="w-4 h-4 inline-block mr-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;