import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "../../provider/CartProvider";
import { getCurrentuser } from "../../getUser/currentUser";
import Navbar from "../components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-Shop",
  description: "Store for quality products and great deals",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentuser();

  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <div className="flex flex-col min-h-screen">
          <Toaster />
          <CartProvider>
            <Navbar currentUser={currentUser} />
            <main className="flex-grow pt-5 pb-20">{children}</main>
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
