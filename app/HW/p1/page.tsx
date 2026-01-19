"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  // Esc 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomSrc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 이미지 목록 + 확대 여부
  const images = [
    { src: "/img/p1/1.png" },
    { src: "/img/p1/2.png" },
    { src: "/img/p1/3.png" },
    { src: "/img/p1/4.png" },
    { src: "/img/p1/5.png" },
    { src: "/img/p1/6t.png", zoom: true },
    { src: "/img/p1/7t.png", zoom: true },
    { src: "/img/p1/8.png" },
    { src: "/img/p1/9t.png", zoom: true },
    { src: "/img/p1/10t.png", zoom: true },
    { src: "/img/p1/11t.png", zoom: true },
    { src: "/img/p1/12.png" },
    { src: "/img/p1/13t.png", zoom: true },
    { src: "/img/p1/14.png" },
    { src: "/img/p1/15t.png", zoom: true },
    { src: "/img/p1/16.png" },
    { src: "/img/p1/17.png" },
    { src: "/img/p1/18.png" },
    { src: "/img/p1/19.png" },
    { src: "/img/p1/20t.png", zoom: true },
    { src: "/img/p1/21.png" },
    { src: "/img/p1/22t.png", zoom: true },
    { src: "/img/p1/23t.png", zoom: true },
    { src: "/img/p1/24t.png", zoom: true },
    { src: "/img/p1/25t.png", zoom: true },
    { src: "/img/p1/26.png" },
    { src: "/img/p1/27t.png", zoom: true },
    { src: "/img/p1/28t.png", zoom: true },
    { src: "/img/p1/29t.png", zoom: true },
    { src: "/img/p1/30t.png", zoom: true },
    { src: "/img/p1/31t.png", zoom: true },
    { src: "/img/p1/32t.png", zoom: true },
    { src: "/img/p1/33t.png", zoom: true },
    { src: "/img/p1/34t.png", zoom: true },
    { src: "/img/p1/35.png" },
    { src: "/img/p1/36t.png", zoom: true },
    { src: "/img/p1/37.png" },
    { src: "/img/p1/38.png" },
    { src: "/img/p1/39.png" },
  ];

  return (
    <div>
      <main>
        <div className="p1_img_wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              className={img.zoom ? "text_img" : undefined}
              onClick={() => {
                if (img.zoom) setZoomSrc(img.src);
              }}
              style={{ marginBottom: "1rem", maxWidth: "100%" }}
            />
          ))}
        </div>
      </main>

      {/* 모달 */}
      {zoomSrc && (
        <div
          onClick={() => setZoomSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={zoomSrc}
            alt="Zoomed"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
}
