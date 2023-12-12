import Link from "next/link";
import { Redressed } from "next/font/google";
import CardCount from "./CardCount";
import UserMenu from "./UserMenu";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 shadow-sm bg-slate-300 z-30">
      <div className="container mx-auto px-4 sm:px-0 py-4 border-b-[1px] ">
        <div className="flex justify-between items-center">
          <Link
            className={`${redressed.className} text-2xl font-bold`}
            href="/"
          >
            E-Logo
          </Link>
          <div className="hidden lg:block">Search</div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <CardCount />
            </div>

            <div>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
