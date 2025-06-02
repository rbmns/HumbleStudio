
import React, { useEffect } from 'react';

const Inquiry = () => {
  useEffect(() => {
    // Update page title
    document.title = "Inquiry | HumbleStudio";
  }, []);

  return (
    <div bgcolor='white'>
      <div className="w-full max-w-4xl">
        <div 
          data-tf-live="01JWPE2JWXMNKPY45E8DQGX3P1"
          className="min-h-[600px] rounded-lg overflow-hidden"
        ></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
};

export default Inquiry;
