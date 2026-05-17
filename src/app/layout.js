import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint",
  description: "Doctor Appointment System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>

        <ThemeProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}