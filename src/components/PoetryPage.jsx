import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const poems = [
    {
        title: 'बोलचाल',
        content: `दिनदिनै बोलचाल हैन,
म अन्त्यमा सम्म साथ दिन्छु

तिम्रो भागको दु:ख,
मेरो सुखसंग साँद दिन्छु

लक्ष्य तिम्रो तिर्मिराए,
सम्हालिन यो काध दिन्छु

पन्छी बनी उड्नु तिमी ,
तल तान्नेको हात काट् दिन्छु`,
    },
    {
        title: 'तिम्रो बोलीमा जादु छ',
        content: `भरोसा,
सबै तिमी माथि
सधै तिमी माथि
आफैलाई आफुमा भरोसा हुन छोडीसक्यो
तिम्रो आगमन भएदेखि,
यो मन तिम्रो भैसक्यो

तिम्रो बोलीमा जादु छ,
तिमी आफैसंग अन्जान जादु
जसले मलाई मात्र काबु गर्छ
मात्र मलाई
मात्र मलाई,

तिम्रो जादुमा आत्मियता छ,
न्यानोपन छ,रिस छ, गाली छ,
नखरा छ, हासो छ, दुख छ
तर माया पनी टन्न छ
म हरिसके तिम्रो जादुमा

बस एउटै इच्छा छ
तिम्रो जादुमा परेर
कहिले तिमीलाई नै हार्नु नपरोस`,
    },
    {
        title: 'धुँवाको उच्चाई',
        content: `के तिमी सुन्छौ?
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
    },
];

const ebook =[
    {
        title: 'मेरा कविताहरू (My Poems) - Ebook',
        link: 'https://drive.google.com/file/d/1KXJH1b0kYV7j9Z8uYl4g6jz1F2N6X9Ih/view?usp=sharing',
        description: 'A collection of my poems in Nepali language, expressing emotions and thoughts through verses.',
        image: '/image/poetry/khalti.jpg',
    },
];

const donations = [
    { name: 'eSewa', qr: '/image/poetry/esewa.jpg', id: '9823645664', link: 'https://esewa.com.np' },
    { name: 'Khalti', qr: '/image/poetry/khalti.jpg', id: '9823645664', link: 'https://khalti.com' },
];

const PoetryPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedPoems, setExpandedPoems] = useState({});

    const togglePoem = (index) => {
        setExpandedPoems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleNavClick = (section) => {
        if (section === 'portfolio') {
            window.location.href = '/';
        } else if (section === 'support') {
            document.getElementById('support').scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const navItems = ['portfolio', 'support'];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Original Navbar */}
            <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 h-16 border-b border-gray-300">
                <div className="mx-auto px-4 max-w-3xl h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* Logo */}
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => handleNavClick('portfolio')}
                        >
                            <span className="text-2xl font-bold text-black nepali">अंकित.</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="text-base font-medium cursor-pointer transition-colors duration-300 text-gray-600 hover:text-black"
                                >
                                    {item === 'portfolio' ? 'Portfolio' : 'Support'}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(!mobileMenuOpen);
                                }}
                                className="p-2 text-black hover:text-gray-900 transition-colors cursor-pointer"
                                aria-label="Toggle menu"
                            >
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

                    {/* Mobile Dropdown Menu */}
                    <div
                        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-300 shadow-lg transition-all duration-300 ease-in-out ${
                            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="block w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all cursor-pointer duration-200 text-gray-600 hover:text-black hover:bg-gray-100"
                                >
                                    {item === 'portfolio' ? 'Portfolio' : 'Support'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-20 px-4 pb-16 max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-left mb-4 border-b border-gray-300 pb-8">
                    <h1 className="nepali text-4xl font-bold text-black mb-4 mt-4">मेरा कविताहरू</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The expression of emotions in the world of words
                    </p>
                </div>

                {/* Poems List - With Read Full functionality */}
                <div className="space-y-16">
                    {poems.map((poem, index) => {
                        const isExpanded = expandedPoems[index];
                        const preview = poem.content.split('\n').slice(0, 2).join('\n');
                        const hasMoreContent = poem.content.split('\n').length > 4;

                        return (
                            <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0">
                                <div className="flex items-start justify-between mb-2">
                                    <h2 className="nepali text-3xl font-bold text-black">
                                        {poem.title}
                                    </h2>
                                    {poem.date && (
                                        <span className="text-gray-500 text-sm font-normal">
                                            {poem.date}
                                        </span>
                                    )}
                                </div>

                                <pre className="nepali whitespace-pre-line text-gray-900 leading-relaxed text-xl font-normal">
                                    {isExpanded ? poem.content : preview}
                                </pre>

                                {hasMoreContent && (
                                    <button
                                        onClick={() => togglePoem(index)}
                                        className="mt-2 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors cursor-pointer"
                                    >
                                        {isExpanded ? 'Show Less' : 'Read Full'}
                                        <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
                    {/* Ebook Section */}
{/* <div id="ebook" className="mt-20 pt-12 border-t border-gray-300">
    <div className="text-left mb-12">
        <h3 className="nepali text-3xl font-bold text-black mb-4">My Ebook</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
            Download my poetry collection and immerse yourself in the world of words and emotions.
        </p>
    </div>

    <div className="flex flex-wrap justify-left gap-12">
        {ebook.map((book) => (
            <div key={book.title} className="text-left">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 mb-4">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-48 h-64 object-cover rounded border border-gray-400"
                    />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h4>
                <p className="text-gray-600 text-base mb-4 max-w-xs">{book.description}</p>
                <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                    <Download className="w-5 h-5" />
                    Download Ebook
                </a>
            </div>
        ))}
    </div>
</div> */}
                {/* Support Section */}
                <div id="support" className="mt-20 pt-12 border-t border-gray-300">
                    <div className="text-left mb-12">
                        <h3 className="nepali text-3xl font-bold text-black mb-4">Support</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            If you love my poems, you can support me via:
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-left gap-12">
                        {donations.map((donation) => (
                            <div key={donation.name} className="text-left">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 mb-4">
                                    <img
                                        src={donation.qr}
                                        alt={`${donation.name} QR`}
                                        className="w-48 h-48 rounded border border-gray-400"
                                    />
                                </div>
                                <p className="text-gray-700 text-lg mb-1">{donation.name}:</p>
                                <p className="text-gray-600 text-base mb-4 font-mono">{donation.id}</p>
                                <a
                                    href={donation.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-lg"
                                >
                                    Support
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-300 py-8 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-gray-600 text-base">
                        © {new Date().getFullYear()} Ankit Karki. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PoetryPage;