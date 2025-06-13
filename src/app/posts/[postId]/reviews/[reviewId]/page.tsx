import React from "react";
import { notFound } from "next/navigation";

export default async function PostReview({
  params,
}: {
  params: Promise<{ postId: string; reviewId: string }>;
}) {
  const { postId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      PostReview {postId},reviewid {reviewId}
    </div> ///PostReview 344,reviewid 35
  );
}
