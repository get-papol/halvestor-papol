// src/components/vanta-waves/index.tsx
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface VantaWavesProps {
  children?: React.ReactNode;
  className?: string;
  enabled?: boolean;
}

export default function VantaWaves({ children, className = '', enabled = true }: VantaWavesProps) {
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
    const initVanta = async () => {
      if (typeof window !== 'undefined') {
        try {
          console.log('🌐 Initializing Vanta Topology...');

          // Dynamically import p5.js (client-side only)
          const p5Module = await import('p5');
          const p5 = p5Module.default;
          console.log('✅ p5.js loaded:', p5);

          // Disable p5's Friendly Error System to suppress console warnings
          p5.disableFriendlyErrors = true;

          // Make p5 and THREE available globally for Vanta
          (window as any).p5 = p5;
          (window as any).THREE = THREE;

          // Dynamically import VANTA.TOPOLOGY (uses p5.js)
          const VANTA = await import('vanta/dist/vanta.topology.min');

          console.log('✅ Vanta module loaded:', VANTA);

          // Destroy existing effect if any
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
            vantaEffect.current = null;
          }

          // Initialize Vanta TOPOLOGY effect
          if (VANTA.default) {
            console.log('🎨 Creating Vanta Topology effect on element:', vantaRef.current);

            vantaEffect.current = VANTA.default({
              el: vantaRef.current,
              p5: p5,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x3b84f6, // Blue particles
              backgroundColor: 0xf8fafc, // Light background
              // Enhanced visibility on light background
              points: 20.0,
              maxDistance: 25.0,
              spacing: 18.0,
            });

            console.log('✅ Vanta Topology initialized successfully!');
            console.log('Effect instance:', vantaEffect.current);
            setIsLoaded(true);
          } else {
            console.error('❌ VANTA.default is undefined');
          }
        } catch (error) {
          console.error('❌ Error initializing Vanta Topology:', error);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timeout);
      if (vantaEffect.current) {
        console.log('🧹 Cleaning up Vanta effect');
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [enabled, isMounted]);

  if (!isMounted) {
    // Server-side render: show fallback only
    return <div className={`vanta-waves vanta-loading ${className}`}>{children}</div>;
  }

  return (
    <div ref={vantaRef} className={`vanta-waves ${className} ${!isLoaded ? 'vanta-loading' : 'vanta-loaded'}`}>
      {children}
    </div>
  );
}
