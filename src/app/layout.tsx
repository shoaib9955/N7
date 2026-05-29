import "./globals.css";
import "@fontsource/archivo";
import "@fontsource/chivo-mono";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "N7 Banking — The New Foundation of Modern Banking",
  description:
    "N7 drives innovation and growth, provides seamless customer experience and operational excellence with cloud-based core banking and digital banking solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}