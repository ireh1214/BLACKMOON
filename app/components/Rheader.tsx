"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`rj ${open ? "open" : ""}`}>
      <div className="img_wrap" onClick={() => setOpen(!open)}>
        <Link href="/RJ/" onClick={closeMenu}>
          <img src="/img/header_logo.png" alt="menu toggle" />
        </Link>
      </div>

      <ul className="gnb">
        <li>
          · 썰풀이 ·
          <ul className="sub">
            <li>
              <Link href="/RJ/p2" onClick={closeMenu}>
                수도원AU
              </Link>
            </li>
            <li>
              <Link href="/RJ/p3" onClick={closeMenu}>
                기사AU
              </Link>
            </li>
          </ul>
        </li>

        <li>
          · TRPG ·
          <ul className="sub">
            <li>
              <Link href="/RJ/p1" onClick={closeMenu}>
                창을 짚은 손
              </Link>
            </li>
            <li>
              <Link href="/RJ/p4" onClick={closeMenu}>
                검은 괴물의 신부
              </Link>
            </li>
            <li>
              <Link href="/RJ/p5" onClick={closeMenu}>
                화장열차
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
