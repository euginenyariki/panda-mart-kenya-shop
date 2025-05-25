
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Electronics from "./pages/Electronics";
import HomeAppliances from "./pages/HomeAppliances";
import Clothing from "./pages/Clothing";
import SnacksFood from "./pages/SnacksFood";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/home-appliances" element={<HomeAppliances />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/snacks-food" element={<SnacksFood />} />
          {/* Placeholder routes for remaining categories */}
          <Route path="/home-decor" element={<NotFound />} />
          <Route path="/kitchen-utensils" element={<NotFound />} />
          <Route path="/toys" element={<NotFound />} />
          <Route path="/stationery" element={<NotFound />} />
          <Route path="/party-items" element={<NotFound />} />
          <Route path="/gym-equipment" element={<NotFound />} />
          <Route path="/bedding" element={<NotFound />} />
          <Route path="/artificial-flowers" element={<NotFound />} />
          <Route path="/pet-accessories" element={<NotFound />} />
          <Route path="/carpets" element={<NotFound />} />
          <Route path="/furniture" element={<NotFound />} />
          <Route path="/car-spare-parts" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
