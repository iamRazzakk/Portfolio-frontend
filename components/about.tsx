import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import profileImage from "@/public/IMG_20250324_140008.jpg";
export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative profile-image-container">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              {/* <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="w-full h-full object-cover" /> */}
              <Image
                src={profileImage}
                alt="Md Abdur Razzak image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm Abdur Razzak, a{" "}
              <span className="text-primary">MERN Stack Developer</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about creating beautiful, functional, and
              user-centered digital experiences. With 2 years of experience in
              the field, I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="animate-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span className="text-sm">
                    mdabdurrazzakrakib290@gmail.com
                  </span>
                </CardContent>
              </Card>
              <Card className="animate-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </CardContent>
              </Card>
            </div>
            <a href="/resume.pdf" download="Md Abdur Razzak (MERN Stack).pdf">
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
