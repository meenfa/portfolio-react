import React, { useState } from 'react';
import { ArrowLeft, Heart, ExternalLink } from 'lucide-react';

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

म रातमा रमाउछु,`,
    date: 'July 2025',
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
    date: 'July 2024',
  },
];

const PoetryPage = () => {
  const [expandedPoems, setExpandedPoems] = useState({});

  const togglePoem = (index) => {
    setExpandedPoems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navigateToPortfolio = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={navigateToPortfolio}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </button>
            <div className="text-xs text-gray-500 font-medium">POETRY</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 max-w-2xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Poems & Verses
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
            A collection of thoughts and emotions expressed through words
          </p>
        </div>

        {/* Poems List */}
        <div className="space-y-12">
          {poems.map((poem, index) => {
            const isExpanded = expandedPoems[index];
            const lines = poem.content.split('\n');
            const preview = lines.slice(0, 4).join('\n');
            const hasMore = lines.length > 4;

            return (
              <article key={index} className="group">
                {/* Poem Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-normal text-gray-900 mb-1">
                      {poem.title}
                    </h2>
                    <time className="text-xs text-gray-500 font-medium tracking-wide">
                      {poem.date}
                    </time>
                  </div>
                </div>

                {/* Poem Content */}
                <div className="relative">
                  <pre className={`whitespace-pre-line text-gray-950 leading-relaxed font-light tracking-wide ${
                    !isExpanded && hasMore ? 'max-h-96 overflow-hidden' : ''
                  }`}>
                    {isExpanded ? poem.content : preview}
                  </pre>
                  
                  {/* Read More Button */}
                  {hasMore && (
                    <div className={`mt-4 ${!isExpanded ? 'flex items-center gap-2' : ''}`}>
                      <button
                        onClick={() => togglePoem(index)}
                        className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center gap-1 group"
                      >
                        {isExpanded ? (
                          'Show less'
                        ) : (
                          <>
                            Read full poem
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Divider */}
                {index < poems.length - 1 && (
                  <div className="mt-12 pt-8 border-t border-gray-100"></div>
                )}
              </article>
            );
          })}
        </div>

        {/* Support Section */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-normal text-gray-900 mb-3">
              Support the Art
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              If these poems resonate with you, consider supporting my creative journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-sm font-medium">
                Buy Me a Coffee
              </button>
              <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Support Monthly
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved • Written with purpose
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PoetryPage;