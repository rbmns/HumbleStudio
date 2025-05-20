
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-humble-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 pt-8 text-white">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-3xl prose-headings:text-white prose-p:text-white/80">
          <p className="mb-6 text-white/80">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to HumbleStudio.ai. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials on HumbleStudio.ai's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on HumbleStudio.ai's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          
          <h2>3. Disclaimer</h2>
          <p>
            The materials on HumbleStudio.ai's website are provided on an 'as is' basis. HumbleStudio.ai makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2>4. Limitations</h2>
          <p>
            In no event shall HumbleStudio.ai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HumbleStudio.ai's website, even if HumbleStudio.ai or a HumbleStudio.ai authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on HumbleStudio.ai's website could include technical, typographical, or photographic errors. HumbleStudio.ai does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
          
          <h2>6. Links</h2>
          <p>
            HumbleStudio.ai has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HumbleStudio.ai of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2>7. Modifications</h2>
          <p>
            HumbleStudio.ai may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
          </p>
          
          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the European Union and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at: <a href="mailto:humblestudio@rosiebiemans.com" className="text-humble-blue-400 hover:text-humble-blue-300">humblestudio@rosiebiemans.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
