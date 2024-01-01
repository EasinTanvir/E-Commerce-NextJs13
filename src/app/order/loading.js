import LoaderIcon from "@/components/LoaderIcon";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-[200px] flex flex-col gap-1">
        <LoaderIcon />
        <div className="text-xl text-slate-700 font-semibold">
          Please Wait..........
        </div>
      </div>
    </div>
  );
}
