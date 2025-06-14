
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FastImage from './FastImage';
import { ArrowRight } from 'lucide-react';

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
  id:string;
  media_url: string;
  alt_text?: string;
  is_primary: boolean;
  media_type: string;
  display_order: number;
}


interface FeaturedProjectCardProps {
  project: PortfolioProject;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
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
      className="w-full mb-16 md:mb-24 cursor-pointer group animate-fade-in"
      onClick={handleCardClick}
    >
      <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-humble-charcoal">
        <FastImage
          src={primaryImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="mt-6 md:mt-8">
        <h3 className="font-space-grotesk text-3xl md:text-5xl font-bold text-white group-hover:text-humble-purple-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-inter text-lg md:text-xl text-gray-300 mt-3 md:mt-4 max-w-3xl">
          {project.description}
        </p>
        <div className="inline-flex items-center gap-2 text-lg font-semibold text-humble-blue-500 mt-4 group-hover:text-humble-pink-500 transition-colors duration-300">
            <span>View Case Study</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
