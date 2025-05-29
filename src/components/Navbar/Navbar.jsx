"use client";
import Link from "next/link";
import { Redressed } from "next/font/google";
import { usePathname } from "next/navigation";
import CardCount from "./CardCount";
import UserMenu from "./UserMenu";
import { getCurrentuser } from "../../../getUser/currentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import BackDrop from "./BackDrop";
import Main from "../Main";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = ({ currentUser }) => {
  const path = usePathname();
  console.log(path);
  const [open, setOpen] = useState(false);
  const [searchbarOpen, setSearchBarOpen] = useState(false);
  const onClickHanler = () => {
    setOpen(!open);
  };

  const onSearchHandler = () => {
    setSearchBarOpen(!searchbarOpen);
  };
  return (
    <div className="w-full sticky top-0 shadow-sm bg-nav z-40">
      <Main className="mx-auto px-4 sm:px-0  z-40   !py-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`lg:hidden  ${path === "/" ? "block" : "hidden"}`}>
              {open ? (
                <IoMdClose
                  onClick={onClickHanler}
                  size={28}
                  className="text-white z-50 cursor-pointer font-bold"
                />
              ) : (
                <FaList
                  onClick={onClickHanler}
                  size={22}
                  className="text-white cursor-pointer"
                />
              )}
            </div>
            <Link
              className={`${redressed.className} text-2xl text-white font-mono font-bold`}
              href="/"
            >
              E-Shop
            </Link>
          </div>

          <div className={`${!searchbarOpen ? "lg:block hidden" : "block"}`}>
            {path === "/" && <SearchBar />}
          </div>

          <div className="flex items-center gap-6 lg:gap-12">
            {path === "/" && (
              <div className=" block lg:hidden ">
                {searchbarOpen ? (
                  <IoMdClose
                    onClick={onSearchHandler}
                    size={28}
                    className="text-white cursor-pointer font-bold"
                  />
                ) : (
                  <FaSearch
                    onClick={onSearchHandler}
                    size={22}
                    className="text-white cursor-pointer"
                  />
                )}
              </div>
            )}
            <div>
              <CardCount />
            </div>

            <div>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </Main>
      <Categories open={open} setOpen={setOpen} searchbarOpen={searchbarOpen} />
      {open && <BackDrop data={true} />}
    </div>
  );
};

export default Navbar;
