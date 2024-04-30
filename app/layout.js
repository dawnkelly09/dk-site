import { Titillium_Web, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

const tweb = Titillium_Web({ 
  subsets: ["latin"],
  variable: ['--font-text'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const audio = Audiowide({
  subsets: ['latin'],
  variable: ['--font-display'],
  weight: '400',
  style: 'normal',
  display: 'swap',
})

export const metadata = {
  title: "Dawn Kelly",
  description: "Dawn Kelly - blockchain builder and developer advocate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tweb.variable} ${audio.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
