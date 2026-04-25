import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales AI - 未経験から自由に稼げる営業力を身につける唯一のスクール",
  description: "卒業後の案件保証で確実に収入直結させる。営業スキル×マーケティング×AI活用を同時に学べる充実カリキュラム。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
