
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-humble-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 pt-8 text-white">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-3xl prose-headings:text-white prose-p:text-white/80">
          <p className="mb-6 text-white/80">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how HumbleStudio.ai ("we", "our", or "us") collects, uses, and shares your personal information when you visit or use our website.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            When you visit our website, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          
          <h3>2.1 Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number when you fill out forms on our website, subscribe to our newsletter, or contact us.
          </p>
          
          <h3>2.2 Usage Data</h3>
          <p>
            We collect information on how you interact with our website, including pages visited, time spent on pages, navigation paths, as well as information about your device and browser.
          </p>
          
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features of our website</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our website</li>
            <li>To monitor the usage of our website</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To provide you with news, special offers, and general information about other goods, services, and events</li>
          </ul>
          
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          
          <h2>5. Google Analytics</h2>
          <p>
            We use Google Analytics to help us understand how our customers use the site. You can read more about how Google uses your Personal Information here: <a href="https://policies.google.com/privacy" className="text-humble-blue-400 hover:text-humble-blue-300" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </p>
          
          <h2>6. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
          
          <h2>7. Your Data Protection Rights Under GDPR</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.
          </p>
          <ul>
            <li>The right to access, update, or delete your personal information</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via the email adress listed on the main page.<br>
            <a href ="https://humblestudio.ai/">Back to home </a></br>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
