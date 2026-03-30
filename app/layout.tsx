import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bui Sai Gon Tour",
  description: "Trải nghiệm du lịch Việt Nam cùng SaigonTour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
