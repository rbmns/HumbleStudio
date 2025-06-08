
import React, { useCallback } from 'react';
import { ExternalLink, Clock } from 'lucide-react';

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
  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="flex items-center justify-between pt-4 border-t border-white/10">
      {buildTime && (
        <div className={`flex items-center gap-2 text-humble-blue-400 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          <Clock className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
          <span>{buildTime}</span>
        </div>
      )}

      {!isComingSoon && link && projectTitle !== "Nonna's Table" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors ${
            featured ? 'text-lg' : 'text-sm'
          }`}
          onClick={handleLinkClick}
        >
          View Site
          <ExternalLink className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
        </a>
      )}

      {!isComingSoon && projectTitle === "Nonna's Table" && (
        <a
          href="https://nonnas-table.humblestudio.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors ${
            featured ? 'text-lg' : 'text-sm'
          }`}
          onClick={handleLinkClick}
        >
          View Live Site
          <ExternalLink className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
        </a>
      )}
    </div>
  );
};

export default PortfolioCardFooter;
