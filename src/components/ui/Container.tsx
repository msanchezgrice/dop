import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export default function Container({
  children,
  className = '',
  size = 'lg',
  padding = true,
}: ContainerProps) {
  // Size variants mapping
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  // Padding classes
  const paddingClasses = padding ? 'px-4 sm:px-6 md:px-8' : '';
  
  // Combine all classes
  const containerClasses = `mx-auto ${sizeClasses[size]} ${paddingClasses} ${className}`;
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
} 