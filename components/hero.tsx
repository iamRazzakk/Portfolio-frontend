"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Rss, Twitter } from "lucide-react";
import Header from "@/components/header";
import { gsap } from "gsap";
import Image from "next/image";
import profileImage from "@/public/IMG_20250324_140008.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Developer";
  const typingSpeed = 100;
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
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
    if (heroRef.current && contentRef.current && imageRef.current) {
      const tl = gsap.timeline();

      tl.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        imageRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      gsap.from(".social-icon", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1,
      });

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
      <div className="flex-1 container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center pt-20 relative z-10">
        {/* Rotating Border */}
        <div className="absolute inset-0 overflow-hidden rounded-xl -z-10">
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[300%] bg-gradient-conic from-transparent via-blue-500 via-pink-500 via-amber-500 to-transparent animate-spin origin-center" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
          {/* Left side - Text content */}
          <div
            ref={contentRef}
            // className="lg:w-1/2 backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20 relative z-20 text-left" // Changed to text-left
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm{" "}
              <span className="text-blue-400 text-stroke text-stroke-hover transition-all duration-300">
                Md Abdur Razzak
              </span>
            </h1>

            <div className="h-12 mb-6">
              <h2 className="text-2xl md:text-3xl font-medium italic">
                {typedText.split("").map((char, index) => (
                  <span
                    key={index}
                    className="text-white hover:text-blue-400 hover:font-bold hover:scale-125 transition-all duration-50 ease-in-out inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              {" "}
              {/* Changed to justify-start */}
              <Button
                className="bg-[#60a5fa] hover:bg-primary/10  text-white"
                variant="outline"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 mt-12 justify-start">
              {" "}
              {/* Changed to justify-start */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="social-icon backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20"
                onClick={() =>
                  window.open("https://github.com/IamRazzakk", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="social-icon backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/razzak392/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="social-icon backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20"
                onClick={() => window.open("https://x.com/rakibt23p", "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="social-icon backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/20"
                onClick={() =>
                  window.open("https://dev.to/iamrazzakk", "_blank")
                }
              >
                <Rss className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            ref={imageRef}
            className="lg:w-1/2 flex justify-center p-4 relative z-20"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
              <Image
                src={profileImage}
                alt="Md Abdur Razzak"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
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
