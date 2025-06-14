
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Project Gallery</h2>
          <div className="flex flex-col gap-16">
            {media.map((item) => (
              <div key={item.id} className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={item.media_url}
                    alt={item.alt_text || "Project image"}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </AspectRatio>
                {item.caption && (
                  <div className="mt-4 px-2">
                    <p className="text-lg text-white/80">{item.caption}</p>
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

