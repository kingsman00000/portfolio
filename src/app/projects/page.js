import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Microscope, Book, Sprout } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Few-Shot Skin Cancer Classifier",
    description: "A Deep-Learning Model for the classification of various skin cancer and diseases using minimal labeled data through few-shot learning techniques.",
    icon: Microscope,
    tools: ["PyTorch", "DeepBDC", "ResNet", "ImageNet", "HAM1000"],
    links: {
      github: "https://github.com/yourusername/skin-cancer-classifier",
      // demo removed as it's not mentioned in the resume
    },
    highlights: [
      "Developed a few-shot learning model using DeepBDC in a Mutual Centralized Learning setup",
      "Pretrained on ImageNet and meta-trained on HAM1000 dataset",
      "Implemented compact feature representations for improved diagnostic accuracy"
    ]
  },
  {
    title: "Cloud Notebook",
    description: "A full-stack web application for private and secure note management with anywhere, anytime access.",
    icon: Book,
    tools: ["ReactJS", "Bootstrap", "ExpressJS", "Bcrypt", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/cloudbook",
      // demo removed
    },
    highlights: [
      "Built secure authentication system using Bcrypt",
      "Implemented CRUD operations for notes management",
      "Developed private and secure access control system"
    ]
  },
  {
    title: "AgriCult",
    description: "A Next.js web application for organizing and managing hackathon events, facilitating collaborative learning and solution building.",
    icon: Sprout,
    tools: ["Next.js", "Tailwind", "React", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/AgriCult",
      // demo removed
    },
    highlights: [
      "Created a platform for hackathon event management",
      "Implemented features for team collaboration and challenge exploration",
      "Developed solution submission and evaluation system"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden group">
      <div className="aspect-video relative overflow-hidden bg-muted flex items-center justify-center">
        <project.icon className="w-16 h-16 text-muted-foreground" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            href={project.links.github}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            target="_blank"
          >
            <Github className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
        
        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
} 