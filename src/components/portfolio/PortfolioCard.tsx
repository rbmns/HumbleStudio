
import React from 'react';
import { ArrowRight, ExternalLink, Hourglass } from 'lucide-react';
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

const CARD_HEIGHT = "h-[430px] md:h-[430px]";
const CARD_WIDTH = "max-w-[370px] w-full";

const PortfolioCard = ({ project, onClick, featured }: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    let slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    if (
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

  // --- "Coming Soon" Card: Identical max-width and structure as regular cards ---
  if (project.is_coming_soon) {
    return (
      <div className={`${CARD_WIDTH} h-full flex`}>
        <div
          className={`bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-humble-purple-400/30 overflow-hidden group flex flex-col shadow-lg ${CARD_HEIGHT} w-full`}
          tabIndex={0}
          aria-label={`${project.title} (Coming Soon)`}
        >
          {/* Placeholder image box for same aspect ratio */}
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-humble-charcoal/60 to-humble-purple-500/10 flex items-center justify-center relative flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-humble-charcoal/60 animate-pulse" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <Hourglass className="w-10 h-10 text-humble-purple-400 mb-3 animate-float" />
              <span className="text-white/70 text-base font-semibold mb-1 animate-fade-in">Coming Soon</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 h-full">
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {project.description || "We're putting the finishing touches on this project. Check back soon for a detailed look!"}
            </p>
            <div className="mt-auto flex gap-3">
              {/* Disabled button for case study link */}
              <button
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-humble-gray-700 via-humble-charcoal to-humble-purple-900 text-white/50 rounded-lg font-medium text-sm cursor-not-allowed opacity-50"
                disabled
                tabIndex={-1}
                aria-disabled="true"
              >
                Case Study
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Normal / Featured Project Card ---
  return (
    <div className={`${CARD_WIDTH} h-full flex`}>
      <div
        className={`bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col ${CARD_HEIGHT} w-full`}
        onClick={handleCardClick}
      >
        <div className="aspect-[4/3] w-full overflow-hidden relative flex-shrink-0">
          <OptimizedImage
            src={primaryImage}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col flex-1 p-6 h-full">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-humble-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
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
    </div>
  );
};

export default PortfolioCard;
