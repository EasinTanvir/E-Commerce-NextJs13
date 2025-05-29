export const dynamic = "force-static";
import CheckOutClient from "./CheckOutClient";
import FormWrapp from "../../components/FormWrapp";
import Main from "@/components/Main";

const page = () => {
  return (
    <Main className="mx-auto px-2 py-4 min-h-screen">
      <CheckOutClient />
    </Main>
  );
};

export default page;
