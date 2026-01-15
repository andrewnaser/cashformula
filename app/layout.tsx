import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Cash Formula - Build Profit Pages',
  description: 'Create premium affiliate review pages that convert',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${sora.variable} font-sans antialiased bg-navy-950 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
