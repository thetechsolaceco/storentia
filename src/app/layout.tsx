import type { Metadata } from "next";
import { Hanken_Grotesk, Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Storentia — Build better stores, faster.",
  description: "Storentia is the fastest, high-performance next-gen storefront builder. Integrate with top e-commerce tools, scale seamlessly, and build stunning designs with zero code.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.ico", type: "image/x-icon" }
    ],
    shortcut: "/icon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Storentia — Build better stores, faster.",
    description: "Storentia is the fastest, high-performance next-gen storefront builder. Integrate with top e-commerce tools, scale seamlessly, and build stunning designs with zero code.",
    url: "https://storentia.com",
    siteName: "Storentia",
    images: [
      {
        url: "/logo-white.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storentia — Build better stores, faster.",
    description: "Storentia is the fastest, high-performance next-gen storefront builder. Integrate with top e-commerce tools, scale seamlessly, and build stunning designs with zero code.",
    images: ["/logo-white.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${roboto.variable} antialiased`}
    >
      <body className="flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
