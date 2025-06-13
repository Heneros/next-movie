import Link from "next/link";
import React from "react";

export const metadata ={
  title: "Homepage",
  description: "About project"
}

const HelloWorld = () => {
  return (
    <div>
           <h1>Hello World</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default HelloWorld;
