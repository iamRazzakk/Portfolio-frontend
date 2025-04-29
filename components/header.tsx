"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { gsap } from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate header on load
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center pt-10">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg py-4 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="mt-6 bg-primary hover:bg-primary/90">
                  Download CV
                </Button>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Download CV
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
