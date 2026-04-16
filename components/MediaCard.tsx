"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type MediaType = "tiktok" | "video";

interface MediaCardProps {
  type: MediaType;
  /** TikTok: full URL. Video: path to file e.g. "/hado-music/videos/clip.mp4" */
  src: string;
  /** Optional override thumbnail. If omitted, TikTok cards fetch their own. */
  thumbnail?: string;
  /** Link to open on click (defaults to src for tiktok). Opens in new tab. */
  href?: string;
  alt?: string;
  style: React.CSSProperties;
}

function getTikTokId(src: string): string {
  const match = src.match(/video\/(\d+)/);
  return match ? match[1] : src;
}

export default function MediaCard({ type, src, thumbnail, href, alt = "", style }: MediaCardProps) {
  const linkUrl = href ?? (type === "tiktok" ? src : undefined);
  const [active, setActive] = useState(false);
  const [autoThumb, setAutoThumb] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-fetch TikTok thumbnail via oEmbed (no API key needed)
  useEffect(() => {
    if (type !== "tiktok" || thumbnail) return;
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(src)}`;
    fetch(oembedUrl)
      .then((r) => r.json())
      .then((data) => { if (data.thumbnail_url) setAutoThumb(data.thumbnail_url); })
      .catch(() => {/* silently skip — pink placeholder remains */});
  }, [type, src, thumbnail]);

  const handleEnter = useCallback(() => {
    setActive(true);
    if (type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [type]);

  const handleLeave = useCallback(() => {
    setActive(false);
    if (type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [type]);

  const tikTokId = type === "tiktok" ? getTikTokId(src) : "";
  const thumb = thumbnail ?? autoThumb ?? undefined;

  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        border: "1px solid #ff98a7",
        cursor: "pointer",
        backgroundColor: "#272121",
        ...style,
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => {
        if (!active && linkUrl) {
          window.open(linkUrl, "_blank", "noopener,noreferrer");
        }
      }}
    >
      {/* Thumbnail — fades when video activates */}
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumb}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: active ? 0 : 1,
            transition: "opacity 0.25s ease",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      )}

      {/* TikTok — iframe inserted on hover */}
      {type === "tiktok" && active && (
        <iframe
          src={`https://www.tiktok.com/embed/v2/${tikTokId}?autoplay=1&loop=1&controls=0`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            zIndex: 2,
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}

      {/* Self-hosted / downloaded video */}
      {type === "video" && (
        <video
          ref={videoRef}
          src={src}
          poster={thumb}
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
}
