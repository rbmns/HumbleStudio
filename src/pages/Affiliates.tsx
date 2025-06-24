
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';

const Affiliates = () => {
  useEffect(() => {
    // Set page title and meta tags
    document.title = "Affiliate Program | HumbleStudio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Join the HumbleStudio.ai Affiliate Program. Earn 20% commission promoting beautiful websites built with AI and delivered in a day.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-humble-charcoal">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Welcome to the <span className="gradient-text">HumbleStudio.ai Affiliate Program</span>
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              Beautiful websites. Built with AI. Delivered in a day.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We create high-end, one-page websites and digital business cards for freelancers, creatives, and small businesses — blending human design with AI speed. Every site is built in 1–2 days, with personal styling and strategic structure.
            </p>
          </div>

          <div className="space-y-12">
            {/* What You'll Be Promoting */}
            <section className="bg-humble-charcoal/50 rounded-xl p-8 border border-humble-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-humble-pink-500 flex items-center gap-2">
                💼 What You'll Be Promoting
              </h2>
              <ul className="space-y-3 text-white/80">
                <li>• Hire-Me Pages: digital CV with or without personalization, ATS Proof (from €49)</li>
                <li>• Digital Business Cards (From €99)</li>
                <li>• Freelancer One-Pagers</li>
                <li>• Small business websites</li>
                <li>• Fully built-for-you — no templates, no DIY</li>
                <li>• Delivered fast, styled with care</li>
              </ul>
            </section>

            {/* Why It Converts */}
            <section className="bg-humble-charcoal/50 rounded-xl p-8 border border-humble-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-humble-purple-500 flex items-center gap-2">
                🎯 Why It Converts
              </h2>
              <ul className="space-y-3 text-white/80">
                <li>• Built in 1 day — solves procrastination</li>
                <li>• High-end design without agency cost</li>
                <li>• Perfect for digital nomads, remote workers, and creative professionals</li>
                <li>• Real case studies & social proof</li>
              </ul>
            </section>

            {/* Commission & Tracking */}
            <section className="bg-humble-charcoal/50 rounded-xl p-8 border border-humble-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-humble-blue-500 flex items-center gap-2">
                💸 Commission & Tracking
              </h2>
              <ul className="space-y-3 text-white/80">
                <li>• <strong>Commission:</strong> 20% on every paid referral</li>
                <li>• <strong>Cookie duration:</strong> 30 days</li>
                <li>• Transparent, instant payments via LemonSqueezy</li>
              </ul>
            </section>

            {/* Resources */}
            <section className="bg-humble-charcoal/50 rounded-xl p-8 border border-humble-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-humble-pink-500 flex items-center gap-2">
                📣 Resources You Can Use
              </h2>
              <ul className="space-y-3 text-white/80">
                <li>• Case study library: <a href="https://humblestudio.ai/case-studies" target="_blank" rel="noopener noreferrer" className="text-humble-pink-500 hover:underline inline-flex items-center gap-1">https://humblestudio.ai/case-studies <ExternalLink className="h-3 w-3" /></a></li>
                <li>• Website: <a href="https://humblestudio.ai" target="_blank" rel="noopener noreferrer" className="text-humble-pink-500 hover:underline inline-flex items-center gap-1">https://humblestudio.ai <ExternalLink className="h-3 w-3" /></a></li>
                <li>• Packages overview: <a href="https://humblestudio.ai/website-packages" target="_blank" rel="noopener noreferrer" className="text-humble-pink-500 hover:underline inline-flex items-center gap-1">https://humblestudio.ai/website-packages <ExternalLink className="h-3 w-3" /></a></li>
                <li>• HumbleStudio references: <a href="https://humblestudio.ai/work" target="_blank" rel="noopener noreferrer" className="text-humble-pink-500 hover:underline inline-flex items-center gap-1">https://humblestudio.ai/work <ExternalLink className="h-3 w-3" /></a></li>
                <li>• Instagram: <a href="https://www.instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="text-humble-pink-500 hover:underline inline-flex items-center gap-1">@humblestudio.ai <ExternalLink className="h-3 w-3" /></a></li>
                <li>• Founder: Rosie Biemans (Creative-led, based in NL)</li>
              </ul>
            </section>

            {/* Target Audience */}
            <section className="bg-humble-charcoal/50 rounded-xl p-8 border border-humble-gray-700/30">
              <h2 className="text-2xl font-bold mb-6 text-humble-purple-500 flex items-center gap-2">
                🧠 Target Audience
              </h2>
              <ul className="space-y-3 text-white/80">
                <li>• Freelancers / Creatives without a site</li>
                <li>• Hospitality professionals</li>
                <li>• Surf coaches / Nomads</li>
                <li>• Indie founders & event managers</li>
                <li>• Anyone who needs a clear personal brand online</li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-humble-pink-500/20 to-humble-purple-500/20 rounded-xl p-8 border border-humble-pink-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let's help more people launch their online presence — and earn while doing it.
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Ready? Apply as an affiliate and start sharing.
            </p>
            <a 
              href="https://humblestudioai.lemonsqueezy.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
            >
              Apply Now
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Affiliates;
