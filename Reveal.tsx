import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // delay in ms
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = "up",
  duration = 0.8
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    // Add a slight scale effect for "motion graphic" feel
    switch(direction) {
      case 'up': return 'translateY(50px) scale(0.95)';
      case 'down': return 'translateY(-50px) scale(0.95)';
      case 'left': return 'translateX(-50px) scale(0.95)';
      case 'right': return 'translateX(50px) scale(0.95)';
      default: return 'translateY(50px) scale(0.95)';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ 
        width,
        position: 'relative',
        overflow: 'visible' 
      }}
    >
      <div
        style={{
          transform: isVisible ? 'translate(0,0) scale(1)' : getTransform(),
          opacity: isVisible ? 1 : 0,
          // Use a custom bezier for a "snap" feel typical of motion graphics
          transition: `all ${duration}s cubic-bezier(0.2, 0.65, 0.3, 1) ${delay}s`,
          filter: isVisible ? 'blur(0px)' : 'blur(4px)'
        }}
      >
        {children}
      </div>
    </div>
  );
};