
import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "humblestudio@rosiebiemans.com";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section id="contact" className="section-padding bg-humble-charcoal/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Let's build your site.</h2>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
          <p className="text-white/80 mb-8 leading-relaxed text-center">
            Interested in working together, or just have questions? Reach out anytime through any of these channels.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-humble-charcoal flex items-center justify-center">
                  <Mail size={20} className="text-humble-pink-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/60">Email</div>
                  <button
                    onClick={() => copyToClipboard(email)}
                    className="flex items-center gap-2 text-white hover:text-humble-pink-400 transition-colors group"
                    aria-label="Copy email address"
                  >
                    <span>Copy Email</span>
                    {isCopied ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} className="opacity-70 group-hover:opacity-100" />
                    )}
                  </button>
                </div>
              </div>
              {isCopied && (
                <div className="mt-2 text-sm text-green-500 animate-fade-in">
                  Email copied to clipboard!
                </div>
              )}
            </div>
            
            <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-pink-500/50 transition-all duration-300">
              <a href="https://instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-charcoal flex items-center justify-center">
                  <Instagram size={20} className="text-humble-pink-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Instagram</div>
                  <div>@humblestudio.ai</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
