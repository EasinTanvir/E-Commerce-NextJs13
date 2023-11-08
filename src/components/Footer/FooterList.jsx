import React from "react";

const FooterList = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex flex-col items-center gap-4">
      {children}
    </div>
  );
};

export default FooterList;
