
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {media.map((item) => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden bg-humble-charcoal/50 border border-white/10"
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={item.media_url}
                    alt={item.alt_text || 'Project image'}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                {item.caption && (
                  <div className="p-4">
                    <p className="text-white/70 text-sm">{item.caption}</p>
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

