
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IlNonnaCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Il Nonna: Direct Growth in Rotterdam | HumbleStudio";
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-humble-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-humble-navy via-humble-charcoal to-humble-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Il Nonna: Direct Growth in Rotterdam
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4">
              Authentic Italian Restaurant, Rotterdam
            </p>
            <p className="text-lg text-white/70">
              Reduce third-party costs, boost reservations, enhance digital presence.
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Il Nonna Restaurant Website - Desktop and Mobile View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Challenge
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Il Nonna faced high commission fees from platforms like Thuisbezorgd.nl and struggled with limited direct online orders and reservations due to an outdated website and fragmented digital identity.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Solution
            </h2>
            <div className="text-lg text-white/80 leading-relaxed mb-12">
              <p className="mb-6">
                We developed a new, branded website for Il Nonna featuring:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>Direct online ordering (for both delivery & pickup) via Sitedish, integrated with MultiSafepay for seamless iDEAL and card payments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>An integrated table reservation system.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>A dedicated admin tool for efficient order management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>Automated email notifications for new orders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>A beautifully designed, interactive menu showcase.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
                  <span>A warm, authentic visual style reflecting their Italian comfort.</span>
                </li>
              </ul>
              <p>
                This centralized all operations and significantly enhanced their digital presence.
              </p>
            </div>

            {/* Feature Screenshots Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-humble-charcoal rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Online Ordering Interface</h3>
                <div className="aspect-[4/3] bg-humble-charcoal/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Online Ordering Interface Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-humble-charcoal rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Reservation System</h3>
                <div className="aspect-[4/3] bg-humble-charcoal/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Reservation System Interface Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-humble-charcoal rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Admin Dashboard</h3>
                <div className="aspect-[4/3] bg-humble-charcoal/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Admin Order Dashboard Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-humble-charcoal rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Mobile Experience</h3>
                <div className="aspect-[4/3] bg-humble-charcoal/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Mobile Website Mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Impact & Results
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              The integrated platform led to increased direct online orders, significantly reducing reliance on high-commission third-party services and boosting profitability. The seamless reservation system resulted in more direct table bookings, giving Il Nonna greater control. Overall, the enhanced digital presence strengthened brand identity, improved the customer experience, and fostered greater loyalty.
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">↗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Direct Orders</h3>
                <p className="text-white/70">Significant increase in direct online orders</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-blue-500 to-humble-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-white/70">Reduced third-party commission fees</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Brand Identity</h3>
                <p className="text-white/70">Enhanced digital presence and customer loyalty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your restaurant's online presence?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us today for a free consultation!
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg"
            >
              Get Your Free Consultation
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IlNonnaCaseStudy;
