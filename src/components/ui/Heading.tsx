import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Heading({
  children,
  level = 2,
  className = '',
  size,
  as,
}: HeadingProps) {
  // Determine the appropriate element based on level or 'as' prop
  const Element = as || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

  // Default size mapping based on heading level
  const defaultSizes = {
    1: '4xl',
    2: '3xl',
    3: '2xl',
    4: 'xl',
    5: 'lg',
    6: 'md',
  };

  // Use provided size or default based on level
  const headingSize = size || defaultSizes[level];

  // Size class mapping
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
  };

  const baseClasses = 'font-bold text-gray-900 tracking-tight';
  const sizeClass = sizeClasses[headingSize as keyof typeof sizeClasses] || '';
  const headingClasses = `${baseClasses} ${sizeClass} ${className}`;

  return <Element className={headingClasses}>{children}</Element>;
} 