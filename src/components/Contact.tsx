
import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Talk About Your Project</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Ready to transform your online presence? Reach out to discuss your project, ask questions, or book your free consultation. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@humblestudio.ai" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-gray-800 flex items-center justify-center">
                  <Mail size={20} className="text-humble-purple-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div>hello@humblestudio.ai</div>
                </div>
              </a>
              
              <a href="https://instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-gray-800 flex items-center justify-center">
                  <Instagram size={20} className="text-humble-pink-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Instagram</div>
                  <div>@humblestudio.ai</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/humblestudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-humble-gray-800 flex items-center justify-center">
                  <Linkedin size={20} className="text-humble-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60">LinkedIn</div>
                  <div>HumbleStudio</div>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-humble-gray-700/50">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-humble-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Message Sent!</h3>
                  <p className="text-white/70">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-humble-gray-700/50 border border-humble-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-humble-purple-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-humble-gray-700/50 border border-humble-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-humble-purple-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-humble-gray-700/50 border border-humble-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-humble-purple-500 transition-all duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 rounded-lg button-gradient text-white font-medium text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
