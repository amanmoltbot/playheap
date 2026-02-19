'use client';

import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    adBreak: ((config: Record<string, unknown>) => void) | undefined;
    adConfig: ((config: Record<string, unknown>) => void) | undefined;
  }
}

export function useAdPlacement() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.adConfig) {
      window.adConfig({
        preloadAdBreaks: 'on',
        sound: 'on',
      });
    }
  }, []);

  const showInterstitial = useCallback((onDone?: () => void) => {
    if (typeof window !== 'undefined' && window.adBreak) {
      window.adBreak({
        type: 'next',
        name: 'between-levels',
        afterAd: () => { onDone?.(); },
        adBreakDone: (info: unknown) => { onDone?.(); void info; },
      });
    } else {
      onDone?.();
    }
  }, []);

  const showRewardedAd = useCallback((onReward: () => void, onSkip?: () => void) => {
    if (typeof window !== 'undefined' && window.adBreak) {
      window.adBreak({
        type: 'reward',
        name: 'extra-life',
        beforeReward: (showAdFn: () => void) => { showAdFn(); },
        adViewed: () => { onReward(); },
        adDismissed: () => { onSkip?.(); },
        adBreakDone: (info: unknown) => { void info; },
      });
    }
  }, []);

  return { showInterstitial, showRewardedAd };
}
