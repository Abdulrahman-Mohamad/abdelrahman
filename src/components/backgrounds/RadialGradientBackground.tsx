import React from "react";

interface ColorStop {
  color: string;
  stop: string;
}

interface GradientConfig {
  position: string;
  size: string;
  colors: ColorStop[];
  blur: string;
  opacity: number;
}

interface RadialGradientBackgroundProps {
  variant?: "hero" | "about" | "custom";
  gradients?: GradientConfig[];
}

const RadialGradientBackground: React.FC<RadialGradientBackgroundProps> = ({ 
  variant = "hero", 
  gradients = [] 
}) => {
  const variants: Record<string, GradientConfig[]> = {
    hero: [
      {
        position: "top-1 start-1 -translate-x-1/2 -translate-y-1/2",
        size: "size-[1400px]",
        colors: [
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.5)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "top-1 start-1",
        size: "size-[1400px]",
        colors: [
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.5)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 end-1",
        size: "size-[1400px]",
        colors: [
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.5)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: "bottom-0 start-[75%]",
        size: "size-[700px]",
        colors: [
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.5)", stop: "100%" },
          { color: "rgba(141,255,105,0.45)", stop: "100%" },
          { color: "rgba(141,255,105,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradient =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors: ColorStop[]) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {activeGradient.map((gradient, index) => (
          <div
            key={index}
            className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
            style={{
              background: generateGradient(gradient.colors),
              filter: `blur(${gradient.blur})`,
              opacity: gradient.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default RadialGradientBackground;
