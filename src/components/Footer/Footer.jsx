import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin, AiBs } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h1 className="text-base font-bold">Shop Categories</h1>
            <Link href="/">Phones</Link>
            <Link href="/">Laptop</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Glass</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Mobile</Link>
          </FooterList>
          <FooterList>
            <h1 className="text-base font-bold">Shop Categories</h1>
            <Link href="/">Phones</Link>
            <Link href="/">Laptop</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Glass</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Mobile</Link>
          </FooterList>{" "}
          <div className="w-full md:w-1/3">
            <h3 className="text-base font-bold">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum
              consequuntur sunt iure? Architecto cupiditate beatae et doloremque
              mollitia repellendus.
            </p>
            <p>&copy; {new Date().getFullYear()} E-shop All Right Reserved</p>
          </div>
          <div>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex items-center gap-2">
              <Link href="/">
                {" "}
                <MdFacebook size="24px" />{" "}
              </Link>{" "}
              <Link href="/">
                {" "}
                <AiFillInstagram size="24px" />{" "}
              </Link>{" "}
              <Link href="/">
                {" "}
                <AiFillLinkedin size="24px" />{" "}
              </Link>
              <Link href="/">
                {" "}
                <BsWhatsapp size="22px" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
