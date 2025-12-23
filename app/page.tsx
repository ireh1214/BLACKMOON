"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const words = ["a", "tiger", "who", "ate", "the", "moonlight"];

export default function Home() {
  const router = useRouter();
  const [daysPassed, setDaysPassed] = useState(0);

  // 날짜 계산
  useEffect(() => {
    const startDate = new Date(2025, 7, 3); // 8월 3일
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysPassed(diffDays + 1); // +1일
  }, []);

  return (
    <div className="main_wrap">
      <h2 className="animated_title">
        {words.map((word, i) => {
          let className = "word";
          if (word === "tiger") className += " tiger";
          if (word === "moonlight") className += " moonlight";

          return (
            <span
              key={i}
              className={className}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {word}
            </span>
          );
        })}
      </h2>

      <div className="main_img">
        <img
          src="/img/main.png"
          alt="메인 이미지"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/HW/p1")}
          className="main_fadein"
        />
      </div>

      <p className="blink_text">
        ©2025, version 0.01 | 2025년 8월 3일로부터 <span>{daysPassed}일</span>
      </p>
    </div>
  );
}
