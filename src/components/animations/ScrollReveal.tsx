import { useScrollReveal } from "../../hooks/useScrollReveal";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
}

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
}: ScrollRevealProps) => {
  const { ref, isVisiable } = useScrollReveal({ threshold: 0.1 });
  const animationClasses = {
    fadeUp: "opacity-0 translate-y-8",
    fadeIn: "opacity-0",
    slideLeft: "opacity -translate-x-12",
    slideRight: "opacity translate-x-12",
    scaleIn: "opacity-0 scale-90",
  };

  const visableClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <>
      <div
        ref={ref}
        className={`transition-all ease-out ${isVisiable ? visableClasses : animationClasses[animation]}`}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </>
  );
};
export default ScrollReveal;
