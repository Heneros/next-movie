import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ postId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).postId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Unique ${id}`);
    }, 100);
  });
  return {
    title: `Post ${title}`,
  };
};

async function MainPosts({
  params,
  searchParams,
}: {
  params: { postId: string };
  searchParams: { lang?: "eng" | "es" | "fr" };
}) {
  const postId = params.postId;
  const lang = searchParams.lang ?? "eng";
  return (
    <>
      page {postId}
      Language {lang}
      <br />
      <Link href={`/posts/${postId}?lang=eng`}>English</Link>
      <Link href={`/posts/${postId}?lang=es`}>Spanish</Link>
      <Link href={`/posts/${postId}?lang=fr`}>French</Link>
    </>
  );
}

export default MainPosts;
