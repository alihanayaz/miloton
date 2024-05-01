import type { Metadata } from 'next';
import { Pixelify_Sans } from 'next/font/google';
import './globals.css';

const pixelify = Pixelify_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miloton',
  description: 'Enhance your productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pixelify.className}>{children}</body>
    </html>
  );
}
