
import React, { useCallback } from 'react';
import PortfolioCardImage from './PortfolioCardImage';
import PortfolioCardContent from './PortfolioCardContent';
import PortfolioCardFooter from './PortfolioCardFooter';

interface SimplePortfolioCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    categories: string[];
    link?: string;
    build_time?: string;
    technologies: string[];
    is_coming_soon: boolean;
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
    }>;
  };
  onClick: (project: any) => void;
  featured?: boolean;
}

const SimplePortfolioCard: React.FC<SimplePortfolioCardProps> = ({ 
  project, 
  onClick, 
  featured = false 
}) => {
  const primaryImage = project.media[0];

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // Prevent click if it's on a link element
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    
    if (!project.is_coming_soon) {
      console.log('Card clicked for project:', project.title);
      onClick(project);
    }
  }, [project, onClick]);

  const handleImageClick = useCallback(() => {
    if (!project.is_coming_soon) {
      console.log('Image clicked for project:', project.title);
      onClick(project);
    }
  }, [project, onClick]);

  return (
    <div 
      className={`bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
        featured ? 'transform hover:scale-[1.02]' : ''
      }`}
      onClick={handleCardClick}
    >
      <PortfolioCardImage
        src={primaryImage?.media_url || ''}
        alt={primaryImage?.alt_text || project.title}
        className="aspect-[4/3]"
        priority={featured}
        onClick={handleImageClick}
      />

      <div className={`${featured ? 'p-8' : 'p-6'}`}>
        <PortfolioCardContent
          categories={project.categories}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          featured={featured}
        />

        <PortfolioCardFooter
          buildTime={project.build_time}
          isComingSoon={project.is_coming_soon}
          link={project.link}
          projectTitle={project.title}
          featured={featured}
        />
      </div>
    </div>
  );
};

export default SimplePortfolioCard;
