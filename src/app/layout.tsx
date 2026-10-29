import type { Metadata } from 'next';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import { portfolio } from '../data/portfolio';
export const metadata: Metadata = { title: portfolio.seo.title, description: portfolio.seo.description };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
