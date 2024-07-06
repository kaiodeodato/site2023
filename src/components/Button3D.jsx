import React, { useRef, useEffect } from 'react';
import './Button3D.css';

const Button3D = ({ children, className, width, height, borderRadius, background, ...props }) => {
  const button3DRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = button3DRef.current;
      if (!button) return;

      // Remove a transição durante o movimento do mouse
      button.style.transition = 'none';

      const x = e.clientX;
      const y = e.clientY;
    
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
    
      const offsetX = ((x - middleX) / middleX) * 40;
      const offsetY = ((y - middleY) / middleY) * 40;

      button.style.setProperty('--rotateX', offsetX + 'deg');
      button.style.setProperty('--rotateY', -offsetY + 'deg');
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`button3D ${className}`}
      ref={button3DRef}
      style={{ 
        width, 
        height, 
        borderRadius,
        background,
        '--width': width,
        '--height': height,
        '--border-radius': borderRadius, 
        '--background': background, 
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button3D;
