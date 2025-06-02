
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  media: Array<{
    id: string;
    media_url: string;
    alt_text?: string;
    media_type: string;
  }>;
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
  projectTitle: string;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  media,
  currentIndex,
  onNavigate,
  projectTitle
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onNavigate, onClose]);

  if (!isOpen || !media[currentIndex]) return null;

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.media_type === 'video';

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      {media.length > 1 && (
        <>
          <button
            onClick={() => onNavigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => onNavigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Media content */}
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
        {isVideo ? (
          <video
            src={currentMedia.media_url}
            controls
            className="max-w-full max-h-full object-contain"
            autoPlay
          />
        ) : (
          <img
            src={currentMedia.media_url}
            alt={currentMedia.alt_text || projectTitle}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>

      {/* Media info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
        <p className="text-sm font-medium">{projectTitle}</p>
        {media.length > 1 && (
          <p className="text-xs text-white/70">
            {currentIndex + 1} of {media.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
