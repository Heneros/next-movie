import { headers } from "next/headers";
// import { NextRequest } from "next/server";
export async function GET() {
  // export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Hello Profile!</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "JWT=token",
    },
  });
}
