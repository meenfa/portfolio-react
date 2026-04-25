import React, { useState } from 'react';
import { Check, CircleDot, CircleDotDashed, CircleIcon, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiCircleFill, PiCirclesFourFill, PiCirclesThreeFill, PiCirclesThreePlusLight, PiGithubLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { IoDocument, IoCopyOutline } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import {
  FaLaravel,
  FaReact,
} from 'react-icons/fa';
import {
  SiDjango,
  SiPostgresql,
} from 'react-icons/si';
import { GoWorkflow } from 'react-icons/go';
import HeroSkillBtn from '../ui/HeroSkillBtn';
import HeroSkillSecondaryBtn from '../ui/HeroSkillSecondaryBtn';


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
            <div className="w-full lg:w-4/3 mb-2 space-y-3 text-black order-last lg:order-first">
              <div className="flex flex-row items-center gap-4">
                <img
                  src="/image/ankit1.png"
                  alt="Ankit Karki"
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />
                <div className="flex flex-row items-center gap-2 lg:gap-4">
                  <h1 className='text-2xl lg:text-2xl font-bold text-wrap text-left'>
                    Hi, I'm Ankit
                  </h1>
                  <div
                    className="cursor-pointer text-gray-800 text-sm font-normal flex items-center gap-2"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <HeroSkillBtn icon={GoWorkflow} label="Open to work" className="w-3 h-3 mr-1 text-[#0a0f0d]" />
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-gray-800 text-sm leading-relaxed">
                <li className="flex flex-wrap items-center gap-1.5">
                  <PiCircleFill className='h-2 w-3 text-gray-600' />
                  I am a <span className="text-black font-bold">Backend focused</span> from Nepal
                  <span className="inline-block text-gray-800">🇳🇵</span>.
                </li>

                <li className="flex flex-wrap items-center gap-1">
                  <PiCircleFill className='h-2 w-2 text-gray-600' />
                  I build backend systems with
                  <HeroSkillBtn icon={SiDjango} label="Django" className="w-3 h-3 mr-1 text-[#032f1e]" />
                  and
                  <HeroSkillBtn icon={FaLaravel} label="Laravel" className="w-3 h-3 mr-1 text-[#FF2D20]" />,
                  while shipping complete products.
                </li>
                <li className="flex flex-wrap items-center gap-1">
                  <PiCircleFill className='h-2 w-3 text-gray-600' />{" "}Built <span className="text-black font-medium"><a
                    href="https://potatocv.meenfa.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-bold hover:text-black underline underline-offset-4"
                  >
                    PotatoCV
                  </a></span>, a resume roasting tool, with <span className="text-black font-medium">5K+ organic page visits</span>.
                </li>

                <li className="flex flex-wrap items-center gap-1">
                  <PiCircleFill className='h-2 w-3 text-gray-600' />{" "}
                  Built <span className="text-black font-medium"><a
                    href="https://potatocv.meenfa.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black font-bold underline underline-offset-4"
                  >
                    Wordzo
                  </a></span>, a word game web application.
                </li>

              </ul>

              <p className="text-gray-800 leading-relaxed text-sm flex items-center gap-2 pt-1">
                Say hi at{' '}
                <span className="flex items-center gap-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-gray-900 border-b border-dashed border-gray-700 transition-all cursor-pointer hover:text-black font-mono"
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
                  <span className="text-gray-600 text-xs ml-2 animate-fade">
                    Copied!
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-2">
            <a
              href="/doc/Ankit_Karki_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroSkillBtn icon={IoDocument} label="Resume / CV" className="w-4 h-6 mr-1 text-black" />

            </a>

            <a
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroSkillSecondaryBtn icon={RiTelegram2Fill} label="Get in touch" className="w-4 h-6 mr-1 text-white" />

            </a>
          </div>

          <div className="flex flex-wrap gap-2 items-center pt-2">
            <a
              href="https://github.com/meenfa"
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
              href="https://www.linkedin.com/in/meenfa/"
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
              href="https://x.com/meenfax"
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
              href={`mailto:${email}`}
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