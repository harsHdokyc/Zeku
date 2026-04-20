import { Link } from "react-router-dom";
import zekuLogo from "@/assets/zekuLogo.png";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={zekuLogo}
              alt="ZEKU Logo"
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold text-[#a7399b] font-heading">ZEKU</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium online learning for Classes 10 to 12. Small batches, big results.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">Platform</p>
          <div className="space-y-3">
            <Link to="/how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">Subjects</p>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Physics</p>
            <p className="text-sm text-muted-foreground">Chemistry</p>
            <p className="text-sm text-muted-foreground">Mathematics</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">Get Started</p>
          <div className="space-y-3">
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Enroll Now</Link>
            <a
              href="mailto:elbin@zeku.in"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              elbin@zeku.in
            </a>
            <a
              href="tel:+917306516842"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              +91 73065 16842
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ZEKU. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built for students who want more.</p>
      </div>
    </div>
  </footer>
);
