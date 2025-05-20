
import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-humble-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Let's build your site.</h2>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
          <p className="text-white/80 mb-8 leading-relaxed text-center">
            Interested in working together, or just have questions? Reach out anytime through any of these channels.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-blue-500/50 transition-all duration-300">
              <a href="mailto:humblestudio@rosiebiemans.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-gray-800 flex items-center justify-center">
                  <Mail size={20} className="text-humble-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div>humblestudio@rosiebiemans.com</div>
                </div>
              </a>
            </div>
            
            <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-green-500/50 transition-all duration-300">
              <a href="https://instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-gray-800 flex items-center justify-center">
                  <Instagram size={20} className="text-humble-green-500" />
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
