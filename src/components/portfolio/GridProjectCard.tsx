
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FastImage from './FastImage';

// Replicating interface from PortfolioGridOptimized
interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  categories: string[];
  link?: string;
  is_featured: boolean;
  is_coming_soon: boolean;
  technologies: string[];
  build_time?: string;
  media: PortfolioMedia[];
}

interface PortfolioMedia {
  id: string;
  media_url: string;
  alt_text?: string;
  is_primary: boolean;
  media_type: string;
  display_order: number;
}

interface GridProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const GridProjectCard: React.FC<GridProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (project.is_coming_soon) return;
    let slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    
    // This logic is brittle and should be replaced with a slug from the DB in the future
    if (project.title.toLowerCase().includes("nonna's table") || project.title.toLowerCase().includes("nonnas table")) {
      slug = 'nonnas-table';
    } else if (project.title.toLowerCase().includes("digital") && project.title.toLowerCase().includes("cv")) {
      slug = 'digital-cv';
    }
    
    navigate(`/work/${slug}`);
  };

  const primaryImage = project.media?.find(m => m.is_primary)?.media_url || project.media?.[0]?.media_url || '';

  return (
    <div 
      className="cursor-pointer group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleCardClick}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-humble-charcoal">
        <FastImage
          src={primaryImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="font-space-grotesk text-2xl font-bold text-white text-center p-4">
            {project.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GridProjectCard;
