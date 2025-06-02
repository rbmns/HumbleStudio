
import React, { useState, useCallback } from 'react';
import { ExternalLink, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    link?: string;
    build_time?: string;
    technologies: string[];
    key_features: string[];
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
    }>;
  };
  onImageClick: (projectId: string, mediaIndex: number) => void;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = React.memo(({ project, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev < project.media.length - 1 ? prev + 1 : 0
    );
    setImageLoaded(false);
  }, [project.media.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : project.media.length - 1
    );
    setImageLoaded(false);
  }, [project.media.length]);

  const handleImageClick = useCallback(() => {
    onImageClick(project.id, currentImageIndex);
  }, [project.id, currentImageIndex, onImageClick]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setImageLoaded(false);
  }, []);

  if (!project.media.length) return null;

  return (
    <div className="bg-humble-charcoal rounded-2xl overflow-hidden shadow-2xl mb-16">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Gallery Section */}
        <div className="relative h-96 lg:h-[400px] group bg-humble-charcoal/50">
          <div className="absolute top-4 left-4 bg-humble-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            Featured Project
          </div>
          
          {project.media[currentImageIndex] && (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-humble-charcoal/50 animate-pulse flex items-center justify-center">
                  <div className="text-white/50">Loading...</div>
                </div>
              )}
              <img
                src={project.media[currentImageIndex].media_url}
                alt={project.media[currentImageIndex].alt_text || project.title}
                className={`w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleImageClick}
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </>
          )}

          {/* Navigation overlay */}
          {project.media.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Image indicators */}
          {project.media.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {project.media.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1} / {project.media.length}
            </div>
          )}
        </div>

        {/* Content Section - Made more compact */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-humble-pink-500 text-sm font-medium uppercase tracking-wide">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          
          <p className="text-white/80 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {project.build_time && (
            <div className="flex items-center gap-2 mb-4 text-humble-blue-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Built in {project.build_time}</span>
            </div>
          )}

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div className="mb-5">
              <h4 className="text-white font-semibold mb-2 text-sm">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-humble-purple-500/20 text-humble-purple-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.key_features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
              <ul className="space-y-1.5">
                {project.key_features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-white/70 flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-humble-pink-500 rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-5 py-2.5 rounded-full font-medium hover:scale-105 transition-transform w-fit text-sm"
            >
              View Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

FeaturedProject.displayName = 'FeaturedProject';

export default FeaturedProject;
