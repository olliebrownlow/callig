import { Mea_Culpa, Inter } from "next/font/google";
import BurgerMenu from "../components/sharedComponents/burgerMenu";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const meaCulpa = Mea_Culpa({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mea-culpa",
});

export const metadata = {
  title: "Carolina Calligraphy",
  description: "High quality callgraphy projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${meaCulpa.variable} ${inter.variable}`}>
        <BurgerMenu />
        {children}
      </body>
    </html>
  );
}
