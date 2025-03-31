import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: "white" | "light" | "dark";
}

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  bgColor = "white",
}) => {
  const getBgColor = () => {
    switch (bgColor) {
      case "white":
        return "bg-white";
      case "light":
        return "bg-slate-50";
      case "dark":
        return "bg-slate-900 text-white";
      default:
        return "bg-white";
    }
  };

  return (
    <section id={id} className={`${getBgColor()} py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section; 