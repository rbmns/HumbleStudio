
import React from 'react';
import { ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FastImage from './FastImage';

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

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: (project: PortfolioProject) => void;
  featured: boolean;
}

const PortfolioCard = ({ project, onClick, featured }: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to case study page based on project title
    const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    navigate(`/work/${slug}`);
  };

  const primaryImage = project.media?.find(m => m.is_primary)?.media_url || project.media?.[0]?.media_url || '';
  const category = project.categories?.[0] || 'Project';
  const technologies = project.technologies || [];
  
  // Generate gradient based on category
  const getGradient = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'restaurant':
        return 'from-amber-500 to-orange-600';
      case 'personal brand':
        return 'from-purple-500 to-pink-600';
      case 'web':
        return 'from-blue-500 to-purple-600';
      case 'branding':
        return 'from-pink-500 to-red-600';
      case 'ecommerce':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-humble-pink-500 to-humble-purple-500';
    }
  };

  if (project.is_coming_soon) {
    return (
      <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group">
        <div className="aspect-[4/3] bg-humble-charcoal/50 flex items-center justify-center">
          <span className="text-white/60 text-lg font-medium">Coming Soon</span>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <FastImage
          src={primaryImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Build Time */}
        <div className="flex items-center justify-between">
          <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${getGradient(category)} text-white font-medium text-sm`}>
            {category}
          </span>
          {project.build_time && (
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="h-4 w-4" />
              <span>{project.build_time}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-humble-purple-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
              navigate(`/work/${slug}`);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Case Study
            <ArrowRight className="h-4 w-4" />
          </button>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-humble-charcoal/50 border border-white/20 text-white rounded-lg font-medium text-sm hover:bg-humble-charcoal/70 transition-colors"
            >
              Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
