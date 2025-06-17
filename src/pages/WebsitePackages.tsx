
import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';

const WebsitePackages = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Intro Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 Choose the site that fits where you're at.
            </h1>
            <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto">
              Whether you're just getting started or ready for something more complete, we've got a package that gets you online — fast, tasteful, and totally hassle-free.
            </p>
          </div>

          {/* Three Packages Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Tier 1: Hire Me Page */}
            <div className="bg-humble-charcoal/50 rounded-2xl p-8 border border-humble-pink-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟢</span>
                <h2 className="text-2xl font-bold text-humble-pink-500">Hire Me Page</h2>
              </div>
              <div className="text-3xl font-bold text-humble-pink-500 mb-4">€49</div>
              <p className="text-white/80 mb-6">
                A clean CV-style page for job seekers and freelancers applying for work.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-3">Includes:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Short intro / profile</li>
                  <li>• Key skills or experience</li>
                  <li>• 2–3 work samples or links</li>
                  <li>• Resume upload</li>
                  <li>• Contact CTA</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-white/60 mb-2">
                  <strong>Delivery:</strong> 24h
                </div>
                <div className="text-sm text-white/60">
                  <strong>Perfect for:</strong> "Open to work" posts, job apps, LinkedIn bios
                </div>
              </div>
              
              <Link 
                to="/inquiry"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 w-full justify-center"
              >
                Book now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tier 2: Digital Business Card */}
            <div className="bg-humble-charcoal/50 rounded-2xl p-8 border border-humble-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔵</span>
                <h2 className="text-2xl font-bold text-humble-blue-500">Digital Business Card</h2>
              </div>
              <div className="text-3xl font-bold text-humble-blue-500 mb-4">from €99</div>
              <p className="text-white/80 mb-6">
                A one-pager that shows your services, personality, and how to book you.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-3">Includes:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Bio & services</li>
                  <li>• Testimonials or past work</li>
                  <li>• Booking link or contact form</li>
                  <li>• Light styling to match your vibe</li>
                  <li>• Mobile-optimized</li>
                  <li>• Optional add-ons (e.g. multilingual)</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-white/60 mb-2">
                  <strong>Delivery:</strong> 1–2 days
                </div>
                <div className="text-sm text-white/60">
                  <strong>Perfect for:</strong> Freelancers, coaches, stylists, service pros
                </div>
              </div>
              
              <Link 
                to="/work"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 w-full justify-center"
              >
                See examples
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tier 3: Starter Website */}
            <div className="bg-humble-charcoal/50 rounded-2xl p-8 border border-humble-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟣</span>
                <h2 className="text-2xl font-bold text-humble-purple-500">Starter Website</h2>
              </div>
              <div className="text-3xl font-bold text-humble-purple-500 mb-4">from €300</div>
              <p className="text-white/80 mb-6">
                A small but powerful website with everything you need to look professional.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-3">Includes:</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• 2–3 pages (Home, About, Services/Contact)</li>
                  <li>• Copy guidance or light editing</li>
                  <li>• Brand-inspired styling</li>
                  <li>• Forms, booking, newsletter integrations</li>
                  <li>• Mobile-first design</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-white/60 mb-2">
                  <strong>Delivery:</strong> 2–4 days
                </div>
                <div className="text-sm text-white/60">
                  <strong>Perfect for:</strong> Small businesses, founders, teams
                </div>
              </div>
              
              <Link 
                to="/inquiry"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 w-full justify-center"
              >
                Let's talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Comparison</h2>
            <div className="bg-humble-charcoal/30 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-humble-gray-700/30">
                      <th className="text-left p-4 text-white font-semibold">Feature</th>
                      <th className="text-center p-4 text-humble-pink-500 font-semibold">Hire Me</th>
                      <th className="text-center p-4 text-humble-blue-500 font-semibold">Digital Card</th>
                      <th className="text-center p-4 text-humble-purple-500 font-semibold">Starter Site</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-humble-gray-700/20">
                      <td className="p-4 text-white/80">Delivery</td>
                      <td className="p-4 text-center text-white/70">1 day</td>
                      <td className="p-4 text-center text-white/70">1–2 days</td>
                      <td className="p-4 text-center text-white/70">2–4 days</td>
                    </tr>
                    <tr className="border-b border-humble-gray-700/20">
                      <td className="p-4 text-white/80">Price</td>
                      <td className="p-4 text-center text-white/70">€49</td>
                      <td className="p-4 text-center text-white/70">From €99</td>
                      <td className="p-4 text-center text-white/70">From €300</td>
                    </tr>
                    <tr className="border-b border-humble-gray-700/20">
                      <td className="p-4 text-white/80">Resume upload</td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-humble-gray-700/20">
                      <td className="p-4 text-white/80">Services list</td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-humble-gray-700/20">
                      <td className="p-4 text-white/80">Contact/Booking</td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white/80">Custom pages</td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-gray-500 mx-auto" /></td>
                      <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center bg-humble-charcoal/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Still not sure?</h2>
            <p className="text-white/80 text-lg mb-6">
              Send a message and we'll recommend the best fit — no pressure.
            </p>
            <Link 
              to="/inquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
            >
              Get personalized advice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebsitePackages;
