import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/admin/Dashboard";
import PortfolioAdmin from "./pages/admin/PortfolioAdmin";
import TestimonialsAdmin from "./pages/admin/TestimonialsAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<><Home /><SpeedInsights /></>} />
              <Route path="/about" element={<><About /><SpeedInsights /></>} />
              <Route path="/services" element={<><Services /><SpeedInsights /></>} />
              <Route path="/portfolio" element={<><Portfolio /><SpeedInsights /></>} />
              <Route path="/testimonials" element={<><Testimonials /><SpeedInsights /></>} />
              <Route path="/contact" element={<><Contact /><SpeedInsights /></>} />
              <Route path="/auth" element={<><Auth /><SpeedInsights /></>} />
              <Route path="/admin" element={<><Dashboard /><SpeedInsights /></>} />
              <Route path="/admin/portfolio" element={<><PortfolioAdmin /><SpeedInsights /></>} />
              <Route path="/admin/testimonials" element={<><TestimonialsAdmin /><SpeedInsights /></>} />
              <Route path="/admin/services" element={<><ServicesAdmin /><SpeedInsights /></>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<><NotFound /><SpeedInsights /></>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
