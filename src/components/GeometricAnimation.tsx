import React, { useEffect, useRef } from 'react';

const GeometricAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Animation parameters
    let time = 0;
    const primaryColor = 'hsla(215, 90%, 50%, 0.15)'; // Blue accent color with low opacity
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;
      
      // Draw geometric patterns
      drawGeometricWaves(ctx, canvas.width, canvas.height, time);
      
      requestAnimationFrame(animate);
    };
    
    // Function to draw geometric waves
    const drawGeometricWaves = (
      ctx: CanvasRenderingContext2D, 
      width: number, 
      height: number, 
      time: number
    ) => {
      // Number of segments across screen width
      const segmentCount = 12;
      const segmentWidth = width / segmentCount;
      
      // Draw multiple layers of geometric waves
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 100;
        const amplitude = 40 - layer * 10;
        const speed = 0.5 + layer * 0.2;
        
        ctx.beginPath();
        
        // Start from bottom left
        ctx.moveTo(0, height);
        
        // Create zigzag pattern across the bottom of the screen
        for (let i = 0; i <= segmentCount; i++) {
          const x = i * segmentWidth;
          
          // Calculate y position with sine wave and time
          const waveHeight = height * 0.6 + layerOffset;
          const sineOffset = Math.sin(time * speed + i * 0.5) * amplitude;
          
          // Alternate between peaks and valleys for zigzag effect
          const y = waveHeight + sineOffset;
          
          // Use quadratic curves for smoother corners
          if (i === 0) {
            ctx.lineTo(x, y);
          } else {
            const prevX = (i - 1) * segmentWidth;
            const controlX = prevX + segmentWidth / 2;
            const controlY = y - amplitude * 0.2 * Math.sin(time * 0.3 + i);
            
            ctx.quadraticCurveTo(controlX, controlY, x, y);
          }
        }
        
        // Complete the path back to bottom right and then bottom left
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        
        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, height * 0.6, 0, height);
        gradient.addColorStop(0, primaryColor);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      // Add some vertical lines for a grid effect
      const lineCount = 20;
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 1;
      
      for (let i = 1; i < lineCount; i++) {
        const x = (width / lineCount) * i;
        const heightVariation = Math.sin(time + i * 0.5) * 50;
        
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x, height * 0.7 + heightVariation);
        ctx.stroke();
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default GeometricAnimation;
