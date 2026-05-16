import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface FadeinProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const Fadein = ({ children, delay = 0, duration = 500, threshold = 0.1 }: FadeinProps) => {
  const [isVisable, setisVisable] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element viewport
        if (entry.isIntersecting && !isVisable) {
          setisVisable(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visable
      },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, isVisable]);

  return (
    <>
      <div
      ref={elementRef}
        className={isVisable ? "animate-fadeIn" : "opacity-0"}
        style={{
          animationDelay: isVisable ? `${delay}ms` : "0ms",
          animationDuration: `${duration}ms`,
          animationFillMode: "both",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default Fadein;
