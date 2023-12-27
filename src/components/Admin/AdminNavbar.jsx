"use client";
import AdminNavItems from "./AdminNavItems";
import Link from "next/link";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";
import { usePathname } from "next/navigation";
const AdminNavbar = () => {
  const path = usePathname();
  return (
    <div className="w-full shadow-sm top-20 pt-4 border-b-[1px]">
      <div className="container mx-auto">
        <div className="flex  flex-row items-center justify-between md:justify-center gap-8 md:gap-12 flex-nowrap overflow-x-auto">
          <Link href="/admin">
            <AdminNavItems
              label="Summary"
              selected={path === "/admin"}
              icon={MdDashboard}
            />
          </Link>{" "}
          <Link href="/admin/add-product">
            <AdminNavItems
              label="Add Product"
              selected={path === "/admin/add-product"}
              icon={MdLibraryAdd}
            />
          </Link>{" "}
          <Link href="/admin/manage-product">
            <AdminNavItems
              label="Manage Product"
              selected={path === "/admin/manage-product"}
              icon={MdDns}
            />
          </Link>{" "}
          <Link href="/admin/manage-order">
            <AdminNavItems
              label="Manage Order"
              selected={path === "/admin/manage-order"}
              icon={MdFormatListBulleted}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
