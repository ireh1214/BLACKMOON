import Header from "../components/Rheader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrap">
      <Header />
      {/* ❌ header 없음 */}
      {children}
    </div>
  );
}
