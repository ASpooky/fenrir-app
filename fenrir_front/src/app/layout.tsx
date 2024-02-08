import "./globals.css";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-gray-100">
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
