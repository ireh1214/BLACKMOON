"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const words = ["a", "tiger", "who", "ate", "the", "moonlight"];

export default function Home() {
  const router = useRouter();
  const [daysFromAug3, setDaysFromAug3] = useState(0);
  const [daysFromSep9, setDaysFromSep9] = useState(0);

  const calcDaysFrom = (year: number, month: number, day: number) => {
    const startDate = new Date(year, month - 1, day); // month는 0부터
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 포함 계산
  };

  useEffect(() => {
    setDaysFromAug3(calcDaysFrom(2025, 8, 3));
    setDaysFromSep9(calcDaysFrom(2025, 9, 9));
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
        <img src="/img/main.png" alt="메인 이미지" className="main_fadein" />
      </div>

      <ul className="dday">
        <li onClick={() => router.push("/HW/p1")}>
          2025년 8월 3일로부터 <span>{daysFromAug3}일</span>
        </li>
        <li onClick={() => router.push("/RJ/p1")}>
          2025년 9월 9일로부터 <span>{daysFromSep9}일</span>
        </li>
      </ul>
      <p className="blink_text">
        <p> ©2025, version 0.01</p>
      </p>
    </div>
  );
}
