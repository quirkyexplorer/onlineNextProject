import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({items: [{id: 1, title: 'hello world'}]})
}

// export async function POST() {
//   return NextResponse.json({hello: "POST"})
// }