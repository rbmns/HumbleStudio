
import React from "react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

interface LoadingViewProps {
  slug?: string;
}

const LoadingView: React.FC<LoadingViewProps> = ({ slug }) => (
  <div className="min-h-screen bg-humble-navy relative">
    <StarBackground />
    <Navbar />
    <div className="relative pt-24 pb-16 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-xl mb-4">Loading case study...</div>
        <div className="text-sm text-white/60">Slug: {slug || "No slug provided"}</div>
      </div>
    </div>
  </div>
);

export default LoadingView;
