"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface EventImagesProps {
  images: string[];
}

export default function EventImages({ images }: EventImagesProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const showNextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-md"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={src}
                alt={`Event Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No images available.</p>
      )}

      {/* Fullscreen Dialog Overlay */}
      <Dialog open={currentIndex !== null} onOpenChange={() => setCurrentIndex(null)}>
        <DialogContent className="max-w-full max-h-full bg-black p-0">
          <div className="relative w-full h-screen flex items-center justify-center">
            {currentIndex !== null && (
              <>
                {/* Fullscreen Image */}
                <Image
                  src={images[currentIndex]}
                  alt={`Fullscreen image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="bg-black"
                />

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white z-10"
                  onClick={() => setCurrentIndex(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Prev Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10"
                  onClick={showPrevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                {/* Next Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10"
                  onClick={showNextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
