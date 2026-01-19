"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [daysFromSep9, setDaysFromSep9] = useState(0);

  const calcDaysFrom = (year: number, month: number, day: number) => {
    const startDate = new Date(year, month - 1, day); // month는 0부터
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 포함 계산
  };

  useEffect(() => {
    setDaysFromSep9(calcDaysFrom(2025, 9, 9));
  }, []);

  return (
    <div className="rj_main">
      <div className="title_img"></div>

      {/* <div className="dday">
        2025년 9월 9일로부터 <span>{daysFromSep9}일</span>
      </div> */}
    </div>
  );
}
