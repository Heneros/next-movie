"use client";

import { useRouter } from "next/navigation";

import React from "react";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      OrderProduct
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
