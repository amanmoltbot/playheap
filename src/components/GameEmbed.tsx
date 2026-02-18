'use client';

import { useState, useRef, useCallback } from 'react';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
}

export default function GameEmbed({ gameUrl, title }: GameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch {
        // Fallback: toggle CSS fullscreen
        containerRef.current.style.position = 'fixed';
        containerRef.current.style.inset = '0';
        containerRef.current.style.zIndex = '9999';
        containerRef.current.style.width = '100vw';
        containerRef.current.style.height = '100vh';
        setIsFullscreen(true);
      }
    } else {
      try {
        await document.exitFullscreen();
      } catch {
        if (containerRef.current) {
          containerRef.current.style.position = '';
          containerRef.current.style.inset = '';
          containerRef.current.style.zIndex = '';
          containerRef.current.style.width = '';
          containerRef.current.style.height = '';
        }
      }
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Game container */}
      <div
        ref={containerRef}
        className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl shadow-[#8b5cf6]/10"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f1a] z-10">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 border-4 border-gray-800 rounded-full" />
              <div className="absolute inset-0 border-4 border-t-[#8b5cf6] rounded-full animate-spin" />
            </div>
            <p className="text-gray-400 text-sm animate-pulse">Loading {title}…</p>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={gameUrl}
          title={title}
          className="w-full h-full border-0"
          allow="fullscreen; autoplay; gamepad"
          allowFullScreen
          onLoad={handleLoad}
          referrerPolicy="no-referrer"
        />

        {/* Fullscreen button */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-[#8b5cf6]/80 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          {isFullscreen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25M15 15l5.25 5.25M15 15V19.5M15 15h4.5" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
