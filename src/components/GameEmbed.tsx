'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useAdPlacement } from './AdPlacement';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
  slug?: string;
  thumbnailUrl?: string;
  aspectRatio?: string;
}

export default function GameEmbed({ gameUrl, title, slug, thumbnailUrl, aspectRatio = '16/9' }: GameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { showInterstitial } = useAdPlacement();

  // Listen for ad break requests from game iframes via postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'adBreak') {
        showInterstitial();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [showInterstitial]);

  const handleLoad = useCallback(() => {
    // Save to recently played
    if (slug && typeof window !== 'undefined') {
      try {
        const recentKey = 'ah_recent';
        const recent = JSON.parse(localStorage.getItem(recentKey) || '[]');
        const updated = [
          { slug, title, thumbnailUrl: thumbnailUrl || '', ts: Date.now() },
          ...recent.filter((g: { slug: string }) => g.slug !== slug),
        ].slice(0, 10);
        localStorage.setItem(recentKey, JSON.stringify(updated));
      } catch {
        // localStorage may be unavailable
      }
    }
    // Delay hiding loader slightly so game title screens are covered
    setTimeout(() => setIsLoading(false), 1200);
  }, [slug, title, thumbnailUrl]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Sync fullscreen state when user presses Escape or otherwise exits fullscreen externally
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        if (containerRef.current) {
          containerRef.current.style.position = '';
          containerRef.current.style.inset = '';
          containerRef.current.style.zIndex = '';
          containerRef.current.style.width = '';
          containerRef.current.style.height = '';
        }
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
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
        style={{ aspectRatio: aspectRatio.replace('/', '/'), minHeight: '300px' }}
      >
        {/* Loading screen with ArcadeHeap branding */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f1a] z-10">
            <div className="flex flex-col items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="ArcadeHeap" className="w-12 h-12 mb-1" />
              <span className="text-xl font-extrabold text-white">
                Arcade<span className="text-[#8b5cf6]">Heap</span>
              </span>
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-gray-800 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-[#8b5cf6] rounded-full animate-spin" />
              </div>
              <p className="text-gray-400 text-sm animate-pulse">Loading {title}…</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f1a] z-10">
            <div className="text-5xl mb-4">🕹️</div>
            <p className="text-white font-semibold mb-2">Game failed to load</p>
            <p className="text-gray-400 text-sm text-center max-w-xs">
              This game could not be loaded. Please try again later.
            </p>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={gameUrl}
          title={title}
          className="w-full h-full border-0"
          allow="fullscreen; autoplay; gamepad"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-modals"
          onLoad={handleLoad}
          onError={handleError}
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
