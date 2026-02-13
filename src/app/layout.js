// app/layout.js
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Happy Valentine ❤️',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gradient-to-br from-pink-100 to-red-200">
        <Toaster />
        {children}
      </body>
    </html>
  );
}