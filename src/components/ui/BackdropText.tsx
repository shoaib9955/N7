import React from "react";

interface BackdropTextProps {
  text: string;
  stroke?: boolean;
  strokeColor?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function BackdropText({
  text,
  stroke = false,
  strokeColor = "rgba(0, 180, 253, 0.18)",
  opacity = 0.5,
  className = "",
  style = {},
}: BackdropTextProps) {
  const defaultStyles: React.CSSProperties = {
    fontFamily: "Archivo, sans-serif",
    pointerEvents: "none",
    userSelect: "none",
    position: "absolute",
    lineHeight: "none",
    opacity: opacity,
    zIndex: 0,
    ...(stroke
      ? {
          color: "transparent",
          WebkitTextStroke: `1.59px ${strokeColor}`,
        }
      : {}),
    ...style,
  };

  return (
    <div className={`pointer-events-none select-none font-medium ${className}`} style={defaultStyles}>
      {text}
    </div>
  );
}
