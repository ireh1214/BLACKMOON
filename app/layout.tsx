import "../public/scss/common.scss";
import Link from "next/link"; // ✅ Link 임포트

export const metadata = {
  title: "시작이 반이라고 했는데",
  description: "ㅋㅎㅎ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/pretendard.css"
        />
      </head>
      <body>
        <div className="wrap">
          <header>
            <ul>
              <li>
                <Link href="/p1">P1</Link>
              </li>
              <li>
                <Link href="/p2">P2</Link>
              </li>
              <li>
                <Link href="/p3">P3</Link>
              </li>
              <li>
                <Link href="/p4">P4</Link>
              </li>
            </ul>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
