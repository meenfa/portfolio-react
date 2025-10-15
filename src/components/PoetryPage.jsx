import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const poems = [
    {
        title: 'धुँवाको उच्चाई',
        content:
            `के तिमी सुन्छौ?
    फेरिपनि
    
    यो धुँवाको कहानी 
    मैले एउटा पोको खोले 
    अनि फेरी उसकै सामु
    अर्को एक फाँसी लाए

    जति समय बित्दै जादैछ  
    म त्यतिनै गल्दै जादैछु
    म आशा बिनाको इच्छा हु 
    म बर्बाराउन थाले 

    के तिमी लुक्छौ???
    शैतानको साथमा मैले
    झुटको साहारा लिन सिकेको छु 
    मलाई आतंक को पुरा रूप थाहा छ
    तिम्रो आँखामा डर छ
    मलाई सत्य थाहा छ

    हानिकारक धुवा,
    बेफिक्री उडान 
    एक सर्को लि
    एकछिन रामदिम न त 
    तिम्रो जल्दै गरेको
    त्यो कलिलो मनमस्तिस्कको
    धुवाले उचाई छुदै गर्दा
    म हल्का फिक्किएको महसुस गर्छु..

    म शान्त छु`,
        // date: 'Jul, 2025',
    },
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

म रातमा रमाउछु,`,
        // date: 'Jul, 2025',
    },
    {
        title: 'अधुरा पंक्तिहरु',
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
        // date: 'Jul, 2024',
    },

];

const donations = [
    { name: 'eSewa', qr: '/image/poetry/esewa.jpg', id: '9823645664', link: 'https://esewa.com.np' },
    { name: 'Khalti', qr: '/image/poetry/khalti.jpg', id: '9823645664', link: 'https://khalti.com' },
    // { name: 'Bank Transfer', qr: '/image/poetry/bank.jpg', id: '9823645664', link: '#' },
];

const PoetryPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedPoems, setExpandedPoems] = useState({});

    const togglePoem = (index) => {
        setExpandedPoems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleNavClick = (section) => {
        if (section === 'portfolio') window.location.href = '/';
        else if (section === 'poetry') window.location.href = '#donate';
        else window.location.hash = section;
        setMobileMenuOpen(false);
    };

    const navItems = ['portfolio', 'poetry'];

    return (
        <div className="min-h-screen bg-black text-gray-200">
            {/* Simplified Navbar */}
            <nav className="fixed top-0 w-full bg-black z-50 h-16">
                <div className="mx-auto px-4 max-w-3xl h-full flex justify-between items-center cursor-pointer">
                    <div
                        className="nepali text-xl font-bold text-white cursor-pointer"
                        onClick={() => handleNavClick('')}
                    >
                        अंकित.
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        <div className="space-y-1">
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-gray-800">
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="block w-full text-left py-3 px-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <div className="pt-24 px-4 pb-16 max-w-3xl mx-auto ">
                <h1 className="text-2xl font-bold mb-12 border-b border-gray-800 pb-2">My Poetries</h1>

                {/* Poems List */}
                <div className="space-y-12">
                    {poems.map((poem, index) => {
                        const isExpanded = expandedPoems[index];
                        const preview = poem.content.split('\n').slice(0, 2).join('\n');

                        return (
                            <div key={index} className="border-b border-gray-800 pb-8">
                                <h2 className="nepali text-2xl font-semibold mb-4 text-white">{poem.title}
                                    <span className="text-gray-400 text-sm ml-4 font-normal text-right">{poem.date}</span>
                                </h2>

                                <pre className="nepali whitespace-pre-line text-gray-300 leading-relaxed">
                                    {isExpanded ? poem.content : preview}
                                </pre>
                                <button
                                    onClick={() => togglePoem(index)}
                                    className="mt-4 text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                                >
                                    {isExpanded ? 'Show Less' : 'Read Full'}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Donations Section */}
                <div id='donate' className="mt-16">
                    <h3 className="text-2xl font-semibold mb-4">Support My Poetry</h3>
                    <p className="text-gray-400 mb-8">
                        If you enjoy my poems, you can support me via eSewa, Khalti, or Bank transfer.
                    </p>
                    <div className="flex flex-wrap justify-left gap-8">
                        {donations.map((donation) => (
                            <div key={donation.name} className="text-center">
                                <img
                                    src={donation.qr}
                                    alt={`${donation.name} QR`}
                                    className="mx-auto w-48 rounded border border-gray-700 mb-3"
                                />
                                <p className="text-gray-300 mb-1">{donation.name}:</p>
                                <p className="text-sm text-gray-500 mb-2">{donation.id}</p>
                                <a
                                    href={donation.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 text-sm"
                                >
                                    Donate
                                </a>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoetryPage;