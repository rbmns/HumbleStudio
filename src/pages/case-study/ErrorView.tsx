
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

interface ErrorViewProps {
  error: string;
  slug?: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ error, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-humble-navy relative">
      <StarBackground />
      <Navbar />
      <div className="relative pt-24 pb-16 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-xl mb-4">{error}</div>
          <div className="text-sm text-white/60 mb-6">Slug: {slug || "No slug provided"}</div>
          <button
            onClick={() => navigate("/work")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorView;
