// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';

// Mengimpor font Inter dari Google Fonts
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hesanime.Id UI',
  description: 'Website streaming anime terbaik',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Link Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
