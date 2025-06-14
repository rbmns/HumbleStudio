
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

              // Card effect + responsive
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center md:items-stretch gap-0 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-humble-purple-500/10 overflow-hidden ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 flex items-center justify-center px-0 md:px-2 py-8 md:py-10">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={item.media_url}
                        alt={item.alt_text || "Project image"}
                        className="w-full h-full object-cover rounded-xl shadow-lg max-h-72 md:max-h-96"
                      />
                    </AspectRatio>
                  </div>
                  {item.caption && (
                    <div
                      className={
                        "flex-1 flex items-center justify-center px-6 md:px-10 py-8 md:py-4 " +
                        (isEven
                          ? "border-l-4 border-humble-pink-500"
                          : "md:border-r-4 md:border-l-0 border-humble-purple-500")
                      }
                      style={
                        isEven
                          ? { borderLeftWidth: 4 }
                          : { borderRightWidth: 4, borderLeftWidth: 0 }
                      }
                    >
                      <p
                        className={`text-base md:text-lg text-white/90 text-center md:text-left w-full`}
                        style={{
                          // Add faint highlight to visually separate the caption
                          background:
                            "linear-gradient(90deg, rgba(255,75,124,0.12) 0%, rgba(183,45,236,0.12) 100%)",
                          borderRadius: "0.75rem",
                          padding: "1.5rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.caption}
                      </p>
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
