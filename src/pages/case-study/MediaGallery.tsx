
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
                          px-0 py-0
                          items-end
                          rounded-b-2xl
                          z-10
                        "
                        style={{
                          // Brand gradient from pink to purple to blue with blur and semi-opacity
                          background:
                            "linear-gradient(90deg, rgba(255,75,124,0.93) 0%, rgba(183,45,236,0.82) 48%, rgba(52,102,255,0.93) 100%)",
                          backdropFilter: "blur(8px)",
                          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.32), 0 0px 2px 0 rgba(0,0,0,0.16)",
                          padding: "2rem 2.5rem",
                        }}
                      >
                        <span
                          className="text-lg md:text-xl text-white font-bold drop-shadow-[0_3px_8px_rgba(8,8,8,0.5)]"
                          style={{
                            textShadow:
                              "0 3px 18px rgba(0,0,0,0.7), 0 1px 0 rgba(0,0,0,0.28)",
                          }}
                        >
                          {item.caption}
                        </span>
                      </div>
                    )}
                  </AspectRatio>
                </div>
                {/* Mobile - caption below image with accent gradient and blur */}
                {item.caption && (
                  <div
                    className="block md:hidden px-6 py-4 rounded-b-2xl mt-[-0.5rem]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,75,124,0.96) 0%, rgba(183,45,236,0.88) 48%, rgba(52,102,255,0.96) 100%)",
                      backdropFilter: "blur(7px)",
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.22), 0 0px 1px 0 rgba(0,0,0,0.12)",
                    }}
                  >
                    <span
                      className="text-base font-bold text-white leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)]"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.42)",
                      }}
                    >
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

