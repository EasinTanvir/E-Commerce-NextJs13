import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "../../provider/CartProvider";
import { getCurrentuser } from "../../getUser/currentUser";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Ecommerce app",
  description: "easintanvir",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentuser();

  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <div className="flex flex-col min-h-screen">
          {" "}
          <Toaster />
          <CartProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
