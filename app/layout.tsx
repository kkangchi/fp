import './globals.css';
import { Inter, Press_Start_2P } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
});

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${pressStart.variable}`}>
        {children}
      </body>
    </html>
  );
}
