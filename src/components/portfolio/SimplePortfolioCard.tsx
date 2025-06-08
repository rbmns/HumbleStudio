
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
      {/* Image Section */}
      <div className={`relative overflow-hidden bg-humble-charcoal/50 ${
        featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
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
            <button className={`bg-white/90 hover:bg-white text-humble-charcoal px-4 py-2 rounded-full font-medium ${
              featured ? 'text-lg px-6 py-3' : 'text-sm'
            }`}>
              {project.title === "Nonna's Table" ? 'View Case Study' : 'View Project'}
            </button>
          </div>
        )}

        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content Section - More spacious layout */}
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
            {project.categories.length > 3 && (
              <span className="text-humble-purple-400/60 text-sm font-medium uppercase tracking-wide">
                +{project.categories.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-semibold mb-4 text-white leading-tight ${
          featured ? 'text-2xl lg:text-3xl' : 'text-lg'
        }`}>
          {project.title}
        </h3>

        {/* Description - More width and better spacing */}
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
            {project.technologies.length > (featured ? 6 : 4) && (
              <span className={`px-3 py-1 bg-humble-gray-700 text-white/60 rounded-lg ${
                featured ? 'text-sm' : 'text-xs'
              }`}>
                +{project.technologies.length - (featured ? 6 : 4)}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {project.build_time && (
            <div className={`flex items-center gap-2 text-humble-blue-400 ${
              featured ? 'text-base' : 'text-sm'
            }`}>
              <Clock className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
              <span>{project.build_time}</span>
            </div>
          )}

          {!project.is_coming_soon && project.link && project.title !== "Nonna's Table" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors ${
                featured ? 'text-lg' : 'text-sm'
              }`}
              onClick={handleLinkClick}
            >
              View Site
              <ExternalLink className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
            </a>
          )}

          {!project.is_coming_soon && project.title === "Nonna's Table" && (
            <a
              href="https://nonnas-table.humblestudio.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors ${
                featured ? 'text-lg' : 'text-sm'
              }`}
              onClick={handleLinkClick}
            >
              View Live Site
              <ExternalLink className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolioCard;
