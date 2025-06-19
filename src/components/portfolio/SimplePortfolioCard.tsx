
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface SimplePortfolioCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    categories: string[];
    link?: string;
    build_time?: string;
    technologies: string[];
    is_coming_soon: boolean;
    is_featured: boolean;
    slug?: string;
    subtitle?: string;
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
    }>;
  };
  onClick: (project: any) => void;
  featured?: boolean;
}

const SimplePortfolioCard: React.FC<SimplePortfolioCardProps> = ({ 
  project, 
  onClick, 
  featured = false 
}) => {
  const navigate = useNavigate();
  const primaryImage = project.media[0];

  const handleCaseStudyClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (project.is_coming_soon) return;
    
    // Always navigate to /work/slug format
    if (project.slug) {
      navigate(`/work/${project.slug}`);
    } else {
      // Fallback slug generation
      const slug = project.title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/work/${slug}`);
    }
  }, [project, navigate]);

  const handleLiveSiteClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (project.link && !project.is_coming_soon) {
      window.open(project.link, '_blank');
    }
  }, [project]);

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // Prevent click if it's on a button or link
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    
    if (!project.is_coming_soon) {
      onClick(project);
    }
  }, [project, onClick]);

  return (
    <div 
      className={`bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${
        project.is_coming_soon ? 'cursor-default' : 'cursor-pointer'
      } ${featured ? 'transform hover:scale-[1.02]' : ''}`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <OptimizedImage
          src={primaryImage?.media_url || ''}
          alt={primaryImage?.alt_text || project.title}
          width={400}
          height={300}
          className={`aspect-[4/3] ${project.is_coming_soon ? 'blur-sm' : ''}`}
          priority={featured}
        />
        
        {project.is_coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
              Coming Soon
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <p className="text-white/70 text-sm mb-3">
            {project.subtitle}
          </p>
        )}
        
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {/* Case Study Link - Hidden for coming soon projects */}
          {!project.is_coming_soon && (
            <button
              onClick={handleCaseStudyClick}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              <Eye className="h-4 w-4" />
              Case Study
            </button>
          )}

          {/* Live Site Link */}
          {project.link && !project.is_coming_soon && (
            <button
              onClick={handleLiveSiteClick}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-humble-charcoal/80 text-white rounded-lg font-medium hover:bg-humble-charcoal transition-colors text-sm border border-white/10"
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </button>
          )}

          {/* Coming Soon Message */}
          {project.is_coming_soon && (
            <div className="flex items-center justify-center px-4 py-2 bg-humble-charcoal/50 text-white/60 rounded-lg text-sm border border-white/10">
              Project details coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolioCard;
