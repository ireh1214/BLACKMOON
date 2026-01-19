"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`hw ${open ? "open" : ""}`}>
      <div className="img_wrap" onClick={() => setOpen(!open)}>
        <img src="/img/hwmain.png" alt="menu toggle" />
      </div>

      <ul className="gnb">
        <li>
          · 썰풀이 ·
          <ul className="sub">
            <li>
              <Link href="/HW/p1" onClick={closeMenu}>
                p1
              </Link>
            </li>
            <li>
              <Link href="/HW/p2" onClick={closeMenu}>
                p2
              </Link>
            </li>
            <li>
              <Link href="/HW/p3" onClick={closeMenu}>
                p3
              </Link>
            </li>
            <li>
              <Link href="/HW/p4" onClick={closeMenu}>
                p4
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
