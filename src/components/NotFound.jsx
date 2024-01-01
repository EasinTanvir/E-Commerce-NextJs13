import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[600px]">
      <h1 className="text-red-700 text-4xl font-semibold">Invalid Segment</h1>
      <Link href="/">
        <button className="bg-teal-700 text-white px-4 py-1 rounded-md">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
