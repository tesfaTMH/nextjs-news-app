import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl text-orange-700 font-bold">Not found!</h1>
      <p className="text-base">The requested resources could not be found.</p>
    </div>
  );
};

export default NotFoundPage;
