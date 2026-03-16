import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClass?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  containerClass,
  children,
  ...props
}) => {
  return (
    <section 
      id={id} 
      className={cn('py-16 md:py-24 relative', className)} 
      {...props}
    >
      <div className={cn('container mx-auto px-4 md:px-8 relative z-10', containerClass)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
