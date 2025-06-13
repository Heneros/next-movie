import React from "react";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        Docs First {slug[0]} second {slug[1]}{" "}
        {/* Docs First yestrerday second 5 */}
        {/* http://localhost:3000/docs/yestrerday/5 */}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>Docs {slug[0]}</div>;
    // Docs feature
    // http://localhost:3000/docs/feature
  }
  return <h1>Docs homepage</h1>;
}
