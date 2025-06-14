
import React from "react";

interface Props {
  features: string[];
}

const KeyFeatures: React.FC<Props> = ({ features }) =>
  features && features.length > 0 ? (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-humble-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;

export default KeyFeatures;
