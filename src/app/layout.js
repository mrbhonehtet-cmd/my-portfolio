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
  title: "Saw Bhone Htet Portfolio",
  description: "Saw Bhone Htet – Creative Developer & Designer specializing in HTML, CSS, JavaScript, React, and Python. Building beautiful, functional, and user-friendly digital experiences.",
  keywords: ["web developer", "frontend developer", "UI/UX designer", "React", "Next.js", "JavaScript", "portfolio"],
  authors: [{ name: "Saw Bhone Htet" }],
  creator: "Saw Bhone Htet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sawbhonehtet.com",
    title: "Saw Bhone Htet | Creative Developer & Designer",
    description: "Creative Developer & Designer specializing in building beautiful, functional, and user-friendly digital experiences.",
    siteName: "Saw Bhone Htet Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saw Bhone Htet | Creative Developer & Designer",
    description: "Creative Developer & Designer specializing in building beautiful, functional, and user-friendly digital experiences.",
  },
  icons: {
    icon: '/assets/Lanyard/mylogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/Lanyard/mylogo.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Spline Web Component */}
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
