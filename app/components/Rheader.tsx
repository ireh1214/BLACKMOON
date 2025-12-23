import Link from "next/link"; // ✅ Link 임포트

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/RJ/p1">P1</Link>
        </li>
        <li>
          <Link href="/RJ/p2">P2</Link>
        </li>
        <li>
          <Link href="/RJ/p3">P3</Link>
        </li>
        {/* <li>
          <Link href="/p4">P4</Link>
        </li> */}
      </ul>
    </header>
  );
}
