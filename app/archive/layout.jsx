import React from "react";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-5xl mx-auto">
      <h1 className="text-3xl text-gray-300 underline">News Archive</h1>
      <section className="border-b-4 w-full text-center">{archive}</section>
      <section>{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
