import "../public/scss/common.scss";

export const metadata = {
  title: "BLACKMOON",
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
        <div>{children}</div>
      </body>
    </html>
  );
}
