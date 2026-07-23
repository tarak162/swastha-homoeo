'use client';

import { useCallback, useEffect, useState } from 'react';
import { Check, Copy, Mail, MessageCircle, Share2 } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShareButtonsProps {
  /**
   * The article title — used in WhatsApp text and email subject.
   * Falls back to `document.title` on the client when omitted.
   */
  title?: string;
  /**
   * The canonical URL to share.
   * Falls back to `window.location.href` on the client when omitted.
   */
  url?: string;
  /**
   * `'compact'` — icon-only buttons, ideal for blog listing cards.
   * `'full'` — icons + labels, ideal for the article body footer.
   * @default 'full'
   */
  variant?: 'compact' | 'full';
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Safely read `window.location.href` — returns `''` during SSR. */
function getClientUrl(): string {
  return typeof window !== 'undefined' ? window.location.href : '';
}

/** Safely read `document.title` — returns `''` during SSR. */
function getClientTitle(): string {
  return typeof document !== 'undefined' ? document.title : '';
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShareButtons({
  title,
  url,
  variant = 'full',
}: ShareButtonsProps) {
  // Resolve the real URL/title on the client (avoids SSR mismatch)
  const [resolvedUrl, setResolvedUrl] = useState(url ?? '');
  const [resolvedTitle, setResolvedTitle] = useState(title ?? '');

  useEffect(() => {
    if (!url) setResolvedUrl(getClientUrl());
    if (!title) setResolvedTitle(getClientTitle());
  }, [url, title]);

  // ── Clipboard copy state ──────────────────────────────────────────────────
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const target = resolvedUrl || getClientUrl();
    if (!target) return;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(target);
      } else {
        // Fallback for older browsers / non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = target;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail — clipboard API blocked in some contexts
    }
  }, [resolvedUrl]);

  // ── Native share (mobile bonus) ───────────────────────────────────────────
  const [supportsNativeShare, setSupportsNativeShare] = useState(false);

  useEffect(() => {
    setSupportsNativeShare(
      typeof navigator !== 'undefined' && typeof navigator.share === 'function',
    );
  }, []);

  const handleNativeShare = useCallback(async () => {
    const shareUrl = resolvedUrl || getClientUrl();
    const shareTitle = resolvedTitle || getClientTitle();
    if (!navigator.share) return;
    try {
      await navigator.share({ title: shareTitle, url: shareUrl });
    } catch {
      // User cancelled or API not available — no-op
    }
  }, [resolvedUrl, resolvedTitle]);

  // ── WhatsApp & Email links ────────────────────────────────────────────────
  const whatsappHref =
    resolvedUrl && resolvedTitle
      ? `https://wa.me/?text=${encodeURIComponent(`${resolvedTitle}\n${resolvedUrl}`)}`
      : '#';

  const emailHref =
    resolvedTitle && resolvedUrl
      ? `mailto:?subject=${encodeURIComponent(resolvedTitle)}&body=${encodeURIComponent(resolvedUrl)}`
      : '#';

  // ── Layout helpers ────────────────────────────────────────────────────────
  const isCompact = variant === 'compact';

  const btnBase =
    'group relative inline-flex items-center gap-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 select-none cursor-pointer';

  const btnCompact =
    'size-8 justify-center border border-border/60 bg-card text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary';

  const btnFull =
    'px-3 py-2 border border-border/60 bg-card text-xs font-medium text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary';

  const btnClass = `${btnBase} ${isCompact ? btnCompact : btnFull}`;

  // ── Tooltip for compact variant ───────────────────────────────────────────
  const Tooltip = ({ label }: { label: string }) =>
    isCompact ? (
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-1 text-[10px] font-medium text-background opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {label}
        {/* Arrow */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground/90" />
      </span>
    ) : null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      role="group"
      aria-label="Share this article"
      className={`flex flex-wrap items-center gap-2 ${isCompact ? '' : 'py-1'}`}
    >
      {/* Label — full variant only */}
      {!isCompact && (
        <span className="mr-1 text-xs font-semibold text-muted-foreground">
          Share:
        </span>
      )}

      {/* ── WhatsApp ─────────────────────────────────────────────────────── */}
      <a
        id="share-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={btnClass}
      >
        <Tooltip label="WhatsApp" />
        {/* WhatsApp brand SVG — lucide has no brand icons */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`shrink-0 fill-current ${isCompact ? 'size-4' : 'size-3.5'}`}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {!isCompact && <span>WhatsApp</span>}
      </a>

      {/* ── Email ─────────────────────────────────────────────────────────── */}
      <a
        id="share-email"
        href={emailHref}
        aria-label="Share via Email"
        className={btnClass}
      >
        <Tooltip label="Email" />
        <Mail
          aria-hidden="true"
          className={`shrink-0 ${isCompact ? 'size-4' : 'size-3.5'}`}
        />
        {!isCompact && <span>Email</span>}
      </a>

      {/* ── Copy Link ─────────────────────────────────────────────────────── */}
      <button
        id="share-copy-link"
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Link copied!' : 'Copy article link'}
        aria-live="polite"
        className={`${btnClass} ${
          copied
            ? 'border-emerald-400/60 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'
            : ''
        }`}
      >
        <Tooltip label={copied ? 'Copied!' : 'Copy link'} />
        {/* Swap Copy ↔ Check with a smooth cross-fade */}
        <span className="relative flex items-center gap-1.5" aria-hidden="true">
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
              copied ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <Check className={`shrink-0 ${isCompact ? 'size-4' : 'size-3.5'}`} />
          </span>
          <span
            className={`flex items-center gap-1.5 transition-all duration-200 ${
              copied ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <Copy className={`shrink-0 ${isCompact ? 'size-4' : 'size-3.5'}`} />
            {!isCompact && <span>{copied ? 'Copied!' : 'Copy link'}</span>}
          </span>
        </span>
        {/* Screen-reader live region */}
        <span className="sr-only">
          {copied ? 'Link copied to clipboard' : 'Copy link to clipboard'}
        </span>
      </button>

      {/* ── Native Share — shown only when Web Share API is available ─────── */}
      {supportsNativeShare && (
        <button
          id="share-native"
          type="button"
          onClick={handleNativeShare}
          aria-label="Share via device share sheet"
          className={btnClass}
        >
          <Tooltip label="More" />
          <Share2
            aria-hidden="true"
            className={`shrink-0 ${isCompact ? 'size-4' : 'size-3.5'}`}
          />
          {!isCompact && <span>More</span>}
        </button>
      )}
    </div>
  );
}
