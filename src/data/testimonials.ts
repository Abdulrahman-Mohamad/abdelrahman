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
  name: 'Sarah Mitchell',
  role: 'CTO',
  company: 'TechStart Inc.',
  image: '/testimonials/person1.jpeg',
  quote: 'Outstanding work on our React application. AbdelRahman delivered a high-performance, scalable solution',
  rating: 5
},
{
  id: 2,
  name: 'Michael Chen',
  role: 'Product Manager',
  company: 'Digital Innovations',
  image: '/testimonials/person2.jpeg',
  quote: 'Working with AbdelRahman was a game-changer for our project. The UI components were beautifully designed',
  rating: 5
},
{
  id: 3,
  name: 'Emily Rodriguez',
  role: 'Founder',
  company: 'StartupHub',
  image: '/testimonials/person3.jpeg',
  quote: 'AbdelRahman transformed our vision into reality with a stunning, user-friendly interface. The project',
  rating: 5
},
{
  id: 4,
  name: 'David Thompson',
  role: 'Lead Developer',
  company: 'WebSolutions Co.',
  image: '/testimonials/person4.jpeg',
  quote: 'Incredible expertise in React and modern web technologies. AbdelRahman not only built our application',
  rating: 5
}
]