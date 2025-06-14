
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
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-humble-purple-500/10 overflow-hidden flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={item.media_url}
                        alt={item.alt_text || "Project image"}
                        className="w-full h-full object-cover"
                      />
                      {item.caption && (
                        <div
                          className="
                            hidden md:flex
                            absolute bottom-0 left-0 w-full
                            bg-gradient-to-t from-black/70 via-black/20 to-transparent
                            backdrop-blur-sm
                            px-8 py-4
                          "
                        >
                          <span className="text-base md:text-lg text-white/95 font-medium drop-shadow">
                            {item.caption}
                          </span>
                        </div>
                      )}
                    </AspectRatio>
                  </div>
                  {/* Mobile - caption below image */}
                  {item.caption && (
                    <div className="block md:hidden px-6 py-4 bg-black/60 backdrop-blur-sm rounded-b-2xl mt-[-0.5rem]">
                      <span className="text-base text-white/90 font-medium">{item.caption}</span>
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
