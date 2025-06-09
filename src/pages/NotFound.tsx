
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-humble-navy text-white">
      <StarBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* 404 Content */}
            <div className="space-y-8">
              <div className="text-8xl font-bold text-humble-purple-400 mb-8 font-space-grotesk">
                404
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Page Not Found
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
                Oops! The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you may have entered the wrong URL.
              </p>

              {/* Error Details */}
              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
                <h3 className="text-lg font-semibold text-white mb-4">What happened?</h3>
                <p className="text-white/70 mb-4">
                  You tried to access: <span className="text-humble-purple-400 font-mono">{location.pathname}</span>
                </p>
                <p className="text-white/70 text-sm">
                  This URL doesn't match any of our pages. Don't worry, it happens to the best of us!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-humble-charcoal/50 border border-white/20 text-white rounded-2xl font-semibold hover:bg-humble-charcoal/70 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Go Back
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-2xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <Home className="h-5 w-5" />
                  Go Home
                </button>
              </div>

              {/* Helpful Links */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-3">Our Work</h4>
                  <p className="text-white/70 text-sm mb-4">Check out our latest projects and case studies</p>
                  <button
                    onClick={() => navigate('/work')}
                    className="text-humble-purple-400 hover:text-humble-purple-300 font-medium text-sm"
                  >
                    View Projects →
                  </button>
                </div>
                
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-3">Get Started</h4>
                  <p className="text-white/70 text-sm mb-4">Ready to build your dream website?</p>
                  <button
                    onClick={() => navigate('/inquiry')}
                    className="text-humble-purple-400 hover:text-humble-purple-300 font-medium text-sm"
                  >
                    Start Project →
                  </button>
                </div>
                
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-3">About Us</h4>
                  <p className="text-white/70 text-sm mb-4">Learn more about our team and process</p>
                  <button
                    onClick={() => navigate('/#about')}
                    className="text-humble-purple-400 hover:text-humble-purple-300 font-medium text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default NotFound;
