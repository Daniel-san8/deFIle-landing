import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "De File",
  description: "Landing page para um produto on chain para salvamento de arquivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased ${openSans.className} max-w-[1440px] bg-[var(--color-bg-primary)] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
