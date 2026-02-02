import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
    <footer className="w-full py-6 sm:py-6 px-4 bg-card border-t border-border mt-12 relative">
      {/* Center text absolutely */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Tanishka Hegde. All rights reserved.
        </p>

      {/* Right arrow */}
        <div className="flex justify-end">
        <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </a>
    </div>
    </footer>
);
};

