"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Rss, Twitter } from "lucide-react";
import Header from "@/components/header";
import { gsap } from "gsap";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Developer";
  const typingSpeed = 100;
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    // GSAP animations
    if (heroRef.current && contentRef.current) {
      const tl = gsap.timeline();

      // Animate hero content
      tl.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate social icons
      gsap.from(".social-icon", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1,
      });

      // Animate scroll button
      gsap.from(".scroll-button", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <Header />
      <div className="flex-1 container mx-auto px-4 flex flex-col justify-center items-center text-center pt-20 relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Md Abdur Razzak</span>
          </h1>
          <div className="h-12 mb-6">
            <h2 className="text-2xl md:text-3xl font-medium">
              <span className="text-primary">{typedText}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
        
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <Button
              variant="ghost"
              size="icon"
              aria-label="GitHub"
              className="social-icon"
              onClick={() => window.open('https://github.com/IamRazzakk', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
              className="social-icon"
              onClick={() => window.open('https://www.linkedin.com/in/razzak392/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Twitter"
              className="social-icon"
              onClick={()=> window.open("https://x.com/rakibt23p", '_blank')}
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Twitter"
              className="social-icon"
              onClick={()=> window.open("https://dev.to/iamrazzakk", '_blank')}
            >
              <Rss className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll down"
          className="bg-background/30 backdrop-blur-sm hover:bg-background/50 scroll-button"
          onClick={scrollToNextSection}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
