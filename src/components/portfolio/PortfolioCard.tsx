
import React from 'react';
import { ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FastImage from './FastImage';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  caseStudySlug: string;
  buildTime?: string;
  technologies: string[];
  gradient: string;
}

const PortfolioCard = ({ 
  title, 
  category, 
  description, 
  image, 
  liveUrl, 
  caseStudySlug, 
  buildTime, 
  technologies, 
  gradient 
}: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/work/${caseStudySlug}`);
  };

  return (
    <div 
      className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <FastImage
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Build Time */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white font-medium text-sm`}>
            {category}
          </span>
          {buildTime && (
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="h-4 w-4" />
              <span>{buildTime}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-humble-purple-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
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

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/work/${caseStudySlug}`);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex-1"
          >
            Case Study
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 bg-humble-charcoal/50 border border-white/20 text-white rounded-lg font-medium text-sm hover:bg-humble-charcoal/70 transition-colors"
          >
            Live Site
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
