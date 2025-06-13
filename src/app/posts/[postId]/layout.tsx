import React from "react";

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h5>Featured posts</h5>
    </>
  );
}
