
import React, { useState, useRef, useEffect } from 'react';

interface SuperFastImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const SuperFastImage: React.FC<SuperFastImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
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
        rootMargin: '100px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Preload image when in view
  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      const img = new Image();
      img.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setHasError(true);
        onError?.();
      };
      img.src = getOptimizedSrc(src);
    }
  }, [isInView, isLoaded, hasError, src, onLoad, onError]);

  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('supabase.co/storage')) {
      // For Supabase images, add transformation parameters
      const url = new URL(originalSrc);
      url.searchParams.set('width', '600');
      url.searchParams.set('height', '400');
      url.searchParams.set('resize', 'cover');
      url.searchParams.set('quality', '85');
      url.searchParams.set('format', 'webp');
      return url.toString();
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-humble-charcoal/20 ${className}`}>
      {/* Loading state */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 bg-humble-charcoal/30 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-humble-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-humble-charcoal/50 flex items-center justify-center">
          <div className="text-white/40 text-xs">Image unavailable</div>
        </div>
      )}

      {/* Placeholder before image loads */}
      {!isInView && (
        <div className="w-full h-full bg-humble-charcoal/20 animate-pulse"></div>
      )}

      {/* Main image */}
      {isInView && isLoaded && (
        <img
          src={optimizedSrc}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />
      )}
    </div>
  );
};

export default SuperFastImage;
