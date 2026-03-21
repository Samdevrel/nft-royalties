import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Royalties | @samdevrel",
  description: "Track NFT creator royalties across collections and marketplaces. Real-time royalty payments.",
  keywords: ["NFT royalties", "creator royalties", "OpenSea", "Blur", "secondary sales"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
