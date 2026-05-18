import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediSolt | Digital Appointment Syestem",
  description: "Doctor Appointment System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>

        <ThemeProvider>
          <Navbar />

          <main>{children}</main>
            <Toaster/>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}