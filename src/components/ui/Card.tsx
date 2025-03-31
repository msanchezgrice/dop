import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}: CardProps) {
  // Base styles that all cards share
  const baseClasses = 'rounded-lg overflow-hidden';

  // Variant specific styles
  const variantClasses = {
    default: 'bg-white',
    outline: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-md',
  };

  // Padding options
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return <div className={cardClasses}>{children}</div>;
} 