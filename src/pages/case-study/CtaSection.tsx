
import React from "react";

interface Props {
  heading?: string;
  description?: string;
  buttonText: string;
  onClick: () => void;
}

const CtaSection: React.FC<Props> = ({
  heading,
  description,
  buttonText,
  onClick,
}) => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {heading || "Ready to Start Your Project?"}
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          {description || "Let's create something amazing together."}
        </p>
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium text-lg hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
        >
          {buttonText}
        </button>
      </div>
    </div>
  </section>
);

export default CtaSection;
