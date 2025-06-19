
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';

interface Project {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  description?: string;
  categories?: string[];
  main_image?: string;
  build_time?: string;
  link?: string;
  is_featured?: boolean;
  is_coming_soon?: boolean;
  created_at: string;
}

const Work = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log('Fetching all projects from projects table...');
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        setProjects([]);
      } else {
        console.log('Projects data received:', projectsData);
        
        const processedProjects = projectsData?.map(project => ({
          id: project.id,
          slug: project.slug || project.title.toLowerCase().replace(/\s+/g, '-'),
          title: project.title,
          subtitle: project.subtitle,
          description: project.description,
          categories: project.categories || [],
          main_image: project.main_image,
          build_time: project.build_time,
          link: project.link,
          is_featured: project.is_featured,
          is_coming_soon: project.is_coming_soon,
          created_at: project.created_at
        })) || [];
        
        // Sort projects to show coming soon projects at the end
        const sortedProjects = processedProjects.sort((a, b) => {
          // First sort by featured status
          if (a.is_featured && !b.is_featured) return -1;
          if (!a.is_featured && b.is_featured) return 1;
          
          // Then within each group, put coming soon projects at the end
          if (a.is_coming_soon && !b.is_coming_soon) return 1;
          if (!a.is_coming_soon && b.is_coming_soon) return -1;
          
          // Finally sort by creation date
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
        
        setProjects(sortedProjects);
      }
    } catch (error) {
      console.error('Error in fetchProjects:', error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const getGradient = (title: string) => {
    switch (title.toLowerCase()) {
      case "nonna's table":
        return 'from-amber-500 to-orange-600';
      case 'digital resume site':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-humble-pink-500 to-humble-purple-500';
    }
  };

  const getCategory = (categories: string[]) => {
    if (categories && categories.length > 0) {
      return categories[0];
    }
    return 'Web Design';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-humble-navy text-white">
        <StarBackground />
        <Navbar />
        
        <div className="pt-32 pb-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
                Work
              </h1>
              <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
                Loading our projects...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-humble-navy text-white">
      <StarBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Work
            </h1>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              Our latest projects showcasing innovative web solutions and creative design.
            </p>
          </div>

          {/* Projects Grid */}
          {projects.length > 0 ? (
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  
                  {/* Image */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {project.is_featured && (
                      <div className="absolute -top-3 -left-3 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        Featured
                      </div>
                    )}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-humble-charcoal/30 backdrop-blur-sm border border-white/10 relative">
                      <img 
                        src={project.main_image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`}
                        alt={project.title}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          project.is_coming_soon ? 'blur-sm' : ''
                        }`}
                      />
                      {project.is_coming_soon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="bg-humble-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
                            Coming Soon
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    
                    {/* Category & Build Time */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white font-medium`}>
                        {project.categories?.[0] || 'Web Design'}
                      </span>
                      {project.build_time && !project.is_coming_soon && (
                        <div className="flex items-center gap-2 text-white/60">
                          <Clock className="h-4 w-4" />
                          <span>{project.build_time}</span>
                        </div>
                      )}
                    </div>

                    {/* Title and Subtitle */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="text-white/70 text-lg mb-3">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    {project.description && (
                      <p className="text-white/80 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {!project.is_coming_soon ? (
                        <>
                          <button
                            onClick={() => navigate(`/work/${project.slug}`)}
                            className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                          >
                            View Case Study
                            <ArrowRight className="h-5 w-5" />
                          </button>
                          
                          {project.link && (
                            <button
                              onClick={() => window.open(project.link, '_blank')}
                              className="flex items-center justify-center gap-3 px-6 py-3 bg-humble-charcoal/80 text-white rounded-xl font-semibold hover:bg-humble-charcoal transition-colors border border-white/10"
                            >
                              Visit Live Site
                              <ExternalLink className="h-5 w-5" />
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="text-white/60 font-medium text-lg">
                          Project details coming soon...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-16">
              <p>No projects found.</p>
            </div>
          )}

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

export default Work;
