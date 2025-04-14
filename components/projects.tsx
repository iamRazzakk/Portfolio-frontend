"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      image: "/placeholder.svg?height=400&width=600",
      description: "A complete e-commerce solution with payment processing and inventory management.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "https://car-wash-booking-system-eight.vercel.app/",
    },
    {
      title: "Social Media Dashboard",
      category: "frontend",
      image: "/placeholder.svg?height=400&width=600",
      description: "A comprehensive dashboard for social media analytics and management.",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management API",
      category: "backend",
      image: "/placeholder.svg?height=400&width=600",
      description: "RESTful API for task management with authentication and authorization.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Application",
      category: "frontend",
      image: "/placeholder.svg?height=400&width=600",
      description: "Real-time weather forecasting application with location detection.",
      technologies: ["React", "OpenWeather API", "Geolocation API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Blog Platform",
      category: "fullstack",
      image: "/placeholder.svg?height=400&width=600",
      description: "A full-featured blog platform with CMS and user authentication.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Real-time Chat API",
      category: "backend",
      image: "/placeholder.svg?height=400&width=600",
      description: "WebSocket-based API for real-time chat applications.",
      technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. I've worked on a variety of applications, from simple websites to
            complex web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 filter-container">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={`filter-button ${activeFilter === filter.value ? "bg-primary hover:bg-primary/90" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/40 hover:border-primary/20 transition-all animate-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TODO: Integrate with GitHub API to dynamically fetch and display projects */}
      </div>
    </section>
  )
}
