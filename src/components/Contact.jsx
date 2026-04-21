import React, { useState } from 'react';
import { Github, Linkedin, Instagram, YoutubeIcon, Send, SendIcon, Mail, Phone, File, Workflow } from 'lucide-react';
import { IoDocument } from "react-icons/io5";
import { FaXTwitter } from 'react-icons/fa6';
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ankitkarki8088@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className='text-2xl mb-4 font-bold text-wrap text-left lg:text-left flex items-center gap-2'>
          Stay Connected.

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={copyEmail}>
                <Mail className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-base">{email}</span>
                {copied && <span className="text-blue-500 text-base ml-2">copied!</span>}
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-base">+977 9745941262</span>
              </div>
              <div className="flex items-center space-x-3">
                <Workflow className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 text-base">Open to any opportunities</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-0">
              <a href="https://github.com/meenfa" target="_blank" rel="noopener noreferrer" className="flex items-center w-8 h-8 rounded-lg text-gray-800 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/meenfa/" target="_blank" rel="noopener noreferrer" className="flex items-center w-8 h-8 rounded-lg text-gray-800 hover:text-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/meenfax"
              target="_blank"
              rel="noopener noreferrer" className="flex items-center w-8 h-8 rounded-lg text-gray-800 hover:text-black transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1s6eNgTA8q-7FRLtdS9VVA-oISDueN-vy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center w-fit space-x-2 px-3 py-2
              font-semibold text-sm text-gray-900
              bg-white/25 backdrop-blur-xl
              border border-gray-300 rounded-lg
              shadow-[inset_0_4px_10px_rgba(0,0,0,0.24)]
              hover:shadow-[inset_0_0_25px_6px_rgba(0,0,0,0.28)]
              hover:bg-white/40
              transition-all duration-300
              cursor-pointer
              focus:outline-none
              "
            >
              <IoDocument className="w-4 h-4 mr-1 text-[#333]" />
              Download my CV
            </a>

          </div>

          {/* Contact Form */}
          <div className="p-0 rounded">
            <form action="https://formspree.io/f/xdkzgjjl" method="POST" className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-900 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border-1 border-gray-900 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-base" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border-1 border-gray-900 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-base" placeholder="yourname@gmail.com" />
              </div>
              <div>
                <label htmlFor="project" className="block text-base font-medium text-gray-900 mb-1">Message</label>
                <textarea id="project" name="project" rows="4" required className="w-full px-3 py-2 border-1 border-gray-900 rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-base" 
                placeholder="Write message here..."></textarea>
              </div>
              <button type="submit"
                className="flex items-center justify-center w-fit space-x-2 px-3 py-2 font-semibold bg-black hover:bg-gray-900 hover:shadow-md border border-gray-300 shadow-sm rounded-lg text-white focus:outline-none text-sm cursor-pointer">

                <SendIcon className="w-4 h-4 inline-block mr-2" />
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
