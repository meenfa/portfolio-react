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
import { FaBriefcase } from "react-icons/fa";

import {
  FaPython,
  FaLaravel,
  FaReact,
} from 'react-icons/fa';
import {
  SiDjango,
  SiPostgresql,
} from 'react-icons/si';
import HeroSkillBtn from './ui/HeroSkillBtn';


const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "ankitkarki8088@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative flex items-center pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto px-2 w-full max-w-2xl relative z-10">
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div className="hidden lg:block lg:w-1/4">
              <div className="relative w-32 h-32 lg:w-24 lg:h-24">
                <div className="w-full h-full rounded-xl overflow-hidden border-4 border-gray-100 shadow-lg">
                  <img
                    src="/image/ankit1.png"
                    alt="Ankit Karki"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
            <div className="w-full lg:w-4/3 mb-2 space-y-2 text-black order-last lg:order-first">
              <div className="flex flex-row items-center lg:flex-row lg:items-center gap-2 lg:gap-4">
                <h1 className='text-3xl lg:text-3xl font-bold text-wrap text-left'>
                  Hi, I'm Ankit
                </h1>

                <div
                  className="cursor-pointer text-gray-800 text-sm font-normal flex items-center gap-2"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  Open to work
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-base mt-4 flex-wrap">
                I am a{" "}
                <span className="text-black font-bold">Backend Developer</span>{" "}
               and an occasional {" "}
                <Link
                  to="/poetry"
                  className="relative group text-gray-600 font-semibold cursor-pointer transition-all duration-300"
                >
                  <span className="text-gray-800 hover:text-gray-900 transition-all duration-300">
                   poet
                  </span>
                  <span className="absolute mt-2 bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>{" "}
                from Nepal{" "}
                <span className="inline-block transition-transform text-gray-800">🇳🇵</span>. I develop interactive web apps using{" "}

                <HeroSkillBtn icon={SiDjango} label="Django" className="w-3 h-3 mr-1 text-[#032f1e] " />{" "} , {" "}
                <HeroSkillBtn icon={FaReact} label="React.js" className="w-3 h-3 mr-1 text-[#0594bb]" />{" "},{" "}
                <HeroSkillBtn icon={FaLaravel} label="Laravel" className="w-3 h-3 mr-1 text-[#FF2D20]" />{" "}and{" "}
                <HeroSkillBtn icon={SiPostgresql} label="PostgreSQL" className="w-3 h-3 mr-1 text-[#0781e5]" />{" "}.
              </p>

              <p className="text-gray-500 leading-relaxed text-base flex items-center gap-2">
                Say hi at{' '}
                <spanclas className="flex items-center gap-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-gray-900 border-b-1 border-dashed border-gray-700 transition-all cursor-pointer hover:text-black font-mono"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1 rounded-md hover:bg-gray-200 transition-all text-gray-600 hover:text-black cursor-pointer"
                  >
                    <IoCopyOutline size={16} />
                  </button>
                </spanclas>
                {copied && (
                  <span className="text-gray-600 text-sm ml-2 animate-fade">
                    Copied!
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-2">
            <a
              href="https://drive.google.com/file/d/1s6eNgTA8q-7FRLtdS9VVA-oISDueN-vy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                  group flex items-center gap-2 px-3 py-2 rounded-lg
                  border border-white/30
                  bg-white/25 backdrop-blur-xl
                  shadow-[inset_0_4px_10px_rgba(0,0,0,0.24)]
                  hover:shadow-[inset_0_0_25px_6px_rgba(0,0,0,0.28)]
                  transition-all duration-300
                  text-gray-900 font-medium text-sm
                "

            >
              <IoDocument className="w-4 h-4" />
              <span>Resume / CV</span>
            </a>


            <a
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-white transition-all border-dashed border-gray-700 bg-black hover:bg-gray-900 hover:shadow-md backdrop-blur-sm text-sm cursor-pointer"
              className="
                group flex items-center gap-2 px-3 py-2 rounded-lg
                border border-gray-700/60 
                bg-black backdrop-blur-md
                shadow-[inset_0_2px_6px_rgba(255,255,255,0.12)]
                hover:shadow-[inset_0_0_14px_4px_rgba(255,255,255,0.18)]
                transition-all duration-300
                text-white font-medium text-sm cursor-pointer
              "
            >

              <RiTelegram2Fill className='w-4 h-4' />
              <span>Get in touch</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-6">
            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <PiGithubLogo className="w-6 h-6" />
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
              <CiLinkedin className="w-6 h-6" />
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
              <FaXTwitter className="w-6 h-6" />
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
              <FaYoutube className="w-6 h-6" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                YouTube
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              // href="https://hashnode.com/@ankitdotnp"
              href="https://blog.karkiankit.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <FaHashnode className="w-6 h-6" />
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
              <FaInstagram className="w-6 h-6" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Instagram
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
              </div>
            </a>

            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center text-gray-500 hover:text-gray-900 relative group"
            >
              <Mail className="w-6 h-6" />
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