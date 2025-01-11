"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ModalBackdrop = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.85)] m-10 p-6 z-10"
      onClick={router.back}
    />
  );
};

export default ModalBackdrop;
