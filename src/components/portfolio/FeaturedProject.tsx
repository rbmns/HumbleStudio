
import React, { useState } from 'react';
import { ExternalLink, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    link?: string;
    build_time?: string;
    technologies: string[];
    key_features: string[];
    media: Array<{
      id: string;
      media_url: string;
      alt_text?: string;
      media_type: string;
    }>;
  };
  onImageClick: (mediaIndex: number) => void;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev < project.media.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : project.media.length - 1
    );
  };

  if (!project.media.length) return null;

  return (
    <div className="bg-humble-charcoal rounded-2xl overflow-hidden shadow-2xl mb-16">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Gallery Section */}
        <div className="relative h-96 lg:h-[500px] group">
          <div className="absolute top-4 left-4 bg-humble-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            Featured Project
          </div>
          
          {project.media[currentImageIndex] && (
            <img
              src={project.media[currentImageIndex].media_url}
              alt={project.media[currentImageIndex].alt_text || project.title}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => onImageClick(currentImageIndex)}
            />
          )}

          {/* Navigation overlay */}
          {project.media.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Image indicators */}
          {project.media.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {project.media.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1} / {project.media.length}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-humble-pink-500 text-sm font-medium uppercase tracking-wide">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {project.title}
          </h3>
          
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {project.build_time && (
            <div className="flex items-center gap-2 mb-6 text-humble-blue-400">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Built in {project.build_time}</span>
            </div>
          )}

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-humble-purple-500/20 text-humble-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.key_features.length > 0 && (
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.key_features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="text-white/70 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-humble-pink-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform w-fit"
            >
              View Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
