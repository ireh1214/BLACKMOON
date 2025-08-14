
import "../public/scss/common.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body >
        <header>
          ㅋㅋㅋ 시작이 반이라고
        </header>
        {children}
      </body>
    </html>
  );
}
