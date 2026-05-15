import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px"
  } = options

  const [isVisiable, setIsVisiable] = useState<boolean>(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current;
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisiable(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }

  }, [threshold, rootMargin])

  return { ref, isVisiable }
}