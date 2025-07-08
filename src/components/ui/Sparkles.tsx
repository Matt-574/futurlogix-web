"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const SparklesCore = ({
  minSize = 0.5,
  maxSize = 1.2,
  particleDensity = 50,
  className,
  particleColor = "#FFFFFF",
  background = "transparent",
}: {
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  background?: string;
}) => {
  const sparkles = useRef<Array<any>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (const sparkle of sparkles.current) {
      const noise = 0.5; // Adjust for more or less erratic movement
      sparkle.x += sparkle.vx * noise;
      sparkle.y += sparkle.vy * noise;
      sparkle.alpha -= sparkle.decay;
      sparkle.size *= sparkle.growth;

      if (sparkle.alpha <= 0.1 || sparkle.size <= 0.1) {
        // Reset sparkle if it fades out or becomes too small
        Object.assign(sparkle, createSparkle());
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${sparkle.color.r}, ${sparkle.color.g}, ${sparkle.color.b}, ${sparkle.alpha})`;
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(() => animate(ctx));
  };

  const createSparkle = () => {
    const color = hexToRgb(particleColor);
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: Math.random() * (maxSize - minSize) + minSize,
      alpha: 1,
      decay: 0.005 + Math.random() * 0.005,
      growth: 0.98 + Math.random() * 0.01,
      vx: (Math.random() - 0.5) * 0.5, // Small random velocity
      vy: (Math.random() - 0.5) * 0.5,
      color: color,
    };
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        setCanvasWidth(canvas.offsetWidth);
        setCanvasHeight(canvas.offsetHeight);

        sparkles.current = Array.from({ length: particleDensity }, createSparkle);
        animate(ctx);
      }
    }
  }, [particleDensity, minSize, maxSize, particleColor, canvasWidth, canvasHeight]);

  return (
    <div className={className} style={{ background }}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};