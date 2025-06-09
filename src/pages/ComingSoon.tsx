
import React from 'react';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ComingSoon = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const projectTitle = slug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'This Project';

  return (
    <div className="min-h-screen bg-humble-navy text-white">
      <StarBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Back Button */}
            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </button>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="text-6xl mb-8">🚧</div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                {projectTitle} Case Study
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-humble-purple-400 mb-8 font-light">
                Coming Soon
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
                We're currently working on this detailed case study. It will showcase the complete 
                design process, challenges overcome, and results achieved for this project.
              </p>

              {/* What to Expect */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-3xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                  <p className="text-white/70 text-sm">Complete breakdown of goals, challenges, and solutions</p>
                </div>
                
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Design Process</h3>
                  <p className="text-white/70 text-sm">Behind-the-scenes look at our design methodology</p>
                </div>
                
                <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Results & Impact</h3>
                  <p className="text-white/70 text-sm">Measurable outcomes and business impact</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-humble-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Expected Timeline</h3>
                </div>
                <p className="text-white/80 text-lg">
                  This case study will be published within the next 2-3 weeks. 
                  We're currently finalizing the content and gathering all project assets.
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Interested in Similar Work?
                </h3>
                <p className="text-white/80 mb-8">
                  While you wait for this case study, explore our other projects or get in touch 
                  to discuss your own project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/work')}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-humble-charcoal/50 border border-white/20 text-white rounded-2xl font-semibold hover:bg-humble-charcoal/70 transition-colors"
                  >
                    View Other Projects
                  </button>
                  
                  <button
                    onClick={() => navigate('/inquiry')}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-2xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Start Your Project
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

export default ComingSoon;
