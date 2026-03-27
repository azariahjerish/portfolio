import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Do not mount the cursor on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Use an animation frame approach for smoother trailing
    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let frameId: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursor) {
        // Direct set for the inner dot for zero latency
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      // Linear interpolation for the trailing follower
      followerX += (mouseX - followerX) * 0.2;
      followerY += (mouseY - followerY) * 0.2;
      
      if (follower) {
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      
      frameId = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers hovering state on links, buttons and explicitly pointable elements
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    animate();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`${styles.cursor} ${isVisible ? styles.visible : ''} ${isHovering ? styles.hovering : ''}`} 
      />
      <div 
        ref={followerRef} 
        className={`${styles.follower} ${isVisible ? styles.visible : ''} ${isHovering ? styles.hovering : ''}`} 
      />
    </>
  );
}
