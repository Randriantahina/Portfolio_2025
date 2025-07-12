import type { Metadata } from 'next';
import './globals.css';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shanjeev',
  description:
    'Fullstack developer portfolio – React, Next.js, Node.js, Laravel, MySQL. Découvrez mes projets, compétences et contactez-moi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased bg-[#190b1f]`}>
        {children}
      </body>
    </html>
  );
}
