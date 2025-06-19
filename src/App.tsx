import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";
import IntakeForm from "./pages/IntakeForm";
import Inquiry from "./pages/Inquiry";
import BrandDiscoveryForm from "./pages/BrandDiscoveryForm";
import ComingSoon from "./pages/ComingSoon";
import LinkInBio from "./pages/LinkInBio";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import WebsitePackages from "./pages/WebsitePackages";
import About from "./pages/About";
import DigitalCV from "./pages/DigitalCV";
import HireMePage from "./pages/HireMePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/digital-cv" element={<DigitalCV />} />
          <Route path="/hire-me-page" element={<HireMePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/brand-discovery-form" element={<BrandDiscoveryForm />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
          <Route path="/website-packages" element={<WebsitePackages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
