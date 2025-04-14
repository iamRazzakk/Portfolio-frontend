import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollAnimations from "@/components/scroll-animations";

export const metadata = {
  title: "Portfolio | Abdur Razzak",
  description: "MERN Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollAnimations />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
