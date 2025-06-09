
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Clock } from 'lucide-react';
import FastImage from './FastImage';

interface PortfolioCardProps {
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
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
      is_primary: boolean;
    }>;
  };
  onClick: (project: any) => void;
  featured?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  project, 
  onClick, 
  featured = false 
}) => {
  const navigate = useNavigate();
  const primaryImage = project.media.find(m => m.is_primary) || project.media[0];

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // Prevent click if it's on a button or link element
    if ((e.target as HTMLElement).closest('button, a')) {
      return;
    }
    
    if (!project.is_coming_soon) {
      // Navigate to case study instead of calling onClick
      if (project.title === "Nonna's Table") {
        navigate('/case-studies/nonnas-table');
      } else if (project.title === "Digital Resume Site") {
        navigate('/case-studies/digital-cv');
      } else {
        // For other projects, still call onClick for now
        onClick(project);
      }
    }
  }, [project, navigate, onClick]);

  const handleLiveSiteClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (project.link && !project.is_coming_soon) {
      window.open(project.link, '_blank');
    }
  }, [project.link, project.is_coming_soon]);

  const handleCaseStudyClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (project.title === "Nonna's Table") {
      navigate('/case-studies/nonnas-table');
    } else if (project.title === "Digital Resume Site") {
      navigate('/case-studies/digital-cv');
    }
  }, [project.title, navigate]);

  const getButtonText = () => {
    if (project.title === "Nonna's Table" || project.title === "Digital Resume Site") {
      return 'View Case Study';
    }
    return 'View Project';
  };

  return (
    <div 
      className={`bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
        featured ? 'transform hover:scale-[1.02]' : ''
      }`}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden bg-humble-charcoal/50 ${
        featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
      }`}>
        {primaryImage && (
          <FastImage
            src={primaryImage.media_url}
            alt={primaryImage.alt_text || project.title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            priority={featured}
          />
        )}

        {project.is_coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/90">
            <div className="bg-humble-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Coming Soon
            </div>
          </div>
        )}

        {!project.is_coming_soon && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button 
              className={`bg-white/90 hover:bg-white text-humble-charcoal px-4 py-2 rounded-full font-medium ${
                featured ? 'text-lg px-6 py-3' : 'text-sm'
              }`}
              onClick={handleCaseStudyClick}
            >
              {getButtonText()}
            </button>
          </div>
        )}

        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`${featured ? 'p-8' : 'p-6'}`}>
        {/* Categories */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {project.categories.slice(0, 3).map((category, index) => (
              <span key={index} className="text-humble-purple-400 text-sm font-medium uppercase tracking-wide">
                {category}
                {index < Math.min(project.categories.length - 1, 2) && ','}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-semibold mb-4 text-white leading-tight ${
          featured ? 'text-2xl lg:text-3xl' : 'text-lg'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-white/80 leading-relaxed mb-6 ${
          featured ? 'text-lg lg:text-xl' : 'text-base'
        }`}>
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded-lg ${
                  featured ? 'text-sm' : 'text-xs'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className={`flex items-center justify-between ${featured ? 'mt-8' : 'mt-6'}`}>
          {project.build_time && (
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="h-4 w-4" />
              <span className={`${featured ? 'text-base' : 'text-sm'}`}>{project.build_time}</span>
            </div>
          )}
          
          {!project.is_coming_soon && project.link && (
            <button
              onClick={handleLiveSiteClick}
              className={`flex items-center gap-2 text-humble-pink-500 hover:text-humble-pink-400 transition-colors ${
                featured ? 'text-base font-medium' : 'text-sm'
              }`}
            >
              View Live Site
              <ExternalLink className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
