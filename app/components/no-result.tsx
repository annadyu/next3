import React from "react";

const NoResult = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <h1 className="text-blue-500 text-6xl font-bold">No result found!</h1>
      <h3 className="text-blue-500 text-4xl font-bold italic">Please try again!</h3>
    </div>
  );
};

export default NoResult;
