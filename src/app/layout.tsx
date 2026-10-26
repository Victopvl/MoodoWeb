import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Moodo Web',
  description: 'Proyecto Moodo Web',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}