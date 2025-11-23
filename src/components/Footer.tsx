import { Github, Twitter, Instagram, Mail, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-8 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">ECEA,IETE-SF,RACE</h3>
            <p className="text-sm text-foreground/70">
              Building the future of immersive technology, one project at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:neon-glow transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:neon-glow transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:neon-glow transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@techverse.club"
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:neon-glow transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>ecea@svce.ac.in</p>
              <p>ietesf@svce.ac.in</p>
              <p>race@svce.ac.in</p>
              <p>SVCE, kanchipuram, Tamil Nadu. </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>© 2026 ECEA, IETE-SF, RACE. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-primary" />
            <span>Developed with passion by</span>
            <a 
              href="https://www.linkedin.com/in/balaji-santhanam008/" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary/80 transition-colors hover:underline decoration-primary/50 underline-offset-4"
            >
              Balaji S
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}