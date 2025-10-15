import React, { useState } from 'react';
import { Send } from 'lucide-react'; // assuming lucide-react is installed

const poems = [
  {
    title: 'चिसो (Cold)',
    content: `मेरो आँखामा चिसोपन छ,
म लाश जस्तै चिसो छु,
म चिसोसंग रमाउछु,
किनकि म चिसो छु

म रातम़ा बल्ने त्यो बत्ति हु,
जसको महत्वो अन्दाकारलाई
मात्र थाहा हुन्छ,

म रातम़ा खालि पाना भर्छु,
म रातमा जितका लेख लेख्छु,

मैले जिन्दगीमा चाहेको सबैकुरा जिते,
तर तिमीलाई जित्न सकिन,

तिमीलाई अंगालो मा बादेर
फेरी पनि मनका कुरा भन्न मन छ
तर तिमीले केही बुझ्ने छैनौ
अनि मसंग तिमीलाई बुझाउन केहि छैन

जुन दिन  तिमीले
हामीबिचको मायाको धागो तोडयौ
मैले त्यहि दिन देखि दिनमा रमाउने छोडीसके
मलाई दिनको सुन्दरताले लोब्याउँन छाडेको छ

म रातमा रमाउछु,
`,
    date: 'Jul, 2025',
  },
  {
    title: 'अधुरा पंक्तिहरु (Incomplete Lines)',
    content: `उसको अन्तिम घडीमा 
तिमी आई उभिनु है 
तिमीले लत्याएको त्यो भत्केको आगनको एक कुनामा
ताकि थाहा होस् सबैलाई,
उसले बाटो बिराउनु मुख्य कारण 

सस्तो हैन, आट त महङ्गै थियो 
बस दुरी एती रह्यो कि 
तिम्रा महँगो झुठहरुको मूल्य, 
उसले चुकाउन सकेन 

तिमी जलिराछौ, धेरै वर्ष देखि 
म डिलमा बसेर हेर्न बाध्य छु 
न तिमी रुन्छौ, कराउछौउ 
कहिले कहिँ अलि बेस्सरी आसु 
बगाउ जस्तो लाग्दैन तिमीलाई??`,
    date: 'Jul, 2024',
  },
];

const donations = [
  { name: 'eSewa', qr: '/image/poetry/esewa.jpg', id: '9823645664', link: 'https://esewa.com.np' },
  { name: 'Khalti', qr: '/image/poetry/khalti.jpg', id: '9823645664', link: 'https://khalti.com' },
  { name: 'Bank Transfer', qr: '/image/poetry/bank.jpg', id: '9823645664', link: '#' },
];

const PoetryPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPoems, setExpandedPoems] = useState({});

  const togglePoem = (index) => {
    setExpandedPoems({ ...expandedPoems, [index]: !expandedPoems[index] });
  };

  const handleNavClick = (section) => {
    if (section === 'portfolio') window.location.href = '/';
    else if (section === 'poetry') window.location.href = '/poetry';
    else window.location.hash = section;
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black backdrop-blur-md z-50 h-16 shadow-md">
        <div className="mx-auto px-4 max-w-4xl h-full flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('poetry')}>
            <span className="text-xl font-bold text-white">अंकित.</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {['portfolio', 'poetry', 'blogs', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-gray-400 hover:text-white font-medium transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-gray-700 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {['portfolio', 'poetry', 'blogs', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className="block w-full text-left py-3 px-4 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Poetry Section */}
      
      <div className="pt-24 px-4 pb-16 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-left">My Poetries</h1>

        <div className="space-y-10">
             
          {poems.map((poem, index) => {
            const isExpanded = expandedPoems[index];
            const preview = poem.content.split('\n').slice(0, 2).join('\n');

            return (
              <div key={index} className="p-4 text-left border-b border-gray-800 pb-4">
                <h2 className="text-xl font-semibold mb-4 text-white">{poem.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{poem.date}</p>
                <pre className="whitespace-pre-line text-gray-300 leading-relaxed">{isExpanded ? poem.content : preview}</pre>
                <button
                  onClick={() => togglePoem(index)}
                  className="mt-2 text-blue-400 hover:text-blue-400 font-normal"
                >
                  {isExpanded ? 'Show Less' : 'Read Full'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Donations */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-left">Support My Poetry</h3>
          <p className="text-gray-400 mb-6">
            If you enjoy my poems, you can support me via eSewa, Khalti, or Bank transfer.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {donations.map((donation) => (
              <div key={donation.name} className="text-center">
                <img src={donation.qr} alt={`${donation.name} QR`} className="mx-auto w-48 rounded-lg border border-gray-700 mb-2" />
                <p className="text-gray-300 mb-1">{donation.name}</p>
                <p className="text-sm text-gray-500">{donation.id}</p>
                <a
                  href={donation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-sm"
                >
                  Donate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Message Form */}
        {/* <div id="message-form" className="mt-16 p-6 rounded-2xl bg-gray-900 shadow-md max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-200 text-lg mb-4">Send Me a Message</h3>
          <form
            action="https://formspree.io/f/xdkzgjjl"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="contact" className="block text-base font-medium text-gray-200 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                placeholder="Ram Bahadur"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-medium text-gray-200 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-black hover:bg-gray-800 border border-gray-300 rounded-lg text-white font-medium transition-colors"
            >
              Send Message <Send className="w-4 h-4 inline-block ml-2" />
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default PoetryPage;
