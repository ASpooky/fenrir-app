import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
