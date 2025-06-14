
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

const MediaGallery: React.FC<Props> = ({ media }) => {
  // DEBUG: log gallery content to browser console for diagnosis
  console.log("[MediaGallery] media array:", media);

  if (!media || media.length === 0) {
    console.log("[MediaGallery] No media to display.");
    return null;
  }

  return (
    <section className="py-16 bg-humble-charcoal/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Project Gallery</h2>
          <div className="flex flex-col gap-8">
            {media.map((item) => {
              // DEBUG: log item and image url
              console.log("[MediaGallery] rendering item:", item);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl border border-humble-purple-500/10 overflow-hidden flex flex-col max-w-2xl mx-auto"
                >
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      {item.media_url ? (
                        <img
                          src={item.media_url}
                          alt={item.alt_text || "Project image"}
                          className="w-full h-full max-h-64 object-cover max-w-full mx-auto"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-48 bg-gray-800 text-white/70">
                          [No Image URL]
                        </div>
                      )}
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
                            background:
                              "linear-gradient(90deg, rgba(255,75,124,0.50) 0%, rgba(183,45,236,0.34) 48%, rgba(52,102,255,0.50) 100%)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.32), 0 0px 2px 0 rgba(0,0,0,0.16)",
                            padding: "1.25rem 2rem",
                          }}
                        >
                          <span
                            className="text-base md:text-lg text-white font-bold drop-shadow-[0_3px_8px_rgba(8,8,8,0.5)]"
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
                  {/* Mobile - caption below image with more transparent accent gradient and blur */}
                  {item.caption && (
                    <div
                      className="block md:hidden px-4 py-3 rounded-b-2xl mt-[-0.5rem]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,75,124,0.59) 0%, rgba(183,45,236,0.45) 48%, rgba(52,102,255,0.59) 100%)",
                        backdropFilter: "blur(7px)",
                        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.22), 0 0px 1px 0 rgba(0,0,0,0.12)",
                      }}
                    >
                      <span
                        className="text-sm font-bold text-white leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)]"
                        style={{
                          textShadow: "0 2px 8px rgba(0,0,0,0.42)",
                        }}
                      >
                        {item.caption}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;

