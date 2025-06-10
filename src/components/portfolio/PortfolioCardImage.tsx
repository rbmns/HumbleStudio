
import React from 'react';
import SuperFastImage from './SuperFastImage';

interface PortfolioCardImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

const PortfolioCardImage: React.FC<PortfolioCardImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  onClick
}) => {
  return (
    <div 
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <SuperFastImage
        src={src}
        alt={alt}
        className="w-full h-full transition-transform duration-300 hover:scale-105"
        priority={priority}
      />
    </div>
  );
};

export default PortfolioCardImage;
