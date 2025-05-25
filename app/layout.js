import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipe App",
  description: "My Amazing Recipe App",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>Recipe App</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>&copy; Recipe App. 2025 </p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
