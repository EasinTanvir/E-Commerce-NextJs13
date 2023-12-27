import AdminNavbar from "../../components/Admin/AdminNavbar";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin Dashboard",
};

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
