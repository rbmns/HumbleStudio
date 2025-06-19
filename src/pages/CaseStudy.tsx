
import React from "react";
import { useParams } from "react-router-dom";
import { useCaseStudy } from "./case-study/useCaseStudy";
import LoadingView from "./case-study/LoadingView";
import ErrorView from "./case-study/ErrorView";
import Hero from "./case-study/Hero";
import ChallengeSection from "./case-study/ChallengeSection";
import SolutionSection from "./case-study/SolutionSection";
import KeyFeatures from "./case-study/KeyFeatures";
import ImpactSection from "./case-study/ImpactSection";
import MediaGallery from "./case-study/MediaGallery";
import Contact from "@/components/Contact";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { caseStudy, media, loading, error } = useCaseStudy(slug);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <LoadingView slug={slug} />;
  if (error || !caseStudy) return <ErrorView error={error || "Case study not found"} slug={slug} />;

  return (
    <div className="min-h-screen bg-humble-navy text-white relative">
      <StarBackground />
      <Navbar />
      
      <Hero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        description={caseStudy.description}
        client_name={caseStudy.client_name}
        project_duration={caseStudy.project_duration}
        hero_image_url={caseStudy.hero_image_url}
        live_site_url={caseStudy.live_site_url}
      />
      <ChallengeSection heading={caseStudy.challenge_heading} content={caseStudy.challenge_content} />
      <SolutionSection heading={caseStudy.solution_heading} content={caseStudy.solution_content} />
      <KeyFeatures features={caseStudy.key_features} />
      <ImpactSection heading={caseStudy.impact_heading} content={caseStudy.impact_content} />
      <MediaGallery media={media} />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default CaseStudy;
