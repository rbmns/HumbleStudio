
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
  objectFit?: 'cover' | 'contain';
}

const getOptimizedSrc = (originalSrc: string | undefined, width: number, height: number, quality: number) => {
  if (!originalSrc) {
    // Return a placeholder image from Unsplash if no src provided
    return `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=${width}&h=${height}&fit=crop&q=${quality}&auto=format&fm=webp`;
  }
  
  if (!originalSrc.includes('supabase.co/storage')) {
    return originalSrc;
  }
  
  try {
    const url = new URL(originalSrc);
    // Don't add transform params if an explicit transform is already there.
    if(url.searchParams.has('transform')) return originalSrc;

    // For Supabase storage, use transform endpoint for better optimization
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.findIndex(part => part === 'object');
    if (bucketIndex !== -1 && pathParts[bucketIndex + 1] === 'public') {
      // Construct transform URL for better compression
      const bucketName = pathParts[bucketIndex + 2];
      const objectPath = pathParts.slice(bucketIndex + 3).join('/');
      const baseUrl = `${url.origin}/storage/v1/object/public/${bucketName}`;
      return `${baseUrl}/${objectPath}?width=${width}&height=${height}&resize=cover&quality=${quality}&format=webp`;
    }

    url.searchParams.set('width', String(width));
    url.searchParams.set('height', String(height));
    url.searchParams.set('resize', 'cover');
    url.searchParams.set('quality', String(quality));
    url.searchParams.set('format', 'webp');
    return url.toString();
  } catch (e) {
    console.error("Invalid URL for image optimization:", originalSrc);
    return originalSrc;
  }
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onClick,
  onLoad,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Start loading when image is 200px away from viewport
      }
    );
    
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleError = () => {
    setHasError(true);
  };
  
  const lqipHeight = Math.round(20 * (height / width)) || 15;
  const lqipSrc = getOptimizedSrc(src, 20, lqipHeight, 10);
  const highResSrc = getOptimizedSrc(src, width, height, 85);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden bg-humble-charcoal/40 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* LQIP Background */}
      <img
        src={lqipSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-${objectFit} transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ filter: 'blur(10px)', transform: 'scale(1.05)' }}
        decoding="async"
        loading="lazy"
      />
      
      {/* High-res Image */}
      {isInView && !hasError && (
        <img
          src={highResSrc}
          alt={alt}
          className={`relative w-full h-full object-${objectFit} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          width={width}
          height={height}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-humble-charcoal/60 flex items-center justify-center">
          <div className="text-white/40 text-sm">Image unavailable</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
