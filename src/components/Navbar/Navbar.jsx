import Link from "next/link";
import { Redressed } from "next/font/google";
import CardCount from "./CardCount";
import UserMenu from "./UserMenu";
import { getCurrentuser } from "../../../getUser/currentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = async () => {
  const currentUser = await getCurrentuser();
  return (
    <div className="w-full sticky top-0 shadow-sm bg-nav z-30">
      <div className="container mx-auto px-4 sm:px-0 py-4  ">
        <div className="flex justify-between items-center">
          <Link
            className={`${redressed.className} text-2xl text-white font-mono font-bold`}
            href="/"
          >
            E-Logos
          </Link>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <CardCount />
            </div>

            <div>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
