import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
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
import HireMePageStart from "./pages/HireMePageStart";
import HireMePageThanksStep2 from "./pages/HireMePageThanksStep2";
import HireMePageIntake from "./pages/HireMePageIntake";
import DigitalBusinessCardIntake from "./pages/DigitalBusinessCardIntake";

const queryClient = new QueryClient();

// GTM initialization function
const initializeGTM = () => {
  const gtmId = 'GTM-WKLFDVVQ'; // Replace with your actual GTM container ID
  
  // GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);

  // GTM noscript fallback
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.prepend(noscript);
};

const App = () => {
  useEffect(() => {
    initializeGTM();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/hire-me-page" element={<DigitalCV />} />
            <Route path="/hire-me-page/start" element={<HireMePageStart />} />
            <Route path="/hire-me-page/thanks-step-2" element={<HireMePageThanksStep2 />} />
            <Route path="/hire-me-page/intake" element={<HireMePageIntake />} />
            <Route path="/digital-business-card/intake" element={<DigitalBusinessCardIntake />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/intake-form" element={<IntakeForm />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/brand-discovery-form" element={<BrandDiscoveryForm />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/link-in-bio" element={<LinkInBio />} />
            <Route path="/website-packages" element={<WebsitePackages />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
