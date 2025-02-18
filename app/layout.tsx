import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import { Providers } from "@/context/Providers";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Inoxiboard",
  description: "Panel de administración desarrollado por Inoxilab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
