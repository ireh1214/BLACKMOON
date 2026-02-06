"use client";
import { useState } from "react";
import Link from "next/link";

type Menu = {
  title: string;
  items: { label: string; href: string }[];
};

type HeaderProps = {
  variant: "rj" | "hw";
  logo: {
    src: string;
    href?: string;
  };
  menus: Menu[];
};

export default function Header({ variant, logo, menus }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={`${variant} ${open ? "open" : ""}`}>
      <div className="img_wrap" onClick={() => setOpen(!open)}>
        {logo.href ? (
          <Link href={logo.href} onClick={closeMenu}>
            <img src={logo.src} alt="logo" />
          </Link>
        ) : (
          <img src={logo.src} alt="logo" />
        )}
      </div>

      <ul className="gnb">
        {menus.map((menu, i) => (
          <li key={i}>
            · {menu.title} ·
            <ul className="sub">
              {menu.items.map((item, j) => (
                <li key={j}>
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </header>
  );
}
