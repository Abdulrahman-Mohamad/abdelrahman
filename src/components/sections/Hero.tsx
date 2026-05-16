import { Star } from "lucide-react";
import Fadein from "../animations/Fadein";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* <RadialGradientBackground varient="hero" /> */}
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-start">
              <Fadein delay={0}>
                <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                  <Star className="size-4 text-white fill-white" />
                  <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                    {PERSONAL_INFO.title} | based in {PERSONAL_INFO.location}
                  </span>
                </div>
              </Fadein>
              <Fadein delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                  Full Stack Developer
                </h1>
              </Fadein>
              <Fadein delay={200}>
                <p className="text-lg text-white/70 max-w-[550px] mb-8">
                  Building modern, scalable web applications. Transforming ideas
                  into exceptional degistal experience
                </p>
              </Fadein>
              <Fadein delay={300}>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-0 mb-12 group hover:cursor-pointer"
                >
                  <div className="relative z-10 bg-white hover:bg-white/90 transition-colors duration-300 text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                    Get in Touch</div>
                </button>
              </Fadein>
              <Fadein delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-full">
                  {STATS.map((stat, index) => (
                    <div key={index} className="text-start border-r border-white/50 pe-10 last:border-r-0">
                      <div className="text-2xl font-normal text-primary mb-[8px] font-mono">{stat.value}</div>
                      <p className="text-sm text-white leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Fadein>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
