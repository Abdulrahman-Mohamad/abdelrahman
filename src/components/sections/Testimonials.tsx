import { testimonials } from "../../data/testimonials";
import Fadein from "../animations/Fadein";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialStats = [
    { value: "3x", label: "Faster Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "5+", label: "Average Rating" },
  ];

  return (
    <>
      <section
        id="testimonials"
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fadein delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Quote className="size-4 text-primary" />
                <span className="text-sm text-primary font-medium tracking-wider uppercase">
                  Testimonials
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto">
                Trusted by forward-thinking teams
              </h2>
              <p className="text-lg text-white/60 max-w-xl mx-auto">
                Empowering clients with design-driven, high-quality solutions
                built for success.
              </p>
            </div>
          </Fadein>

          <Fadein delay={100}>
            <div className="relative group">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                speed={800}
                navigation={{
                  nextEl: ".swiper-button-next-testimonial",
                  prevEl: ".swiper-button-prev-testimonial",
                }}
                pagination={{
                  el: ".swiper-pagination-testimonial",
                  clickable: true,
                  bulletClass:
                    "transition-all duration-300 rounded-full bg-white/30 size-2 hover:bg-white/50 cursor-pointer inline-block",
                  bulletActiveClass: "bg-primary! w-6!",
                }}
                modules={[Navigation, Pagination]}
                className="w-full"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="max-w-4xl mx-auto px-4">
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        {/* Image Section */}
                        <div className="relative w-full md:w-1/3">
                          <div className="relative h-72 rounded-2xl overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="size-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Stat Badge Overlay */}
                            <div className="absolute bottom-4 inset-s-4 inset-e-4">
                              <div className="bg-black/60 rounded-xl p-4 shadow-lg">
                                <div className="">
                                  <div className="text-2xl font-semibold text-primary mb-1">
                                    {
                                      testimonialStats[
                                        index % testimonialStats.length
                                      ]?.value
                                    }
                                  </div>
                                  <div className="text-sm font-semibold text-gray-100">
                                    {
                                      testimonialStats[
                                        index % testimonialStats.length
                                      ]?.label
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          {/* Quote */}
                          <div className="mb-6">
                            <Quote className="size-7 text-primary mb-4 opacity-50" />
                            <p className="text-lg md:text-xl text-white leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium mb-1">
                                {testimonial.name}
                              </div>
                              <div className="text-white/60 text-sm">
                                {testimonial.role}, {testimonial.company}
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="size-4 fill-primary text-primary"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-10 swiper-pagination-testimonial" />

              {/* Navigation Arrows */}
              <button
                className="swiper-button-prev-testimonial flex absolute inset-s-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center size-10 lg:size-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-6 text-white" />
              </button>

              <button
                className="swiper-button-next-testimonial flex absolute inset-e-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center size-10 lg:size-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-6 text-white" />
              </button>
            </div>
          </Fadein>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
