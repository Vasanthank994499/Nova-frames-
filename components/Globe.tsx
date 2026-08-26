"use client";

import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let rotation = 0;

    // Dots setup
    const numDots = 60;
    const dots: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      dots.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      });
    }

    // Connections setup
    const numConnections = 6;
    const connections: { from: number; to: number }[] = [];
    for (let i = 0; i < numConnections; i++) {
      const from = Math.floor(Math.random() * numDots);
      const to = Math.floor(Math.random() * numDots);
      if (from !== to) connections.push({ from, to });
    }

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const radius = Math.min(width, height) * 0.35;
      const cx = width / 2;
      const cy = height / 2;
      const fov = 400;

      rotation += 0.002;

      const project = (x: number, y: number, z: number) => {
        // Rotate around Y axis
        const rotX = x * Math.cos(rotation) - z * Math.sin(rotation);
        const rotZ = x * Math.sin(rotation) + z * Math.cos(rotation);
        const rotY = y;

        // Perspective projection
        const scale = fov / (fov + rotZ * radius);
        const projX = cx + rotX * radius * scale;
        const projY = cy + rotY * radius * scale;
        
        return { x: projX, y: projY, z: rotZ };
      };

      // Draw latitude lines (8)
      ctx.strokeStyle = "rgba(99, 102, 241, 0.15)";
      ctx.lineWidth = 1;
      
      for (let lat = 1; lat < 8; lat++) {
        const phi = (lat / 8) * Math.PI;
        ctx.beginPath();
        for (let lon = 0; lon <= 60; lon++) {
          const theta = (lon / 60) * 2 * Math.PI;
          const x = Math.sin(phi) * Math.cos(theta);
          const y = Math.cos(phi); // Y is up
          const z = Math.sin(phi) * Math.sin(theta);
          const proj = project(x, y, z);
          if (lon === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.stroke();
      }

      // Draw longitude lines (12)
      for (let lon = 0; lon < 12; lon++) {
        const theta = (lon / 12) * 2 * Math.PI;
        ctx.beginPath();
        for (let lat = 0; lat <= 60; lat++) {
          const phi = (lat / 60) * Math.PI;
          const x = Math.sin(phi) * Math.cos(theta);
          const y = Math.cos(phi);
          const z = Math.sin(phi) * Math.sin(theta);
          const proj = project(x, y, z);
          if (lat === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.stroke();
      }

      // Draw connections
      ctx.strokeStyle = "rgba(99, 102, 241, 0.1)";
      ctx.beginPath();
      for (const conn of connections) {
        const from = dots[conn.from];
        const to = dots[conn.to];
        const p1 = project(from.x, from.y, from.z);
        const p2 = project(to.x, to.y, to.z);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
      ctx.stroke();

      // Draw dots
      ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
      for (const dot of dots) {
        const proj = project(dot.x, dot.y, dot.z);
        if (proj.z > -0.5) {
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
    />
  );
}
