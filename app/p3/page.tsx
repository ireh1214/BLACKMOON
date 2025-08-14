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

  // 이미지 목록 (1~35 자동 생성)
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/img/p3/${i + 1}.png`,
  }));

  return (
    <div>
      <main>
        <div className="p1_img_wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              onClick={() => setZoomSrc(img.src)}
              style={{
                marginBottom: "1rem",
                maxWidth: "100%",
                cursor: "zoom-in",
              }}
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
