
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

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
  key_features: string[];
  // If in the future a `subtitle` is available, add here: subtitle?: string
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

const CARD_HEIGHT = "h-[430px] md:h-[430px]"; // adjust if needed for your UI

const PortfolioCard = ({ project, onClick, featured }: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    let slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    if (
      project.title.toLowerCase().includes("nonna's table") ||
      project.title.toLowerCase().includes('nonnas table')
    ) {
      slug = 'nonnas-table';
    } else if (
      project.title.toLowerCase().includes('digital') &&
      (project.title.toLowerCase().includes('cv') ||
        project.title.toLowerCase().includes('resume'))
    ) {
      slug = 'digital-cv';
    }
    navigate(`/work/${slug}`);
  };

  const primaryImage =
    project.media?.find((m) => m.is_primary)?.media_url || project.media?.[0]?.media_url;

  if (project.is_coming_soon) {
    return (
      <div
        className={`bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group flex flex-col ${CARD_HEIGHT}`}
      >
        <div className="aspect-[4/3] bg-humble-charcoal/50 flex items-center justify-center w-full">
          <span className="text-white/60 text-lg font-medium">Coming Soon</span>
        </div>
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            {/* Short Description */}
            <p className="text-white/70 text-sm leading-relaxed mt-2">{project.description}</p>
            {/* {project.subtitle && (
              <p className="text-humble-purple-400 text-sm mb-1">{project.subtitle}</p>
            )} */}
          </div>
          {/* Optionally, you can show a description for coming soon */}
          {/* <p className="text-white/80 text-sm leading-relaxed mt-4">{project.description}</p> */}
          <div className="mt-auto flex flex-col">
            &nbsp;
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col ${CARD_HEIGHT}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden relative flex-shrink-0">
        <OptimizedImage
          src={primaryImage}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Main Info + Buttons */}
      <div className="flex flex-col flex-1 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-humble-purple-400 transition-colors">
            {project.title}
          </h3>
          {/* Short Description */}
          <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
        </div>
        <div className="mt-auto flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit"
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

