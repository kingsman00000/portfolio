import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bio Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">About Me</h3>
            <p className="text-muted-foreground">
              Computer Science student at NIT Patna, passionate about building innovative solutions 
              through code and exploring new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-3 flex flex-col items-center">
            <h3 className="font-bold text-lg">Connect</h3>
            <SocialLinks className="justify-start" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harshvardhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 