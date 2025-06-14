import React from "react";
import { redirect } from "next/navigation";
// import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function PostReview({
  params,
}: {
  params: Promise<{ postId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random == 1) {
    throw new Error("Error loading review");
  }
  const { postId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    //   notFound();
    redirect("/posts");
  }
  return (
    <div>
      PostReview {postId},reviewid {reviewId}
    </div> ///PostReview 344,reviewid 35
  );
}
