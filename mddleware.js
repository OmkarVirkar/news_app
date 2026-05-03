import { NextResponse } from "next/server";

export function middleware(request) {
  //   const { pathname } = request.nextUrl;
  console.log(request);
  return NextResponse.next();
}

export const config = {
  matcher: ["/news", "/archive"],
};
