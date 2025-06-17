
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
                "flex flex-col md:flex-row items-start gap-0 md:gap-10";
              const flexDirection = isEven
                ? "md:flex-row"
                : "md:flex-row-reverse";
              const containerClass = `${baseFlex} ${flexDirection}`;

              return (
                <div key={item.id} className={containerClass}>
                  {/* Image Container */}
                  <div className="flex-1 w-full max-w-xl min-w-[0]">
                    <div
                      className={`
                        group relative overflow-hidden
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
                        </AspectRatio>
                      </div>
                    </div>
                  </div>

                  {/* Caption Card - Only show if caption exists */}
                  {item.caption && (
                    <div className="flex-1 w-full max-w-xl min-w-[0] mt-4 md:mt-0">
                      <div className="bg-humble-charcoal/50 border border-humble-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                        <p className="text-white text-base md:text-lg leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
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
