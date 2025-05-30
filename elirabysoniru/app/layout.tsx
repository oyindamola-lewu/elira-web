import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Elira by Soniru',
  description: "A world-class interior design firm based in Lagos.",
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-dark.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
