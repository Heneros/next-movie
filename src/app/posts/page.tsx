import React from "react";

export default async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay");
    }, 2000);
  });
  return <div>page</div>;
}
