
import React from 'react';
import { ArrowRight, ExternalLink, Clock, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: "Nonna's Table",
      subtitle: "Restaurant Landing Page",
      description: "A beautiful, conversion-focused landing page for an Italian restaurant featuring online reservations, menu showcase, and seamless user experience.",
      image: "/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png",
      liveUrl: "https://nonnas-table.humblestudio.ai/",
      caseStudyUrl: "/case-studies/nonnas-table",
      buildTime: "48 hours",
      category: "Restaurant",
      stats: {
        conversions: "+85%",
        bounce: "-40%",
        traffic: "+120%"
      },
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "Digital Resume Site",
      subtitle: "Personal Branding Platform",
      description: "A sophisticated personal website showcasing professional achievements, portfolio, and contact information with modern design and smooth animations.",
      image: "/lovable-uploads/f1c45144-63a0-4f95-8d0c-21b19d944045.png",
      liveUrl: "https://rosiebiemans.com/",
      caseStudyUrl: "/case-studies/digital-cv",
      buildTime: "36 hours",
      category: "Personal Brand",
      stats: {
        engagement: "+95%",
        views: "+200%",
        inquiries: "+150%"
      },
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-humble-navy text-white">
      <StarBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              Deep dives into our most successful projects, showcasing the strategy, 
              design process, and results that drive real business impact.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-humble-charcoal/30 backdrop-blur-sm border border-white/10">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  
                  {/* Category & Build Time */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white font-medium`}>
                      {study.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock className="h-4 w-4" />
                      <span>{study.buildTime}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-lg text-humble-purple-400 font-medium">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-white/60 text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate(study.caseStudyUrl)}
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      Read Case Study
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-humble-charcoal/50 border border-white/20 text-white rounded-xl font-semibold hover:bg-humble-charcoal/70 transition-colors"
                    >
                      View Live Site
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 pt-16 border-t border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Every project starts with understanding your vision and goals.
            </p>
            <button
              onClick={() => navigate('/inquiry')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
