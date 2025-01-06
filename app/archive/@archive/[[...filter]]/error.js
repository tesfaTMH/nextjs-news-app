"use client";
import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-5xl text-red-700">An error occurred!</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
