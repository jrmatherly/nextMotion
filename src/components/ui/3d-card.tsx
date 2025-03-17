'use client';

import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react';
import { cn } from '~/lib/utils';

type MouseContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseContextType>([
  false,
  () => {
    // This is intentionally empty
  },
]);

export const useMouseEnter = () => {
  return useContext(MouseEnterContext);
};

export const Card3D = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform =
      'rotateY(-10deg) rotateX(10deg) translateY(20px) translateX(-20px)';
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          'relative h-full w-full transition-all duration-200 [transform-style:preserve-3d]',
          containerClassName
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => {
            setIsMouseEntered(true);
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'relative h-full w-full rounded-xl bg-black p-5 shadow-xl transition-all duration-200 [transform-style:preserve-3d]',
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-10deg) rotateX(10deg) translateY(20px) translateX(-20px)',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

interface CardItemProps {
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: number | string | React.ReactNode | undefined;
}

export const CardItem = ({
  children,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  className,
  ...rest
}: CardItemProps & { 
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();
 
  useEffect(() => {
    handleAnimations();
  }, []);
 
  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform =
        'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
  };
 
  return (
    <div
      ref={ref}
      className={cn('w-fit transition-all duration-200', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
