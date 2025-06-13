"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h2>Not Found</h2>
      productId {productId}
      Review Page
      {reviewId}
    </div>
  );
}
