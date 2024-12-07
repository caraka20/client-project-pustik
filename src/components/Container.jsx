import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" bg-gray-100 px-5 pt-5">
      {children}
    </div>
  );
};

export default Container;
