import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MakeMeSites - Websites development",
  description: "Discover the new generation of websites development with MakeMeSites. We specialize in creating custom websites and applications designed to elevate your business and drive success. Partner with us for innovative, user-friendly digital solutions.",
  keywords:'website development, custom software solutions, app development, digital solutions, web design, e-commerce websites, mobile app development, user-friendly applications, innovative software, business websites, tailored web solutions, software development company, responsive web design, digital transformation, it consulting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
