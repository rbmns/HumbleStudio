
import React from 'react';

interface PortfolioCardContentProps {
  categories: string[];
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

const PortfolioCardContent: React.FC<PortfolioCardContentProps> = ({
  categories,
  title,
  description,
  technologies,
  featured = false
}) => {
  return (
    <>
      {/* Categories */}
      <div className="mb-3">
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 3).map((category, index) => (
            <span key={index} className="text-humble-purple-400 text-sm font-medium uppercase tracking-wide">
              {category}
              {index < Math.min(categories.length - 1, 2) && ','}
            </span>
          ))}
          {categories.length > 3 && (
            <span className="text-humble-purple-400/60 text-sm font-medium uppercase tracking-wide">
              +{categories.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-semibold mb-4 text-white leading-tight ${
        featured ? 'text-2xl lg:text-3xl' : 'text-lg'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-white/80 leading-relaxed mb-6 ${
        featured ? 'text-lg lg:text-xl' : 'text-base'
      }`}>
        {description}
      </p>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, featured ? 6 : 4).map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded-lg ${
                featured ? 'text-sm' : 'text-xs'
              }`}
            >
              {tech}
            </span>
          ))}
          {technologies.length > (featured ? 6 : 4) && (
            <span className={`px-3 py-1 bg-humble-gray-700 text-white/60 rounded-lg ${
              featured ? 'text-sm' : 'text-xs'
            }`}>
              +{technologies.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default PortfolioCardContent;
