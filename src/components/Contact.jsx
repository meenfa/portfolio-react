import React, { useState } from 'react';
import { Github, Linkedin, Instagram, YoutubeIcon, Send, SendIcon, Mail } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ankitkarki8088@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <section id="contact" className="py-16 bg-white pt-0">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className='text-2xl mb-4 font-bold text-wrap text-left lg:text-left flex items-center gap-2'>
          Let’s Connect
          <span
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className='text-xs px-2 py-1 text-blue-600 font-normal border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-500 transition-colors self-start mt-1 '
          >
            Available for work
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              {/* Email with copy */}
              <div className="flex items-center space-x-3 cursor-pointer" onClick={copyEmail}>
                <Mail className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-sm">{email}</span>
                {copied && <span className="text-blue-500 text-sm ml-2">Copied!</span>}
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-gray-900 text-sm">+977 9745941262, +977 9823645664</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">Open to any opportunities</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-0">
              <a href="https://github.com/ankitdotnp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-800 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ankitdotnp/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-800 hover:text-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/meenfaforlife/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-800 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@meenfaforlifeyt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-800 hover:text-red-600 transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>

            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-fit px-4 py-2 bg-white hover:bg-gray-200 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-base font-medium transition-colors cursor-pointer">
              Download my CV
            </a>
          </div>

          {/* Contact Form */}
          <div className="p-0 rounded">
            <h3 className="font-semibold text-gray-900 text-base mb-3">
              Send me a message.
              <Send className="w-4 h-4 inline-block mr-4" />
            </h3>
            <form action="https://formspree.io/f/xdkzgjjl" method="POST" className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-900 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm" placeholder="yourname@gmail.com" />
              </div>
              <div>
                <label htmlFor="project" className="block text-base font-medium text-gray-900 mb-1">Message</label>
                <textarea id="project" name="project" rows="4" required className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm" placeholder="Describe your project idea..."></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-black hover:bg-gray-800 border-1 border-gray-300 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gray-400 text-base font-medium transition-colors cursor-pointer">
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
