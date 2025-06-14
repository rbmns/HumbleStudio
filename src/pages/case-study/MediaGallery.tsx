
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
            {media.map((item) => (
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
                    {/* Always show caption overlay at bottom (desktop & tablet), never above image */}
                    {item.caption && (
                      <div
                        className="
                          hidden md:flex
                          absolute bottom-0 left-0 w-full
                          bg-black/80
                          backdrop-blur-md
                          px-8 py-6
                          items-end
                          rounded-b-2xl
                          z-10
                        "
                        style={{
                          boxShadow:
                            "0 4px 24px 0 rgba(0,0,0,0.32), 0 0px 2px 0 rgba(0,0,0,0.16)",
                        }}
                      >
                        <span
                          className="text-lg text-white font-bold drop-shadow-[0_3px_8px_rgba(8,8,8,0.3)]"
                          style={{
                            textShadow:
                              "0 3px 12px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.2)",
                          }}
                        >
                          {item.caption}
                        </span>
                      </div>
                    )}
                  </AspectRatio>
                </div>
                {/* Mobile - caption below image, more contrast */}
                {item.caption && (
                  <div className="block md:hidden px-5 py-4 bg-black/92 rounded-b-2xl">
                    <span className="text-base font-bold text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]" style={{textShadow:"0 2px 8px rgba(0,0,0,0.38)"}}>
                      {item.caption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;

export default MediaGallery;

