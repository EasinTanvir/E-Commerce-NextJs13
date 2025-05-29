export const dynamic = "force-static";
import CheckOutClient from "./CheckOutClient";
import FormWrapp from "../../components/FormWrapp";

const page = () => {
  return (
    <div className="md:p-8 px-2 py-4 min-h-screen">
      <CheckOutClient />
    </div>
  );
};

export default page;
