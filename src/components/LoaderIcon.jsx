"use client";
import { ProgressBar } from "react-loader-spinner";

const LoaderIcon = () => {
  return (
    <>
      {" "}
      <div>
        <ProgressBar
          visible={true}
          height="80"
          width="120"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default LoaderIcon;
