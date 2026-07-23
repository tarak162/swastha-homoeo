'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoid hydration mismatch: render nothing until mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a stable placeholder so the header layout doesn't shift
    return (
      <div className="size-8 rounded-lg border border-border/60 bg-transparent" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="
        relative flex size-8 items-center justify-center rounded-lg
        border border-border/60 bg-card text-muted-foreground
        transition-all duration-200
        hover:border-primary/50 hover:bg-primary/5 hover:text-primary
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
      "
    >
      {/* Sun icon — visible in dark mode (click → go light) */}
      <Sun
        aria-hidden="true"
        className={`absolute size-4 transition-all duration-300 ${
          isDark
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-50 rotate-90 opacity-0'
        }`}
      />
      {/* Moon icon — visible in light mode (click → go dark) */}
      <Moon
        aria-hidden="true"
        className={`absolute size-4 transition-all duration-300 ${
          isDark
            ? 'scale-50 -rotate-90 opacity-0'
            : 'scale-100 rotate-0 opacity-100'
        }`}
      />
    </button>
  );
}
