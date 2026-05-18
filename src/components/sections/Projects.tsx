import React, { useRef, useState } from "react";
import { categories, projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Palette,
  Target,
  Zap,
} from "lucide-react";
import Fadein from "../animations/Fadein";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const filterdProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Reset carousel when category chages
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  // Category icons mapping
  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 inset-e-0 size-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 inset-s-0 size-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 inset-e-1/3 size-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fadein delay={0}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Briefcase className="size-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  My Work
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Showcasing my best work and achievements
              </p>
            </div>
          </Fadein>

          {/* Category Filter */}
          <Fadein delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${activeCategory === category ? "text-white" : "text-white/60 hover:text-white"}`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category ? "bg-primary/10 opacity-100" : "bg-white/5 border border-white/10 group-hover:bg-white/10"}`}
                  />
                  <div className="relative flex items-center gap-2">
                    {React.createElement(categoryIcons[category as keyof typeof categoryIcons], {
                      className: "size-4",
                    })}
                    <span className="text-sm">{category}</span>
                  </div>

                  {activeCategory === category && <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10" />}
                </button>
              ))}
            </div>
          </Fadein>

          {/* Projects Carousel */}
          <Fadein delay={200}>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  el: '.swiper-pagination-custom',
                  clickable: true,
                  bulletClass: 'transition-all duration-300 rounded-full bg-white/30 size-2 hover:bg-white/50 cursor-pointer inline-block',
                  bulletActiveClass: 'bg-primary! w-6!'
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="pb-4!"
              >
                {filterdProjects.map((project) => (
                  <SwiperSlide key={project.id} className="h-auto">
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button
                className="swiper-button-prev-custom flex absolute inset-s-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center size-10 lg:size-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed z-10 cursor-pointer"
                aria-label="Previous projects"
              >
                <ChevronLeft className="size-6 text-white" />
              </button>

              <button
                className="swiper-button-next-custom flex absolute inset-e-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center size-10 lg:size-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed z-10 cursor-pointer"
                aria-label="Next projects"
              >
                <ChevronRight className="size-6 text-white" />
              </button>

              {/* Navigation Dots */}
              <div className="swiper-pagination-custom flex items-center justify-center gap-2 mt-8"></div>
            </div>
          </Fadein>
        </div>
      </section>
    </>
  );
};
export default Projects;
