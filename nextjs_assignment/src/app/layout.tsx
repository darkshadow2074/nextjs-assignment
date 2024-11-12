import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

import { Mulish, Rubik, Poppins } from '@next/font/google';

const mulish = Mulish({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: ['normal', 'italic'],
  variable: '--font-mulish' 
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other weights if needed
  style: ['normal', 'italic'],
  variable: '--font-rubik'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other weights if needed (e.g., '300', '500', '900')
  style: ['normal', 'italic'], // Add any styles you need (normal or italic)
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "NextJS BoilerPlate",
  description: "Plutus NextJS BoilerPlate for new NextJS projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${mulish.className} ${rubik.className} ${poppins.className}`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}