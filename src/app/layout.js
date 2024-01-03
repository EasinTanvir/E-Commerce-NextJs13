import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "../../provider/CartProvider";

import Navbar from "../components/Navbar/Navbar";
import { AuthProvider } from "../../libs/SessionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-Shop",
  description: "Best Shop on Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <div className="flex flex-col min-h-screen">
          {" "}
          <Toaster />
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
