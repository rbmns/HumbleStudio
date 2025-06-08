
import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

interface PortfolioCardFooterProps {
  buildTime?: string;
  isComingSoon: boolean;
  link?: string;
  projectTitle: string;
  featured?: boolean;
}

const PortfolioCardFooter: React.FC<PortfolioCardFooterProps> = ({
  buildTime,
  isComingSoon,
  link,
  projectTitle,
  featured = false
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`flex items-center justify-between ${featured ? 'mt-8' : 'mt-6'}`}>
      {buildTime && (
        <div className="flex items-center gap-2 text-white/60">
          <Clock className="h-4 w-4" />
          <span className={`${featured ? 'text-base' : 'text-sm'}`}>{buildTime}</span>
        </div>
      )}
      
      {!isComingSoon && link && (
        <button
          onClick={handleLinkClick}
          className={`flex items-center gap-2 text-humble-pink-500 hover:text-humble-pink-400 transition-colors ${
            featured ? 'text-base font-medium' : 'text-sm'
          }`}
        >
          View Live Site
          <ExternalLink className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default PortfolioCardFooter;
