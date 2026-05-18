
type Category = "Web Apps" | "UI Components" | "Full Stack"

export interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  category: Category,
  technologies: string[],
  metrics?: string,
  demoUrl: string | null,
  githubUrl?: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Frutera",
    description: "A multilingual B2B platform for an agricultural export company with a dynamic product catalog.",
    image: "/projects/frutera.png",
    category: "Web Apps",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "next-intl", "Swiper", "React Hook Form"],
    metrics: "B2B Agricultural Export Platform",
    demoUrl: "https://frutera-farms.com/",
    githubUrl: null
  },
  {
    id: 2,
    title: "Mac Portfolio",
    description: "An interactive personal portfolio replicating the macOS desktop experience in the browser.",
    image: "/projects/mac-portfolio.png",
    category: "Web Apps",
    technologies: ["React", "TailwindCSS", "JavaScript", "GSAP", "Zustand"],
    metrics: "Interactive macOS Simulation",
    demoUrl: "https://mac-portfolio-jade.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/mac-portfolio.git"
  },
  {
    id: 3,
    title: "SPORTS HUB",
    description: "An interactive sports gaming platform with predictions and trivia challenges.",
    image: "/projects/sports-hub.png",
    category: "Web Apps",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    metrics: "Built for Telecom Companies in Bahrain",
    demoUrl: "https://sportshubbh.com",
    githubUrl: null
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description: "An AI-powered resume analyzer providing instant feedback to improve your CV.",
    image: "/projects/ai-resume-analyzer.png",
    category: "Web Apps",
    technologies: ["React Router", "TailwindCSS", "JavaScript", "GSAP", "Puter"],
    metrics: "AI-powered Insights for Interview Success",
    demoUrl: "https://ai-resume-analyzer-one-gold.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/ai-resume-analyzer.git"
  },
  {
    id: 5,
    title: "3D Rotate",
    description: "A visually immersive 3D product showcase built entirely with pure CSS without JavaScript.",
    image: "/projects/3d-rotate.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "Pure CSS 3D Interactive Showcase",
    demoUrl: "https://3d-rotate-lilac.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/3dRotate.git"
  },
  {
    id: 6,
    title: "Animate SVG",
    description: "A captivating landing page combining cinematic backgrounds with elegant SVG drawing.",
    image: "/projects/animate-svg.PNG",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "High-performance Visual Storytelling",
    demoUrl: "https://animate-svg-gamma.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/animateSVG.git"
  },
  {
    id: 7,
    title: "Auto Slider",
    description: "An infinite scrolling image slider built purely with HTML and CSS with bidirectional animations.",
    image: "/projects/auto-slider.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "Smooth Infinite Loop with Pure CSS Keyframes",
    demoUrl: "https://auto-slider-fawn.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/auto-slider.git"
  },
  {
    id: 8,
    title: "Spider Animation",
    description: "An interactive Canvas animation simulating a dynamic spider web reacting to mouse movements.",
    image: "/projects/spider-animation.png",
    category: "UI Components",
    technologies: ["HTML", "CSS", "JavaScript"],
    metrics: "Real-time Interactive HTML5 Canvas Particles",
    demoUrl: "https://spider-animation.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/spider-animation.git"
  },
  {
    id: 9,
    title: "Hong Kong",
    description: "An immersive GSAP ScrollTrigger experience animating a vector city illustration upon scrolling.",
    image: "/projects/hong-kong.png",
    category: "UI Components",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    metrics: "Immersive Storytelling with GSAP ScrollTrigger",
    demoUrl: "https://hong-kong-rosy.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/homg-kong.git"
  },
  {
    id: 10,
    title: "INK Animation",
    description: "A landing page effect using dynamic ink spreading animations and CSS masking to reveal backgrounds.",
    image: "/projects/ink-animation.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "Cinematic Masking Effects via HTML/CSS",
    demoUrl: "https://ink-animation.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/ink-animation.git"
  },
  {
    id: 11,
    title: "Scroll Animation",
    description: "A dynamic web design showcase leveraging modern CSS scroll-driven animations without JavaScript.",
    image: "/projects/scroll-animation.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "CSS Scroll-driven Animations",
    demoUrl: "https://scroll-animation-navy.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/scroll-animation"
  },
  {
    id: 12,
    title: "Slide Animation",
    description: "A visually striking full-screen image slider featuring a unique circular reveal transition.",
    image: "/projects/slide-animation.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "Dynamic High-Impact Visual Presentation",
    demoUrl: "https://slide-animation-gules.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/slide-animation"
  },
  {
    id: 13,
    title: "Slideer-3D",
    description: "A mesmerizing 3D rotating image carousel built entirely with CSS for immersive animations.",
    image: "/projects/slider-3d.png",
    category: "UI Components",
    technologies: ["HTML", "CSS"],
    metrics: "Immersive 3D Spatial Ring Using Pure CSS",
    demoUrl: "https://slider-3d-gamma.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/slider-3d.git"
  },
  {
    id: 14,
    title: "3js Scroll",
    description: "An immersive 3D scrolling experience powered by Three.js and GSAP featuring a dynamic 3D model.",
    image: "/projects/3js-scroll.png",
    category: "UI Components",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Three.js"],
    metrics: "Dynamic 3D WebGL Interactions via Three.js",
    demoUrl: "https://3js-animation-zeta.vercel.app/",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/3js-animation"
  },
  {
    id: 15,
    title: "Movira",
    description: "A comprehensive movie tracking mobile app to discover films and manage personal watchlists.",
    image: "/projects/movira.png",
    category: "Full Stack",
    technologies: ["React Native", "Expo", "Appwrite", "TailwindCSS", "TypeScript"],
    metrics: "Cross-platform Mobile App with Real-time Data",
    demoUrl: "https://expo.dev/preview/update?message=Republish+%22Portfolio+iOS+preview%22+-+group%3A+2f6f3eda-f466-485e-8983-b6d6943779f6&updateRuntimeVersion=1.0.0&createdAt=2026-05-18T16%3A46%3A31.899Z&slug=exp&projectId=2e99126e-6efa-42e5-bfb7-468f1e05614b&group=4e2edd4d-4048-4943-b61a-b2439dee50c9",
    githubUrl: "https://github.com/Abdulrahman-Mohamad/movie-app.git"
  },
  {
    id: 16,
    title: "Infinty Builder",
    description: "An AI-powered website builder enabling users to instantly generate websites from text descriptions.",
    image: "/projects/infintyBuilder.webp",
    category: "Full Stack",
    technologies: ["React 19", "Tailwind CSS 4", "OpenAI", "Prisma", "TypeScript"],
    metrics: "Instant AI-Generated Web Solutions via OpenAI",
    demoUrl: "https://ai-website-builder-client-xi.vercel.app",
    githubUrl: null
  }
]

export const categories = ["All", "Web Apps", "UI Components", "Full Stack"]