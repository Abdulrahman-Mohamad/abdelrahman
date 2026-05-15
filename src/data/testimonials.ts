interface Testimonial {
  id: number,
  name: string,
  role: string,
  company: string,
  image: string,
  quote: string,
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    image: "https://link.com",
    quote: "Amaizing work!!",
    rating: 5
  }
]