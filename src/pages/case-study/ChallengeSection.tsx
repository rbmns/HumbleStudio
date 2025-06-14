
import React from "react";
import { renderContentWithBullets } from "./renderContentWithBullets";

interface Props {
  heading: string;
  content?: string;
}

const ChallengeSection: React.FC<Props> = ({ heading, content }) =>
  !content ? null : (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{heading}</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed text-lg">
              {renderContentWithBullets(content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default ChallengeSection;
