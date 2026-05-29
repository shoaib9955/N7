import React from "react";

interface BackgroundGlowProps {
  position?: "left" | "right" | "center" | "custom";
  color?: "blue" | "indigo" | "gradient" | "custom";
  opacity?: number;
  blur?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BackgroundGlow({
  position = "right",
  color = "gradient",
  opacity = 0.1,
  blur = "200px",
  size = "500px",
  className = "",
  style = {},
}: BackgroundGlowProps) {
  // Built-in color definitions
  const colorStyles = {
    blue: "#00B4FD",
    indigo: "#003ACE",
    gradient: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
    custom: "",
  };

  // Build default layout styles based on position
  const getPositionStyles = (): React.CSSProperties => {
    switch (position) {
      case "left":
        return {
          left: "-150px",
          top: "120px",
        };
      case "right":
        return {
          right: "0px",
          top: "10%",
        };
      case "center":
        return {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        };
      case "custom":
      default:
        return {};
    }
  };

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    borderRadius: "9999px",
    width: size,
    height: size,
    opacity: opacity,
    filter: `blur(${blur})`,
    background: colorStyles[color] || color,
    zIndex: 0,
    ...getPositionStyles(),
    ...style,
  };

  return <div className={`pointer-events-none ${className}`} style={baseStyle} />;
}
