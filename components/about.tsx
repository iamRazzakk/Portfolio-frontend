"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import profileImage from "@/public/IMG_20250324_140008.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Floating profile image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text content
      gsap.from(textContainerRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 85%",
        },
      });

      // Heading bounce-in
      gsap.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });

      // Staggered cards
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          delay: i * 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 section-heading text-white"
            // ref={headingRef}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className="relative profile-image-container mx-auto md:mx-0 w-[80%] sm:w-[70%] md:w-full"
            ref={imageRef}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl lg:w-[80%]">
              <Image
                src={profileImage}
                alt="Md Abdur Razzak image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-md"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-md"></div>
          </div>

          {/* Text Info */}
          <div ref={textContainerRef}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              I'm Abdur Razzak, a{" "}
              <span className="text-[#60a5fa]">MERN Stack Developer</span>
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              I'm passionate about creating beautiful, functional, and
              user-centered digital experiences. With 2 years of experience in
              the field, I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: <Mail className="text-[#60a5fa] h-5 w-5" />,
                  text: "mdabdurrazzakrakib290@gmail.com",
                },
                {
                  icon: <MapPin className="text-[#60a5fa] h-5 w-5" />,
                  text: "Dhaka, Bangladesh",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
                  ref={(el: HTMLDivElement | null) => {
                    if (el) (cardsRef.current as HTMLDivElement[])[i] = el;
                  }}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download Button */}
            <a href="/resume.pdf" download="Md Abdur Razzak (MERN Stack).pdf">
              <Button className="bg-[#60a5fa] hover:bg-primary/10  text-white hover:scale-105 hover:brightness-110 transition-all duration-300">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
