"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const TOTAL_PAGES = isMobile ? 118 : 69;

  // ✅ 여기서 정확히 분기
  const folder = isMobile ? "train-mo" : "train";
  const prefix = isMobile ? "train-mo_page-" : "train_page-";

  return (
    <div className="trpg p5">
      <div className="log pdf-images">
        {Array.from({ length: TOTAL_PAGES }, (_, i) => {
          const pageNumber = String(i + 1).padStart(4, "0");

          return (
            <img
              key={pageNumber}
              src={`/pdf/img/${folder}/${prefix}${pageNumber}.jpg`}
              alt={`train page ${i + 1}`}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}
