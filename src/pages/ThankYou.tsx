import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Home, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText('hi@humblestudio.ai');
    // You could add a toast notification here in the future if desired
  };

  return (
    <div className="min-h-screen bg-humble-navy">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32 flex flex-col items-center justify-center">
        <div className="max-w-lg w-full rounded-xl p-8 md:p-10 bg-humble-charcoal/50 backdrop-blur-sm border border-humble-gray-700/50">
          <div className="flex flex-col items-center text-center space-y-6">
            <span className="text-5xl mb-2">🎉</span>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Thank you!</h1>
            
            <p className="text-white/80 text-lg">
              Your info is on its way to HumbleStudio.
              <br />
              We'll reach out within 1 business day to get started.
            </p>
            
            <div className="w-full border-t border-humble-gray-700/50 my-4"></div>
            
            <p className="text-white/80">
              Want to stay in the loop? Follow us on Instagram.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
              <Button 
                variant="outline"
                className="border-humble-blue-500 hover:bg-humble-blue-500/10"
                onClick={() => window.open('https://instagram.com/humblestudio.ai', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow @humblestudio.ai
              </Button>
              
              <Button
                variant="outline"
                className="border-humble-green-500 hover:bg-humble-green-500/10"
                onClick={handleEmailCopy}
              >
                <Mail className="w-5 h-5 mr-2" />
                Copy Email
              </Button>
            </div>
            
            <div className="w-full border-t border-humble-gray-700/50 my-4"></div>
            
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 hover:from-humble-blue-600 hover:to-humble-purple-600"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
