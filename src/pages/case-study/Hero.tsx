
import React from "react";
import { User, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  client_name?: string;
  project_duration?: string;
  hero_image_url?: string;
  live_site_url?: string;
}

const Hero: React.FC<Props> = ({
  title,
  subtitle,
  description,
  client_name,
  project_duration,
  hero_image_url,
  live_site_url,
}) => {
  return (
    <section className="pt-8 pb-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk leading-tight">
                {title}
              </h1>
              
              {subtitle && (
                <p className="text-xl md:text-2xl text-humble-purple-300 mb-6">
                  {subtitle}
                </p>
              )}
              
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {description}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {client_name && (
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-humble-purple-400" />
                    <div>
                      <p className="text-white/60 text-sm">Client</p>
                      <p className="text-white">{client_name}</p>
                    </div>
                  </div>
                )}
                
                {project_duration && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-humble-purple-400" />
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white/60 text-sm">Duration</p>
                        <p className="text-white">{project_duration}</p>
                      </div>
                      {live_site_url && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2 border-humble-pink-500 text-humble-pink-400 hover:bg-humble-pink-500/10"
                        >
                          <a
                            href={live_site_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live site"
                          >
                            Live Site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Hero Image - Made smaller */}
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={hero_image_url || '/placeholder.svg'}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
