import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8 max-w-2xl animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-9xl font-heading font-bold gradient-text">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground">
              Oops! The page you're looking for doesn't exist. 
              It might have been moved or deleted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="border-primary/20 hover:bg-primary/10 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
