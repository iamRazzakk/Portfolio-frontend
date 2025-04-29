"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ScrollAnimations() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Animate section headings
    gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
      gsap.from(heading, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    })

    // Animate section dividers
    gsap.utils.toArray<HTMLElement>(".section-divider").forEach((divider) => {
      gsap.from(divider, {
        width: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: divider,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    })

    // Animate cards
    gsap.utils.toArray<HTMLElement>(".animate-card").forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    })

    // Animate profile image
    gsap.from(".profile-image-container", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".profile-image-container",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    })

    // Animate project filters
    gsap.from(".filter-button", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".filter-container",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
