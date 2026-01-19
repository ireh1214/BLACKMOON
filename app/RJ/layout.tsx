import Header from "../components/Rheader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrap">
      <Header />
      <section className="main_section">{children}</section>
    </div>
  );
}
