
import React, { useEffect, useCallback, useState } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '../ui/dialog';

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  } | null;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
      setImageLoaded(false);
    }
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

  if (!project) return null;

  const currentMedia = project.media[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] bg-humble-charcoal border-humble-charcoal/50 p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-humble-charcoal/30">
            <div>
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <span className="text-humble-purple-400 text-sm">{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Image Section */}
            <div className="flex-1 relative bg-humble-charcoal/30">
              {currentMedia && (
                <>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-humble-pink-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {currentMedia.media_type === 'video' ? (
                    <video
                      src={currentMedia.media_url}
                      controls
                      className="w-full h-full object-contain"
                      onLoadedData={() => setImageLoaded(true)}
                    />
                  ) : (
                    <img
                      src={currentMedia.media_url}
                      alt={currentMedia.alt_text || project.title}
                      className={`w-full h-full object-contain transition-opacity ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                </>
              )}

              {/* Navigation */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setImageLoaded(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {project.media.length}
                  </div>
                </>
              )}
            </div>

            {/* Info Panel */}
            <div className="w-80 p-6 overflow-y-auto bg-humble-charcoal/50">
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform w-fit text-sm"
                >
                  View Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewModal;
