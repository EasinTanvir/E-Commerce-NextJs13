import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin, AiBs } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <div className=" min-h-44 flex items-center">
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 py-4 px-6 justify-between ">
          <div className="flex gap-4 text-xs  ">
            <Link className="hover:scale-105 md:font-semibold" href="/">
              Phones
            </Link>
            <Link className="hover:scale-105 md:font-semibold" href="/">
              Laptop
            </Link>
            <Link className="hover:scale-105 md:font-semibold" href="/">
              Mobile
            </Link>
            <Link className="hover:scale-105 md:font-semibold" href="/">
              Glass
            </Link>
            <Link className="hover:scale-105 md:font-semibold" href="/">
              Mobile
            </Link>
          </div>

          <div className="w-full space-y-2 md:w-1/3">
            <h3 className="md:text-xl text-md font-bold">About Us</h3>
            <p className="text-xs ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum
              consequuntur sunt iure? Architecto cupiditate beatae et doloremque
              mollitia repellendus.
            </p>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} E-shop All Right Reserved
            </p>
          </div>
          <div>
            <h3 className="md:text-xl font-bold text-md">Follow Us</h3>
            <div className="flex items-center gap-2 mt-2">
              <Link className="hover:scale-105" href="/">
                {" "}
                <MdFacebook size="28px" />{" "}
              </Link>{" "}
              <Link className="hover:scale-105" href="/">
                {" "}
                <AiFillInstagram size="28px" />{" "}
              </Link>{" "}
              <Link className="hover:scale-105" href="/">
                {" "}
                <AiFillLinkedin size="28px" />{" "}
              </Link>
              <Link className="hover:scale-105" href="/">
                {" "}
                <BsWhatsapp size="26px" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
