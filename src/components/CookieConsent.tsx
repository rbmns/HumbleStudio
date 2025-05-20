
import React from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void;
}

const CookieConsent = ({ onConsent }: CookieConsentProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        <div className="bg-humble-gray-800/95 backdrop-blur-md border border-humble-gray-700 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-humble-blue-500/20 rounded-full p-2 flex-shrink-0">
              <Cookie className="h-6 w-6 text-humble-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Cookie Consent</h3>
              <p className="text-white/70 text-sm md:text-base">
                We use cookies to ensure you get the best experience on our website. By using our site, 
                you agree to our use of cookies for analytics and personalized content in accordance with our 
                <a href="#" className="text-humble-green-400 hover:underline ml-1">Privacy Policy</a>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-2 md:mt-0">
            <button
              onClick={() => onConsent(true)}
              className="px-5 py-2 rounded-md bg-gradient-to-r from-humble-blue-500 to-humble-green-500 text-white font-medium text-sm hover:from-humble-blue-600 hover:to-humble-green-600 transition-all min-w-[120px]"
            >
              Accept All
            </button>
            <button
              onClick={() => onConsent(false)}
              className="px-5 py-2 rounded-md bg-humble-gray-700 hover:bg-humble-gray-600 text-white/80 font-medium text-sm transition-all min-w-[120px]"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
