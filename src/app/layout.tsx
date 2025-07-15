import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Roboto,
  Work_Sans,
  Merriweather,
} from "next/font/google";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import classNames from "classnames";
import { AOSInit } from "@/utils/aos";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

// Define Inter fonts
const merriweatherSemiBold = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-merriweather-semi-bold",
});

const merriweatherRegular = Merriweather({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-merriweather-regular",
});

// Define Inter fonts
const interExtraBold = Inter({
  subsets: ["latin"],
  weight: "800", // 800 is extra bold
  variable: "--font-inter-extra-bold",
});

const interBold = Inter({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-inter-bold",
});

// Define Poppins fonts
const poppinsMedium = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-poppins-medium",
});

const poppinsRegular = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins-regular",
});

const poppinsSemiBold = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins-semi-bold",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-poppins-bold",
});

const poppinsExtraBold = Poppins({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-poppins-extra-bold",
});

const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins-light",
});

// Define Roboto
const robotoSemiBold = Roboto({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-roboto-semi-bold",
});

// Define Work Sans
const workSansRegular = Work_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-work-sans-regular",
});

export const metadata: Metadata = {
  title: "Limac Development",
  description: "We Deliver Elegance Through Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <Header />
      <body
        className={classNames(
          poppinsMedium.variable,
          poppinsRegular.variable,
          poppinsSemiBold.variable,
          poppinsBold.variable,
          poppinsLight.variable,
          poppinsExtraBold.variable,
          merriweatherSemiBold.variable,
          merriweatherRegular.variable,
          robotoSemiBold.variable,
          workSansRegular.variable,
          interExtraBold.variable,
          interBold.variable
        )}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
