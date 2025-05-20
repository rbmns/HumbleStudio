
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share your idea',
      description: "Tell me what your business does — and what you need online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-humble-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'I design & build it',
      description: "I'll use suitable AI tools to create a beautiful site, fast.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-humble-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'You go live',
      description: "We do a final check together — and you're ready to roll.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-humble-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="text-center text-white/80 text-xl mb-12 max-w-2xl mx-auto">Launch your website in 1 day — seriously.</p>
        
        <div className="relative mt-16">
          {/* Progress Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-humble-gray-700 hidden md:block">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 transform origin-left"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="bg-humble-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg border border-humble-gray-700">
                    {step.icon}
                  </div>
                  
                  <div className="text-3xl font-bold text-humble-purple-500 mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-center text-white/70">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-humble-pink-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
