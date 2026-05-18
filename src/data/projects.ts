
type Category = "Web Apps" | "UI Components" | "Full Stack"

export interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  category: Category,
  technologies: string[],
  metrics?: string,
  demoUrl: string,
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Frutera",
    description: "Frutera description",
    image: "public/projects/frutera.png",
    category: "Web Apps",
    technologies: ["Next", "tailwind.css"],
    metrics: "Fresh Egyptian Fruits & Vegetables Exported Worldwide",
    demoUrl: "https://frutera-farms.com/",
    githubUrl: null
  }
]

export const categories = ["All", "Web Apps", "UI Components", "Full Stack"]