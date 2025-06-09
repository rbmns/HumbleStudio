
import React, { useState, useRef, useEffect } from 'react';

interface FastImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const FastImage: React.FC<FastImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Create smaller, optimized image URLs
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('supabase.co/storage')) {
      // For Supabase images, add transformation parameters
      const url = new URL(originalSrc);
      url.searchParams.set('width', '800');
      url.searchParams.set('height', '600');
      url.searchParams.set('resize', 'cover');
      url.searchParams.set('quality', '80');
      return url.toString();
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-humble-charcoal/40 flex items-center justify-center">
          {placeholder ? (
            <div 
              className="w-full h-full bg-cover bg-center blur-sm opacity-30"
              style={{ backgroundImage: `url(${placeholder})` }}
            />
          ) : (
            <div className="w-6 h-6 border-2 border-humble-pink-500 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-humble-charcoal/60 flex items-center justify-center">
          <div className="text-white/40 text-sm">Image unavailable</div>
        </div>
      )}

      {/* Main image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />
      )}
    </div>
  );
};

export default FastImage;
