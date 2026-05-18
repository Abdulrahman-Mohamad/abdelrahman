import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Testimonials from "./components/sections/Testimonials";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-black pb-[100vh]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials/>
        </main>
      </div>
    </>
  );
};
export default App;
