import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Star, MessageCircle, Camera, Coffee, Music, Moon, Sun, Sparkles } from 'lucide-react';

const ValentinesWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Floating hearts effect
  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          size: Math.random() * 20 + 15
        });
      }
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const memories = [
    { id: 1, emoji: "💕", title: "Our First Date", date: "March 15", color: "from-pink-400 to-rose-400" },
    { id: 2, emoji: "✨", title: "Star Gazing", date: "June 23", color: "from-purple-400 to-pink-400" },
    { id: 3, emoji: "☕", title: "Coffee Mornings", date: "Every Day", color: "from-amber-400 to-orange-400" },
    { id: 4, emoji: "🎵", title: "Dance in Rain", date: "July 7", color: "from-blue-400 to-cyan-400" },
  ];

  const reasons = [
    { icon: "😊", text: "Your smile that lights up my world" },
    { icon: "💬", text: "Our endless conversations about everything and nothing" },
    { icon: "🤗", text: "The way you understand me without words" },
    { icon: "🎯", text: "How you chase your dreams with passion" },
    { icon: "🍳", text: "Your terrible but adorable cooking attempts" },
    { icon: "🌙", text: "Late night talks under the moonlight" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900' : 'bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50'}`}>
      
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={`absolute animate-float ${isDark ? 'text-pink-300/30' : 'text-pink-300'}`}
            style={{
              left: `${heart.left}%`,
              top: '-50px',
              animationDelay: `${heart.delay}s`,
              fontSize: `${heart.size}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-black/30 backdrop-blur-lg' : 'bg-white/60 backdrop-blur-lg'} border-b ${isDark ? 'border-purple-800/30' : 'border-pink-100'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className={`p-2 rounded-full ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} group-hover:scale-110 transition-transform`}>
                <Heart className={`w-5 h-5 ${isDark ? 'text-pink-300' : 'text-pink-500'}`} />
              </div>
              <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>
                My<span className={`${isDark ? 'text-pink-300' : 'text-pink-500'}`}>Valentine</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'moments', 'reasons', 'letter'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item 
                      ? isDark 
                        ? 'bg-pink-500/20 text-pink-300' 
                        : 'bg-pink-100 text-pink-600'
                      : isDark
                        ? 'text-gray-300 hover:bg-purple-500/10 hover:text-pink-300'
                        : 'text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button 
                onClick={() => setShowLoveNote(true)}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Surprise</span>
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="ml-2 p-2 rounded-full hover:bg-gray-100/20 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setShowLoveNote(true)}
                className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white"
              >
                <Sparkles className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-100/20 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-pink-100'}`}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden rounded-xl mt-2 mb-4 p-2 ${isDark ? 'bg-black/40 backdrop-blur-lg' : 'bg-white/80 backdrop-blur-lg'} shadow-lg`}>
              <div className="space-y-1">
                {['home', 'moments', 'reasons', 'letter'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item 
                        ? isDark 
                          ? 'bg-pink-500/20 text-pink-300' 
                          : 'bg-pink-100 text-pink-600'
                        : isDark
                          ? 'text-gray-300 hover:bg-purple-500/10'
                          : 'text-gray-600 hover:bg-pink-50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section id="home" className="relative px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              {/* Decorative elements */}
              <div className="flex justify-center space-x-4 mb-8">
                <div className={`w-4 h-4 rounded-full animate-pulse ${isDark ? 'bg-pink-400' : 'bg-pink-300'}`}></div>
                <div className={`w-3 h-3 rounded-full animate-pulse delay-75 ${isDark ? 'bg-purple-400' : 'bg-purple-300'}`}></div>
                <div className={`w-2 h-2 rounded-full animate-pulse delay-150 ${isDark ? 'bg-rose-400' : 'bg-rose-300'}`}></div>
              </div>

              <h1 className={`text-5xl md:text-7xl font-bold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                For <span className="italic">My</span><br />
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Beautiful
                </span>
              </h1>
              
              <div className={`text-2xl md:text-3xl font-light ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto leading-relaxed`}>
                Every day with you feels like a page from a fairytale ✨
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <button 
                  onClick={() => scrollToSection('letter')}
                  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
                >
                  <span>Read My Letter</span>
                  <Heart className="w-5 h-5 group-hover:animate-pulse" />
                </button>
                <button 
                  onClick={() => scrollToSection('moments')}
                  className={`px-8 py-4 rounded-full font-medium border transition-all duration-300 hover:scale-105 ${isDark ? 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10' : 'border-pink-300 text-pink-600 hover:bg-pink-50'}`}
                >
                  Our Moments
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section id="moments" className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Calendar className={`w-6 h-6 ${isDark ? 'text-pink-300' : 'text-pink-500'}`} />
                <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Moments to Remember
                </h2>
              </div>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Little memories that make our story beautiful
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {memories.map((memory) => (
                <div 
                  key={memory.id}
                  className={`group relative overflow-hidden rounded-2xl p-6 hover:scale-105 transition-all duration-500 cursor-pointer ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-white/60'} backdrop-blur-sm border ${isDark ? 'border-purple-800/20' : 'border-pink-100/50'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${memory.color}"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {memory.emoji}
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {memory.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {memory.date}
                    </p>
                    <div className={`mt-4 text-xs font-medium px-3 py-1 rounded-full inline-block ${isDark ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                      Cherished
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section id="reasons" className={`px-4 py-20 ${isDark ? 'bg-black/20' : 'bg-white/30'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Star className={`w-6 h-6 ${isDark ? 'text-amber-300' : 'text-amber-500'}`} />
                <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Why You're Amazing
                </h2>
              </div>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Just a few reasons why I'm so lucky
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-purple-800/20 hover:border-pink-500/30'
                      : 'bg-white/50 border-pink-100 hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{reason.icon}</span>
                    </div>
                    <p className={`text-lg leading-relaxed flex-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Love Letter */}
        <section id="letter" className="px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-pink-50'}`}>
              {/* Letter Header */}
              <div className={`p-8 border-b ${isDark ? 'border-purple-800/30' : 'border-pink-200'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                      <Heart className={`w-5 h-5 ${isDark ? 'text-pink-300' : 'text-pink-500'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        My Love Letter
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        From my heart to yours
                      </p>
                    </div>
                  </div>
                  <div className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    💌 Personal
                  </div>
                </div>
              </div>

              {/* Letter Content */}
              <div className="p-8">
                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    My dearest love,
                  </p>
                  
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    I still remember the day we met like it was yesterday. There was something about you that felt like coming home. In your smile, I found my favorite place. In your eyes, I found my peace.
                  </p>
                  
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-pink-50 border border-pink-100'}`}>
                    <p className={`italic text-center ${isDark ? 'text-pink-300' : 'text-pink-600'}`}>
                      "You are the reason I believe in love at first sight, and every sight after."
                    </p>
                  </div>
                  
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Thank you for being my partner in crime, my safe haven, and my greatest adventure. Thank you for the laughter that echoes in my memories, for the quiet moments that speak volumes, and for being exactly who you are.
                  </p>
                  
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    No matter what life brings our way, I promise to choose you every single day. To grow with you, laugh with you, and build a life full of beautiful moments together.
                  </p>
                  
                  <div className="pt-8">
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Forever yours,
                    </p>
                    <div className={`text-2xl font-bold mt-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                      [Your Name]
                    </div>
                    <div className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                      Your biggest fan and partner in crime
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className={`text-4xl animate-bounce ${isDark ? 'text-pink-400' : 'text-pink-500'}`}>
                ❤️
              </div>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Made with love, just for you
              </p>
              <div className="flex justify-center space-x-6">
                <button className={`p-3 rounded-full ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-pink-100'} transition-colors`}>
                  <Music className={`w-5 h-5 ${isDark ? 'text-purple-300' : 'text-pink-500'}`} />
                </button>
                <button className={`p-3 rounded-full ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-pink-100'} transition-colors`}>
                  <Camera className={`w-5 h-5 ${isDark ? 'text-purple-300' : 'text-pink-500'}`} />
                </button>
                <button className={`p-3 rounded-full ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-pink-100'} transition-colors`}>
                  <Coffee className={`w-5 h-5 ${isDark ? 'text-purple-300' : 'text-pink-500'}`} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Love Note Modal */}
      {showLoveNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/40'}`}
            onClick={() => setShowLoveNote(false)}
          ></div>
          <div className={`relative rounded-3xl max-w-md w-full overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-pink-50'} shadow-2xl`}>
            <div className={`p-6 ${isDark ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20' : 'bg-gradient-to-r from-pink-100 to-rose-100'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white/20">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Just for you 💝
                  </span>
                </div>
                <button 
                  onClick={() => setShowLoveNote(false)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">💌</div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Hey there, beautiful
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Just wanted to say...
                </p>
              </div>
              
              <div className={`text-center p-6 rounded-2xl mb-6 ${isDark ? 'bg-pink-500/10' : 'bg-pink-50'}`}>
                <p className={`text-xl italic leading-relaxed ${isDark ? 'text-pink-300' : 'text-pink-600'}`}>
                  "You are loved more than you know, more than I can show, and more than words can say."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span>P.S. You make every day special</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span>P.P.S. Can't wait to see you smile today</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowLoveNote(false)}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Close & Feel Loved 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentinesWebsite;