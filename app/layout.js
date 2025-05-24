import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Markdown Recipe App",
  description: "Created by Rorisang",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <h1>Recipe App</h1>
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
