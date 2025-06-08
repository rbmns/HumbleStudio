
import React, { useState, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';

interface PortfolioCardImageProps {
  primaryImage?: {
    id: string;
    media_url: string;
    alt_text?: string;
    media_type: string;
  };
  projectTitle: string;
  isComingSoon: boolean;
  featured?: boolean;
  onCardClick: (e: React.MouseEvent) => void;
}

const PortfolioCardImage: React.FC<PortfolioCardImageProps> = ({
  primaryImage,
  projectTitle,
  isComingSoon,
  featured = false,
  onCardClick
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-humble-charcoal/50 ${
      featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
    }`}>
      {primaryImage && !imageError ? (
        <OptimizedImage
          src={primaryImage.media_url}
          alt={primaryImage.alt_text || projectTitle}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : imageError ? (
        <div className="w-full h-full bg-humble-charcoal/80 flex items-center justify-center">
          <div className="text-white/50 text-xs">Image unavailable</div>
        </div>
      ) : null}

      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/90">
          <div className="bg-humble-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Coming Soon
          </div>
        </div>
      )}

      {!isComingSoon && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            className={`bg-white/90 hover:bg-white text-humble-charcoal px-4 py-2 rounded-full font-medium ${
              featured ? 'text-lg px-6 py-3' : 'text-sm'
            }`}
            onClick={onCardClick}
          >
            {projectTitle === "Nonna's Table" ? 'View Case Study' : 'View Project'}
          </button>
        </div>
      )}

      {featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
    </div>
  );
};

export default PortfolioCardImage;
