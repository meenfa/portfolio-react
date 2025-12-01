import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaHashnode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5"

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "ankitkarki8088@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative flex items-center py-8 sm:px-6 lg:px-8">
      <div className="mx-auto px-2 w-full max-w-2xl relative z-10">
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="hidden lg:block lg:w-1/4">
              <div className="w-32 h-32 lg:w-28 lg:h-28 rounded-full overflow-hidden border-b-2 border-gray-900">
                <img
                  src="/image/ankit1.png"
                  alt="Ankit Karki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/3 mb-2 space-y-2 text-black order-last lg:order-first">
              <h1 className='text-2xl font-bold text-wrap text-left lg:text-left flex items-center gap-2'>
                Hi, I'm Ankit👋
                <span
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className='flex items-center gap-1 text-xs px-3 py-1 text-gray-900 font-medium border-0 border-green-600 rounded-lg cursor-pointer bg-green-100 hover:bg-green-200 transition-all duration-200'
                >
                  <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>
                  Available for work
                </span>
              </h1>
              <p className='text-gray-600 text-wrap leading-relaxed text-base mt-4'>
                I'm a <span className="text-black text-base font-semibold bg-gradient-to-r from-gray-100 to-white px-1 rounded">Full Stack Web Developer</span> and occasional
                {' '}<Link to="/poetry" className="relative group text-gray-600 font-semibold cursor-pointer transition-all duration-300">
                  <span className="text-gray-900 group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
                    poet
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>{' '}
                from Nepal <span className="inline-block transition-transform hover:scale-110">🇳🇵</span>. I develop interactive web apps using <span className="text-gray-900 font-semibold px-1 rounded">Django, React.js, Laravel, and PostgreSQL.</span>
              </p>

              <p className="text-gray-500 leading-relaxed text-base flex items-center gap-2">
                Say hi at{' '}
                <span className="flex items-center gap-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-900 font-medium border-b-2 border-black transition-all cursor-pointer hover:text-black"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1 rounded-md hover:bg-gray-200 transition-all text-gray-600 hover:text-black cursor-pointer"
                  >
                    <IoCopyOutline size={16} />
                  </button>
                </span>
                {copied && (
                  <span className="text-blue-400 text-sm ml-2 animate-fade">
                    Email copied!
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-2">
            <a
              href="https://drive.google.com/file/d/1ElmTWv9ndLmuW929sKnFkuklIZ8X4HWy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg font-semibold text-black transition-all border border-gray-300 shadow-sm hover:bg-gray-50 hover:shadow-md bg-white/80 backdrop-blur-sm text-sm"
              >
                <IoDocument className='w-4 h-4' />
              <span>Resume / CV</span>
            </a>

            <a
              href="https://t.me/ankitdotnp"
              target="_blank"
              rel="noopener noreferrer"
           className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-white transition-all border border-gray-700 bg-black hover:bg-gray-900 hover:shadow-md backdrop-blur-sm text-sm"
            >
              <RiTelegram2Fill className='w-4 h-4' />
              <span>Get in touch</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-4">
            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <PiGithubLogo className="w-5 h-5" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankitdotnp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <CiLinkedin className='w-5 h-5' />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="https://x.com/ankitdotnp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <FaXTwitter className='w-5 h-5' />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Twitter / X
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="https://youtube.com/@ankitdotnp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <FaYoutube className='w-5 h-5' />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                YouTube
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="https://blog.ankitkarki.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <FaHashnode className='w-5 h-5' />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Hashnode
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/meenfaforlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <FaInstagram className='w-5 h-5' />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Instagram
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <Mail className="w-5 h-5" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;