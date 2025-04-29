"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Car Watching System",
      category: "fullstack",
      image: "https://i.ibb.co.com/k2Kq36p5/car.png",
      description:
        "A modern, user-friendly frontend for a Car Wash Booking System built with React.js and Ant Design. It offers seamless booking, user/admin dashboards, and secure authentication integrated with a robust backend API.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Amarpay",
        "antdesign",
        "react-router-dom",
      ],
      githubUrl: "https://github.com/iamRazzakk/car-watching-service-client",
      liveUrl: "https://car-wash-booking-system-eight.vercel.app/",
    },
    {
      title: "Turitors",
      category: "fullstack",
      image: "https://i.ibb.co/M9cL0fJ/Image-03.jpg",
      description:
        "Users can add, edit, and remove assignments using Turitors. In order to provide effective assignment management and assessment experiences, evaluators can mark assignments and offer feedback.",
      technologies: [
        "Reactjs",
        "Tailwindcss",
        "Node.js",
        "Express.js",
        "Mongodb",
        "Firebase",
        "JWT",
        "TanStackQuery",
      ],
      githubUrl: "https://github.com/iamRazzakk/turitors-client-side",
      liveUrl: "https://turitors.web.app/",
    },
    {
      title: "Partdo",
      category: "fullstack",
      image: "https://i.ibb.co/1MZjGX2/Image-02.jpg",
      description:
        "React-based car marketplace. Log in for a personalized experience – add, update, or delete cars in your cart effortlessly. Enjoy a user-friendly interface.",
      technologies: [
        "Reactjs",
        "Tailwindcss",
        "Node.js",
        "Express.js",
        "Mongodb",
        "Firebase",
        "JWT",
        "TanStackQuery",
      ],
      githubUrl: "https://github.com/iamRazzakk/partdo-client-side",
      liveUrl: "https://partdo-f054e.web.app/",
    },
    {
      title: "Small Lakeview Cottage",
      category: "fullstack",
      image: "https://i.ibb.co/kJRr3cW/Image-01.jpg",
      description:
        "Created a website with three roles: Users, Admins, and Members. Secure login, effective rental agreements, and flexible admin tools.",
      technologies: [
        "Reactjs",
        "Tailwindcss",
        "Node.js",
        "Express.js",
        "Mongodb",
        "Firebase",
        "JWT",
        "TanStackQuery",
        "React-Hook-form",
      ],
      githubUrl: "https://github.com/iamRazzakk/lakeview-client-side",
      liveUrl: "https://small-lakeview-cottage-3ed78.web.app/",
    },
    {
      title: "HRM Time log",
      category: "frontend",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A full-featured blog platform with CMS and user authentication.",
      technologies: ["Reactjs", "Ant design", "tailwind css"],
      githubUrl: "#",
      liveUrl: "https://hrm-project-inky.vercel.app/",
    },
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    // { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. I've worked on a variety of
            applications, from simple websites to complex web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 filter-container">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={`filter-button ${
                activeFilter === filter.value
                  ? "bg-primary hover:bg-primary/90"
                  : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/40 hover:border-primary/20 transition-all animate-card flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
