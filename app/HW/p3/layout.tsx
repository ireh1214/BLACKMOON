import Header from "../../components/Header";

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
