
import React from "react";
import { ArrowRight, ExternalLink, Globe, Users, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";

const SurfInstructorCaseStudy: React.FC = () => {
  React.useEffect(() => {
    document.title = "Surf Instructor Website Case Study | HumbleStudio";
  }, []);

  return (
    <div className="min-h-screen bg-humble-navy text-white relative">
      <StarBackground />
      <Navbar />
      
      {/* Live Site Button */}
      <div className="container mx-auto px-6 pt-28 pb-1 flex justify-end">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="gap-2 border-humble-pink-500 text-humble-pink-400 hover:bg-humble-pink-500/10"
        >
          <a
            href="https://coastvibe-surf.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live site"
          >
            View Live Site
            <ExternalLink className="ml-2" />
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-humble-pink-500/20 text-humble-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Freelance Profile Website
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Surf Coach E.
              <span className="block text-2xl lg:text-3xl text-humble-blue-400 font-normal mt-2">
                Surf Instructor & Freelancer
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              A bilingual professional website for a certified surf coach offering private and freelance lessons in Spain, designed to establish credibility and attract clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-humble-purple-400">2</div>
                <div className="text-sm text-white/60">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-humble-blue-400">5</div>
                <div className="text-sm text-white/60">Days Build</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-humble-pink-400">100%</div>
                <div className="text-sm text-white/60">Mobile Ready</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/62039a47-ce32-4800-bfec-e882f691e01f.png" 
              alt="Surf Coach E. website"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">The Challenge</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Surf Coach E. needed a digital presence to showcase his surf coaching services and establish credibility within the surf and hospitality industries. As a certified surf coach offering services in Spain, he required a professional platform that could serve multiple purposes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-humble-blue-400">Key Requirements</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Present surf coaching offerings clearly</li>
                  <li>• Act as a digital business card</li>
                  <li>• Bilingual support (English and Dutch)</li>
                  <li>• Reflect coastal, beach lifestyle aesthetic</li>
                  <li>• Simple, clean, and professional design</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-humble-purple-400">Target Audience</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Potential surf lesson clients</li>
                  <li>• Surf camps and schools</li>
                  <li>• Hospitality industry collaborators</li>
                  <li>• Campgrounds and resorts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">The Solution</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We designed and developed coastvibe-surf.lovable.app using Lovable.dev, creating a clean, coastal-themed website that perfectly captures the professional surf coaching brand while maintaining an approachable, authentic feel.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-humble-charcoal/30 rounded-xl">
                <Globe className="w-8 h-8 text-humble-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bilingual Design</h3>
                <p className="text-sm text-white/70">Seamless English/Dutch language switching for broader reach</p>
              </div>
              <div className="text-center p-6 bg-humble-charcoal/30 rounded-xl">
                <Shield className="w-8 h-8 text-humble-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Credibility Focus</h3>
                <p className="text-sm text-white/70">Prominent display of certifications and qualifications</p>
              </div>
              <div className="text-center p-6 bg-humble-charcoal/30 rounded-xl">
                <Smartphone className="w-8 h-8 text-humble-pink-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-sm text-white/70">Perfect accessibility on all devices for on-the-go clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-blue-500/30">
              <Globe className="w-6 h-6 text-humble-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Fully Bilingual Website</h3>
              <p className="text-sm text-white/70">Complete EN/NL language support with seamless toggling</p>
            </div>
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-purple-500/30">
              <Users className="w-6 h-6 text-humble-purple-500 mb-3" />
              <h3 className="font-semibold mb-2">Service Descriptions</h3>
              <p className="text-sm text-white/70">Clear presentation of private and group surf lessons</p>
            </div>
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-pink-500/30">
              <Shield className="w-6 h-6 text-humble-pink-500 mb-3" />
              <h3 className="font-semibold mb-2">Certifications Display</h3>
              <p className="text-sm text-white/70">Prominent showcase of ISA, Lifeguard, and ALO qualifications</p>
            </div>
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-blue-500/30">
              <ExternalLink className="w-6 h-6 text-humble-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Contact Optimization</h3>
              <p className="text-sm text-white/70">Easy client outreach with optimized contact section</p>
            </div>
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-purple-500/30">
              <div className="w-6 h-6 bg-humble-purple-500 rounded mb-3"></div>
              <h3 className="font-semibold mb-2">Coastal Design</h3>
              <p className="text-sm text-white/70">Beach and surf-inspired visual elements throughout</p>
            </div>
            <div className="p-6 bg-humble-navy/50 rounded-xl border border-humble-pink-500/30">
              <Smartphone className="w-6 h-6 text-humble-pink-500 mb-3" />
              <h3 className="font-semibold mb-2">Digital Business Card</h3>
              <p className="text-sm text-white/70">Professional presence for collaborations and client connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Results & Impact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-humble-blue-400 mb-3">Professional Presence</h3>
                  <p className="text-white/80">Surf Coach E. now has a professional, approachable online presence that effectively communicates his unique surf coaching approach and qualifications.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-humble-purple-400 mb-3">Expanded Reach</h3>
                  <p className="text-white/80">The bilingual setup broadens his audience and client base, allowing him to serve both English and Dutch-speaking clients.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-humble-pink-400 mb-3">Business Connections</h3>
                  <p className="text-white/80">The site acts as a digital business card, helping Surf Coach E. connect with surf camps, campgrounds, and hospitality clients.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-humble-blue-400 mb-3">Client Trust</h3>
                  <p className="text-white/80">Clear presentation of certifications and professional approach builds immediate trust with potential clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default SurfInstructorCaseStudy;
