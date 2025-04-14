import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and various databases.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Design",
      description: "Designing and optimizing databases with MongoDB, PostgreSQL.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsive Design",
      description: "Creating websites that work seamlessly across all devices and screen sizes.",
    },
    // {
    //   icon: <Palette className="h-10 w-10 text-primary" />,
    //   title: "UI/UX Design",
    //   description: "Designing intuitive user interfaces and experiences with Figma and Adobe XD.",
    // },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from front-end to back-end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border border-border/40 hover:border-primary/20 transition-colors animate-card"
            >
              <CardContent className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
