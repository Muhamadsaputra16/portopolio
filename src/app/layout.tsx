import type { Metadata, Viewport } from 'next';
import './globals.css';
import ThemeProvider from './components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Muhamad Saputra | IT Support Specialist & Web Developer',
  description: 'Portfolio website of Muhamad Saputra — IT Support Specialist & Web Developer from Bekasi, Indonesia. Skilled in hardware diagnostics, network troubleshooting, system administration, and modern web applications.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
