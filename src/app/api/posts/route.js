import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({items: [
      {id:1, title:"Hello World"},
      {id:2, title:"Argentina is gonna lose"},
      {id:3, title:"Colombia wins"},
  ]})
}

// export async function POST() {
//   return NextResponse.json({hello: "POST"})
// }