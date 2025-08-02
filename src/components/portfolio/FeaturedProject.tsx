
import React, { useState, useCallback } from 'react';
import { ExternalLink, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

interface FeaturedProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    link?: string;
    build_time?: string;
    technologies: string[];
    key_features: string[];
    slug?: string;
    is_coming_soon?: boolean;
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (project.is_coming_soon) return;
    
    console.log('FeaturedProject handleCardClick for:', project.title, 'with slug:', project.slug);
    
    // Always navigate to /work/slug format
    if (project.slug) {
      console.log(`Navigating to /work/${project.slug}`);
      navigate(`/work/${project.slug}`);
    } else {
      // Fallback slug generation
      const slug = project.title.toLowerCase().replace(/\s+/g, '-');
      console.log(`Navigating to /work/${slug} (generated slug)`);
      navigate(`/work/${slug}`);
    }
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev < project.media.length - 1 ? prev + 1 : 0
    );
  }, [project.media.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : project.media.length - 1
    );
  }, [project.media.length]);

  const handleImageClick = useCallback(() => {
    onImageClick(project.id, currentImageIndex);
  }, [project.id, currentImageIndex, onImageClick]);

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

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

    if (isLeftSwipe && project.media.length > 1) {
      nextImage();
    }
    if (isRightSwipe && project.media.length > 1) {
      prevImage();
    }
  }, [touchStart, touchEnd, nextImage, prevImage, project.media.length]);

  if (!project.media.length) return null;

  return (
    <div className="bg-humble-charcoal rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Gallery Section */}
        <div 
          className="relative h-96 lg:h-[400px] group bg-humble-charcoal/50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-4 left-4 bg-humble-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            Featured Project
          </div>
          
          {project.media[currentImageIndex] && (
            <div className="relative w-full h-full">
              <OptimizedImage
                src={project.media[currentImageIndex].media_url}
                alt={project.media[currentImageIndex].alt_text || project.title}
                width={600}
                height={450}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 select-none ${
                  project.is_coming_soon ? 'blur-sm' : ''
                }`}
                priority
                onClick={project.is_coming_soon ? undefined : handleImageClick}
              />
              
              {project.is_coming_soon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="bg-humble-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
                    Coming Soon
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation overlay - hidden on mobile and for coming soon projects */}
          {project.media.length > 1 && !project.is_coming_soon && (
            <div className="absolute inset-0 items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Image indicators - optimized for mobile and hidden for coming soon */}
          {project.media.length > 1 && !project.is_coming_soon && (
            <>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {project.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors touch-manipulation ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {project.media.length}
                <span className="sm:hidden ml-1 text-xs">• Swipe</span>
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          
          <p className="text-white/80 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {project.build_time && !project.is_coming_soon && (
            <div className="flex items-center gap-2 mb-4 text-humble-blue-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Built in {project.build_time}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {!project.is_coming_soon ? (
              <>
                <button
                  onClick={handleCardClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Case Study
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 font-medium text-sm hover:text-white transition-colors"
                  >
                    Live Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </>
            ) : (
              <div className="text-white/60 font-medium text-sm">
                Project details coming soon...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturedProject.displayName = 'FeaturedProject';

export default FeaturedProject;
