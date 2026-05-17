import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-black pb-[100vh]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
        </main>
      </div>
    </>
  );
};
export default App;
