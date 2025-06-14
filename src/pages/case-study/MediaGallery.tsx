
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  media: {
    id: string;
    media_url: string;
    alt_text?: string;
    caption?: string;
  }[];
}

// Helper component to handle failed images
const SafeImage = ({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [errored, setErrored] = useState(false);
  return errored ? (
    <div className="w-full h-40 flex items-center justify-center bg-gray-900 text-white/60 text-center text-sm">
      [Image failed to load]
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

const MediaGallery: React.FC<Props> = ({ media }) => {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-humble-charcoal/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Project Gallery</h2>
          <div className="flex flex-col gap-12">
            {media.map((item, idx) => {
              // Alternate flex direction for desktop: left (even), right (odd)
              const isEven = idx % 2 === 0;
              const baseFlex =
                "flex flex-col md:flex-row items-center gap-0 md:gap-10";
              const flexDirection = isEven
                ? "md:flex-row"
                : "md:flex-row-reverse";
              const containerClass = `${baseFlex} ${flexDirection}`;

              return (
                <div key={item.id} className={containerClass}>
                  <div
                    className={`
                      group relative overflow-hidden flex-1 w-full max-w-xl min-w-[0]
                      rounded-3xl bg-white/5 border border-humble-purple-500/20
                      shadow-2xl
                      transition-transform duration-300
                      hover:scale-[1.02] hover:shadow-3xl
                      before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none
                    `}
                  >
                    <div className="relative w-full">
                      <AspectRatio ratio={16 / 9}>
                        {item.media_url ? (
                          <SafeImage
                            src={item.media_url}
                            alt={item.alt_text || "Project image"}
                            className="w-full h-full object-cover rounded-3xl"
                            style={{
                              minHeight: "180px",
                              background: "#111729",
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-40 bg-gray-800 text-white/70">
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
                              rounded-b-3xl
                              z-10
                              pointer-events-none
                            "
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(255,75,124,0.60) 0%, rgba(183,45,236,0.46) 48%, rgba(52,102,255,0.60) 100%)",
                              backdropFilter: "blur(10px)",
                              boxShadow: "0 4px 28px 0 rgba(0,0,0,0.34), 0 0px 2px 0 rgba(0,0,0,0.13)",
                              padding: "1.25rem 2rem",
                            }}
                          >
                            <span
                              className="text-base md:text-lg text-white font-bold drop-shadow-[0_4px_16px_rgba(8,8,8,0.66)]"
                              style={{
                                textShadow:
                                  "0 4px 18px rgba(0,0,0,0.75), 0 2px 0 rgba(0,0,0,0.28)",
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
                        className="block md:hidden px-4 py-3 rounded-b-3xl mt-[-0.5rem]"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,75,124,0.62) 0%, rgba(183,45,236,0.54) 48%, rgba(52,102,255,0.62) 100%)",
                          backdropFilter: "blur(8px)",
                          boxShadow: "0 2px 14px 0 rgba(0,0,0,0.27), 0 0px 1px 0 rgba(0,0,0,0.12)",
                        }}
                      >
                        <span
                          className="text-sm font-bold text-white leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.39)]"
                          style={{
                            textShadow: "0 1.5px 8px rgba(0,0,0,0.49)",
                          }}
                        >
                          {item.caption}
                        </span>
                      </div>
                    )}
                  </div>
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

