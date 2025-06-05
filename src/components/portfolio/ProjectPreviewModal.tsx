
import React, { useEffect, useCallback, useState } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    categories: string[]; // Changed from category to categories array
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
  } | null;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Preload adjacent images
  useEffect(() => {
    if (!project || !isOpen) return;

    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = currentImageIndex < project.media.length - 1 ? currentImageIndex + 1 : 0;
    const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : project.media.length - 1;

    if (project.media[nextIndex]) {
      preloadImage(project.media[nextIndex].media_url);
    }
    if (project.media[prevIndex] && prevIndex !== nextIndex) {
      preloadImage(project.media[prevIndex].media_url);
    }
  }, [currentImageIndex, project, isOpen]);

  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
      setImageLoaded(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  const handleNext = useCallback(() => {
    if (project && project.media.length > 1) {
      setCurrentImageIndex((prev) => 
        prev < project.media.length - 1 ? prev + 1 : 0
      );
      setImageLoaded(false);
    }
  }, [project]);

  const handlePrev = useCallback(() => {
    if (project && project.media.length > 1) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : project.media.length - 1
      );
      setImageLoaded(false);
    }
  }, [project]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  }, [touchStart, touchEnd, handleNext, handlePrev]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  }, [isOpen, onClose, handlePrev, handleNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!project || !isOpen) return null;

  const currentMedia = project.media[currentImageIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-humble-charcoal/90 backdrop-blur-sm shrink-0">
        <div className="min-w-0 flex-1 mr-4">
          <h2 className="text-lg font-semibold text-white truncate">{project.title}</h2>
          <div className="flex flex-wrap gap-1">
            {project.categories.slice(0, 2).map((category, index) => (
              <span key={index} className="text-humble-purple-400 text-sm">
                {category}
                {index < Math.min(project.categories.length - 1, 1) && ','}
              </span>
            ))}
            {project.categories.length > 2 && (
              <span className="text-humble-purple-400/60 text-sm">
                +{project.categories.length - 2}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div 
          className="flex-1 relative bg-black min-h-[50vh] md:min-h-0 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentMedia && (
            <>
              {currentMedia.media_type === 'video' ? (
                <video
                  src={currentMedia.media_url}
                  controls
                  className="max-w-full max-h-full object-contain"
                  onLoadedData={() => setImageLoaded(true)}
                />
              ) : (
                <OptimizedImage
                  src={currentMedia.media_url}
                  alt={currentMedia.alt_text || project.title}
                  className={`max-w-full max-h-full object-contain transition-opacity ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority={true}
                />
              )}
            </>
          )}

          {/* Navigation */}
          {project.media.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image indicators - Smaller size */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setImageLoaded(false);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors touch-manipulation ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {project.media.length}
              </div>
            </>
          )}
        </div>

        {/* Info Panel */}
        <div className="w-full md:w-80 p-4 md:p-6 overflow-y-auto bg-humble-charcoal/50 shrink-0">
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-humble-purple-500/20 text-humble-purple-300 rounded text-xs"
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
              <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
              <ul className="space-y-2">
                {project.key_features.map((feature, index) => (
                  <li key={index} className="text-white/70 flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-humble-pink-500 rounded-full flex-shrink-0 mt-2"></div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-4 py-3 rounded-full font-medium hover:scale-105 transition-transform w-fit text-sm touch-manipulation"
            >
              View Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewModal;
