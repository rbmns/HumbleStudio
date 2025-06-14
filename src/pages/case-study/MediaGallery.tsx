
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  media: {
    id: string;
    media_url: string;
    alt_text?: string;
    caption?: string;
  }[];
}

const MediaGallery: React.FC<Props> = ({ media }) =>
  media && media.length > 0 ? (
    <section className="py-24 bg-humble-charcoal/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Project Gallery</h2>
          <div className="flex flex-col gap-16">
            {media.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={item.media_url}
                        alt={item.alt_text || "Project image"}
                        className="w-full h-full object-cover rounded-xl shadow-lg max-h-72 md:max-h-96"
                      />
                    </AspectRatio>
                  </div>
                  {item.caption && (
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-base md:text-lg text-white/80 text-center md:text-left">{item.caption}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  ) : null;

export default MediaGallery;

