import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <Link 
        href="https://github.com/kingsman00000" 
        target="_blank"
        className="inline-flex items-center justify-center w-10 h-10 border rounded-md hover:bg-accent hover:text-accent-foreground"
      >
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link 
        href="https://linkedin.com/in/HV51" 
        target="_blank"
        className="inline-flex items-center justify-center w-10 h-10 border rounded-md hover:bg-accent hover:text-accent-foreground"
      >
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link 
        href="mailto:harshvardhan96611@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 border rounded-md hover:bg-accent hover:text-accent-foreground"
      >
        <Mail className="w-5 h-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  );
} 