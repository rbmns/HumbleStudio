
import React, { useState, useCallback } from 'react';
import { ExternalLink, Clock } from 'lucide-react';
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

const SimplePortfolioCard: React.FC<SimplePortfolioCardProps> = ({ project, onClick, featured = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const primaryImage = project.media[0];

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // Prevent click if it's on a link element
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    
    if (!project.is_coming_soon) {
      console.log('Card clicked for project:', project.title);
      onClick(project);
    }
  }, [project, onClick]);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div 
      className={`bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
        featured ? 'transform hover:scale-[1.02]' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className={`relative overflow-hidden bg-humble-charcoal/50 ${
        featured ? 'aspect-[16/10]' : 'aspect-[4/3]'
      }`}>
        {primaryImage && !imageError ? (
          <OptimizedImage
            src={primaryImage.media_url}
            alt={primaryImage.alt_text || project.title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : imageError ? (
          <div className="w-full h-full bg-humble-charcoal/80 flex items-center justify-center">
            <div className="text-white/50 text-xs">Image unavailable</div>
          </div>
        ) : null}

        {project.is_coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/90">
            <div className="bg-humble-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Coming Soon
            </div>
          </div>
        )}

        {!project.is_coming_soon && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button className={`bg-white/90 hover:bg-white text-humble-charcoal px-3 py-2 rounded-full font-medium ${
              featured ? 'text-base px-4 py-3' : 'text-sm'
            }`}>
              {project.title === "Nonna's Table" ? 'View Case Study' : 'View Project'}
            </button>
          </div>
        )}

        {featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className={`p-4 ${featured ? 'md:p-6' : ''}`}>
        <div className="mb-2">
          <div className="flex flex-wrap gap-1">
            {project.categories.slice(0, 2).map((category, index) => (
              <span key={index} className="text-humble-purple-400 text-xs font-medium uppercase tracking-wide">
                {category}
                {index < Math.min(project.categories.length - 1, 1) && ','}
              </span>
            ))}
            {project.categories.length > 2 && (
              <span className="text-humble-purple-400/60 text-xs font-medium uppercase tracking-wide">
                +{project.categories.length - 2}
              </span>
            )}
          </div>
        </div>

        <h3 className={`font-semibold mb-2 text-white line-clamp-2 ${
          featured ? 'text-xl md:text-2xl mb-3' : 'text-base'
        }`}>
          {project.title}
        </h3>

        <p className={`text-white/70 leading-relaxed mb-3 line-clamp-2 ${
          featured ? 'text-base md:text-lg mb-4' : 'text-sm'
        }`}>
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, featured ? 4 : 3).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded ${
                  featured ? 'text-sm' : 'text-xs'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 4 : 3) && (
              <span className={`px-2 py-1 bg-humble-gray-700 text-white/60 rounded ${
                featured ? 'text-sm' : 'text-xs'
              }`}>
                +{project.technologies.length - (featured ? 4 : 3)}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          {project.build_time && (
            <div className={`flex items-center gap-1 text-humble-blue-400 ${
              featured ? 'text-sm' : 'text-xs'
            }`}>
              <Clock className={featured ? 'h-4 w-4' : 'h-3 w-3'} />
              <span>{project.build_time}</span>
            </div>
          )}

          {!project.is_coming_soon && project.link && project.title !== "Nonna's Table" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-1 transition-colors p-2 -m-2 ${
                featured ? 'text-base' : 'text-sm'
              }`}
              onClick={handleLinkClick}
            >
              View Site
              <ExternalLink className={featured ? 'h-4 w-4' : 'h-3 w-3'} />
            </a>
          )}

          {!project.is_coming_soon && project.title === "Nonna's Table" && (
            <a
              href="https://nonnas-table.humblestudio.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-1 transition-colors p-2 -m-2 ${
                featured ? 'text-base' : 'text-sm'
              }`}
              onClick={handleLinkClick}
            >
              View Live Site
              <ExternalLink className={featured ? 'h-4 w-4' : 'h-3 w-3'} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolioCard;
