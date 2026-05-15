
type Category = "Web Apps" | "UI Components" | "Full Stack"

interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  category: Category,
  technologies: string[],
  metrics?: string,
  demourl: string,
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce",
    description: "E-commerce description",
    image: "image/url.png",
    category: "Web Apps",
    technologies: ["react", "tailwind.css"],
    metrics: "Amaizing e commerce applications",
    demourl: "https://link.com",
    githubUrl: "https://github.com/projectId"
  }
]

export const categories = ["All", "Web Apps", "UI Components", "Full Stack"]