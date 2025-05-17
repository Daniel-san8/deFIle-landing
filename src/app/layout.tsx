import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "./fonts/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "dFile",
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
        className={`antialiased ${openSans.className} scroll-smooth max-w-[1800px] bg-[var(--color-bg-primary)] mx-auto`}
      >
        {children}
        <Toaster richColors
        />
      </body>
    </html>
  );
}
