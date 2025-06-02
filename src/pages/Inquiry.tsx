
import React, { useEffect } from 'react';

const Inquiry = () => {
  useEffect(() => {
    // Update page title
    document.title = "Inquiry | HumbleStudio";
  }, []);

  return (
    <div className="min-h-screen bg-humble-navy flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
       <div data-tf-live="01JWPDVE76G8DJHJ0VWRH89HK7"></div><script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
};

export default Inquiry;
