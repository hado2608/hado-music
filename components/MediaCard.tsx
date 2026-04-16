"use client";

import { useState, useRef, useCallback } from "react";

type MediaType = "tiktok" | "video";

interface MediaCardProps {
  type: MediaType;
  /** TikTok: full URL or video ID. Video: path to file in /public */
  src: string;
  /** Path to thumbnail image in /public. If omitted, shows pink placeholder. */
  thumbnail?: string;
  alt?: string;
  style: React.CSSProperties;
}

function getTikTokId(src: string): string {
  const match = src.match(/video\/(\d+)/);
  return match ? match[1] : src;
}

export default function MediaCard({ type, src, thumbnail, alt = "", style }: MediaCardProps) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = useCallback(() => {
    setActive(true);
    if (type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {/* browser blocked — fine */});
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
    >
      {/* Thumbnail — visible when idle, fades on hover */}
      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
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

      {/* Self-hosted video */}
      {type === "video" && (
        <video
          ref={videoRef}
          src={src}
          poster={thumbnail}
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
