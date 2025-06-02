
import React, { useState, useCallback } from 'react';
import { ExternalLink, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    link?: string;
    build_time?: string;
    technologies: string[];
    key_features: string[];
    is_coming_soon: boolean;
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
    }>;
  };
  onImageClick: (projectId: string, mediaIndex: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, onImageClick }) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const primaryImage = project.media[0];
  const displayImage = project.media[hoveredImageIndex] || primaryImage;

  const handleImageClick = useCallback(() => {
    if (!project.is_coming_soon) {
      onImageClick(project.id, hoveredImageIndex);
    }
  }, [project.is_coming_soon, project.id, hoveredImageIndex, onImageClick]);

  const handleImageHover = useCallback((index: number) => {
    setHoveredImageIndex(index);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-humble-charcoal/50">
        {displayImage && (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-humble-charcoal/50 animate-pulse flex items-center justify-center">
                <div className="text-white/50 text-sm">Loading...</div>
              </div>
            )}
            <img
              src={displayImage.media_url}
              alt={displayImage.alt_text || project.title}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={handleImageClick}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </>
        )}

        {project.is_coming_soon && (
          <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/80">
            <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Coming Soon
            </div>
          </div>
        )}

        {/* Image thumbnails on hover */}
        {project.media.length > 1 && !project.is_coming_soon && (
          <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.media.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onMouseEnter={() => handleImageHover(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === hoveredImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
            {project.media.length > 4 && (
              <span className="text-white text-xs ml-1">+{project.media.length - 4}</span>
            )}
          </div>
        )}

        {project.media.length > 1 && !project.is_coming_soon && (
          <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {project.media.length} images
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-humble-purple-400 text-xs font-medium uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-white line-clamp-2">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
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
            >
              View Site
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
