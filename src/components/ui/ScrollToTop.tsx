import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { animate, motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // تبدأ سريعة وتتباطأ بنعومة شديدة في النهاية
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full bg-linear-to-t from-primary/50 via-primary/80 to-primary/50 text-black shadow-sm shadow-primary/30 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
