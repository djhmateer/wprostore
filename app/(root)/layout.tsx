import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // height of whole screen and flex column
    <div className="flex h-screen flex-col">
      {/* header component from components/shared/header/index.tsx */}
      <Header />

      {/* wrapper is a utility class in global.css */}
      <main className="flex-1 wrapper">{children}</main>

      {/* footer component in components/footer.tsx */}
      <Footer />
    </div>
  );
}
