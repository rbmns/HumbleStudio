"use client";

import { useState } from "react";
import Image from "next/image"; // Optional: use if you're using Next.js
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Project = {
  title: string;
  thumbnail: string;
  large: string;
};

const projects: Project[] = [
  {
    title: "Shen Taxi and Tours",
    thumbnail: "/images/shen-thumb.jpg",
    large: "/images/shen-full.jpg",
  },
  {
    title: "Another Project",
    thumbnail: "/images/another-thumb.jpg",
    large: "/images/another-full.jpg",
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClick = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              onClick={() => handleClick(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white text-sm p-2 text-center">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
            {selected && (
              <img
                src={selected.large}
                alt={selected.title}
                className="w-full h-auto object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
