import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "sonner";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900"
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900"
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of Stack OverFlow",
};

const RootLayout = async ({ children, }: { children: React.ReactNode; }) => {

  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;