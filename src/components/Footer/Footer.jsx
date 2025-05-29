import React from "react";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Main from "../Main";

const Footer = () => {
  return (
    <footer className="bg-nav text-slate-200 text-sm py-10 ">
      <Main className="mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between justify-center  md:items-start items-center gap-8 md:gap-0 ">
          {/* Categories */}
          <div className="flex-1">
            <ul className="flex justify-center flex-wrap gap-2 md:gap-4">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Phones
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Smart Watches
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Tablets
                </Link>
              </li>
            </ul>
          </div>

          {/* About Text */}
          <div className="flex-1   text-center">
            <p className=" text-sm text-slate-300">
              &copy; {new Date().getFullYear()} E-shop. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex-1">
            <div className="flex gap-4 mt-2 md:justify-end">
              <Link href="/" className="hover:scale-110 transition">
                <MdFacebook size={28} />
              </Link>
              <Link href="/" className="hover:scale-110 transition">
                <AiFillInstagram size={28} />
              </Link>
              <Link href="/" className="hover:scale-110 transition">
                <AiFillLinkedin size={28} />
              </Link>
              <Link href="/" className="hover:scale-110 transition">
                <BsWhatsapp size={26} />
              </Link>
            </div>
          </div>
        </div>
      </Main>
    </footer>
  );
};

export default Footer;
