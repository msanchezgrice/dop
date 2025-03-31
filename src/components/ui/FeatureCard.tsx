import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="text-blue-600 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 