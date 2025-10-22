import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ServicePage from "@/pages/Service";
import Services from "@/pages/Services";
import Locations from "@/pages/Locations";
import Location from "@/pages/Location";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Team from "@/pages/Team";
import SuccessStories from "@/pages/SuccessStories";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import AdminDashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import AddService from "@/pages/admin/AddService";
import EditService from "@/pages/admin/EditService";
import BlogList from "@/pages/admin/BlogList";
import AddBlogPost from "@/pages/admin/AddBlogPost";
import EditBlogPost from "@/pages/admin/EditBlogPost";
import BlogCategories from "@/pages/admin/BlogCategories";
import ContentGenerator from "@/pages/admin/ContentGenerator";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/locations" component={Locations} />
      <Route path="/locations/:location" component={Location} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/team" component={Team} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/services" component={ServiceList} />
      <Route path="/admin/services/new" component={AddService} />
      <Route path="/admin/services/edit/:id" component={EditService} />
      <Route path="/admin/blog" component={BlogList} />
      <Route path="/admin/blog/new" component={AddBlogPost} />
      <Route path="/admin/blog/edit/:id" component={EditBlogPost} />
      <Route path="/admin/blog/categories" component={BlogCategories} />
      <Route path="/admin/content-generator" component={ContentGenerator} />
      <Route path="/services/:baseSlug/:citySlug" component={ServicePage} />
      <Route path="/services/:baseSlug" component={ServicePage} />
      <Route path="/:slug" component={ServicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
