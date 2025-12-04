// src/components/vanta-background/index.tsx
import { useEffect, useRef, useState } from 'react';

interface VantaBackgroundProps {
  children?: React.ReactNode;
  effect?: 'topology' | 'waves' | 'fog' | 'cells';
  className?: string;
  enabled?: boolean;
}

export default function VantaBackground({
  children,
  effect = 'topology',
  className = '',
  enabled = true,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Only initialize after mount (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !vantaRef.current || !enabled) return;

    // Wait for VANTA to be available
    const initVanta = () => {
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).p5) {
        try {
          // Destroy existing effect if any
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
            vantaEffect.current = null;
          }

          // Initialize Vanta effect
          const VANTA = (window as any).VANTA;

          if (effect === 'topology' && VANTA.TOPOLOGY) {
            vantaEffect.current = VANTA.TOPOLOGY({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 0.3, // Further reduced for better mobile scroll
              backgroundColor: 0x0a0f1e, // Dark background color
              color: 0x89964e, // Particle color
              spacing: 15, // Increase spacing for less particles (better performance)
              points: 10, // Reduce points for smoother scroll
            });
            setIsLoaded(true);
          }
        } catch (error) {
          console.error('Error initializing Vanta:', error);
        }
      }
    };

    // Check if scripts are loaded
    if (typeof window !== 'undefined') {
      if ((window as any).VANTA && (window as any).p5) {
        // Scripts already loaded, init with small delay
        const timeout = setTimeout(initVanta, 150);
        return () => {
          clearTimeout(timeout);
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
            vantaEffect.current = null;
          }
        };
      } else {
        // Wait for scripts to load
        let attempts = 0;
        const maxAttempts = 100; // 10 seconds max
        const checkVanta = setInterval(() => {
          attempts++;
          if ((window as any).VANTA && (window as any).p5) {
            clearInterval(checkVanta);
            initVanta();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkVanta);
            console.warn('Vanta.js failed to load after 10 seconds');
          }
        }, 100);

        return () => {
          clearInterval(checkVanta);
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
            vantaEffect.current = null;
          }
        };
      }
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [effect, enabled, isMounted]);

  if (!isMounted) {
    // Server-side render: show fallback only
    return <div className={`vanta-background vanta-loading ${className}`}>{children}</div>;
  }

  return (
    <div ref={vantaRef} className={`vanta-background ${className} ${!isLoaded ? 'vanta-loading' : 'vanta-loaded'}`}>
      {children}
    </div>
  );
}
