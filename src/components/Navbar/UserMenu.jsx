"use client";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserMenu = ({ currentUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="relative z-30 ">
      <div
        onClick={handleClick}
        className="border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
      >
        <Avatar alt={currentUser?.name} src={currentUser?.image} />
      </div>
      <Menu
        sx={{ width: "400px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { width: 160 },
        }}
      >
        {currentUser ? (
          <div>
            {" "}
            <Link href="/order">
              <MenuItem onClick={handleClose}>Your Orders</MenuItem>
            </Link>
            {currentUser?.role === "ADMIN" && (
              <Link href="/admin">
                <MenuItem onClick={handleClose}>Admins</MenuItem>
              </Link>
            )}
            <MenuItem
              onClick={() => {
                handleClose();
                signOut({ redirect: "/login" });
              }}
            >
              SignOut
            </MenuItem>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
            <Link href="/register">
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>
          </div>
        )}
      </Menu>
      {open && <BackDrop />}
    </div>
  );
};

export default UserMenu;
