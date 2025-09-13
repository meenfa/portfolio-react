import React from 'react';
import { Github, Linkedin, DownloadIcon, Mail, Phone, MapPin } from 'lucide-react';

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
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600 text-sm">ankitkarki8088@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600 text-sm">+977 9745941262, +977 9823645664</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600 text-sm">Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="flex space-x-2 pt-2">
              <a
                href="https://github.com/ankitkarki27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors border border-gray-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitkarki27/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors border border-gray-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1Dpxxay05_CvITZHxbg1IAcxX7aNgME35/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black hover:bg-gray-800 px-4 py-2 rounded-lg text-white transition-colors border border-gray-300 text-sm"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-black mb-3">Send me a message</h3>
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
                  placeholder="Ankit"
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
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-black hover:bg-gray-800 border border-gray-300 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm font-medium transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;