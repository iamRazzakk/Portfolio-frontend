import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/90 z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-[-1]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <Link href="/" className="text-2xl font-bold text-white mb-6">
            Md Abdur Razzak
          </Link>

          <div className="flex gap-4 mb-8">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link
              href="#home"
              className="text-sm hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Abdur Razzak. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
