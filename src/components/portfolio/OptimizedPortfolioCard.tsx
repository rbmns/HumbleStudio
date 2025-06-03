
import React, { useState, useCallback } from 'react';
import { ExternalLink, Clock, Eye } from 'lucide-react';

interface OptimizedPortfolioCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
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
  onPreview: (project: any) => void;
}

const OptimizedPortfolioCard: React.FC<OptimizedPortfolioCardProps> = ({ project, onPreview }) => {
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

  const handlePreview = useCallback(() => {
    if (!project.is_coming_soon) {
      onPreview(project);
    }
  }, [project, onPreview]);

  return (
    <div className="bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-humble-charcoal/50">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-humble-charcoal/50 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-humble-pink-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {primaryImage && !imageError ? (
          <img
            src={primaryImage.media_url}
            alt={primaryImage.alt_text || project.title}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        ) : imageError ? (
          <div className="w-full h-full bg-humble-charcoal/80 flex items-center justify-center">
            <div className="text-white/50 text-sm">Image unavailable</div>
          </div>
        ) : null}

        {/* Coming Soon Overlay */}
        {project.is_coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/90">
            <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Coming Soon
            </div>
          </div>
        )}

        {/* Preview Button Overlay */}
        {!project.is_coming_soon && project.media.length > 0 && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={handlePreview}
              className="bg-white/90 hover:bg-white text-humble-charcoal px-4 py-2 rounded-full font-medium flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform"
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
          </div>
        )}

        {/* Media Count */}
        {project.media.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
            {project.media.length} images
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-humble-purple-400 text-xs font-medium uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-humble-gray-700 text-white/60 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          {project.build_time && (
            <div className="flex items-center gap-1 text-humble-blue-400 text-xs">
              <Clock className="h-3 w-3" />
              <span>{project.build_time}</span>
            </div>
          )}

          {!project.is_coming_soon && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-humble-pink-500 hover:text-humble-pink-400 text-sm font-medium flex items-center gap-1 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Site
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptimizedPortfolioCard;
