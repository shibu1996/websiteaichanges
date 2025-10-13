
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../multicolor/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import Contact from "./pages/Contact";
import DrainCleaning from "./pages/DrainCleaning";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/drain-cleaning" element={<DrainCleaning />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:areaName" element={<AreaDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ThemeToggle />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
