import React from "react";

const Main = ({ children, className = "" }) => {
  return (
    <div className={`lg:max-w-[1420px] w-full xl:p-0 p-2 ${className}`}>
      {children}
    </div>
  );
};

export default Main;
