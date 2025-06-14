
import React from "react";

interface Props {
  technologies: string[];
}

const Technologies: React.FC<Props> = ({ technologies }) =>
  technologies && technologies.length > 0 ? (
    <section className="py-24 bg-humble-charcoal/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 border border-humble-purple-500/30 rounded-lg text-white font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;

export default Technologies;
