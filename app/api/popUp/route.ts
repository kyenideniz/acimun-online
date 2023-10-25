import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const get = await prismadb.approved.findMany({
    orderBy: {
      updatedAt:'desc',
    },
    take:4
  })
  return new NextResponse(JSON.stringify(get), { status: 200 });
}

export async function POST(req: Request) {
  try {
    console.log("waiting client")
    const resolution = await req.json()
    console.log("post data is: ", resolution)
    
    const create = await prismadb.approved.create({
      data: {
        mainSub: resolution.mainSub.label,
        committee: resolution.committee.label,
        resolutionNo: resolution.resolutionNo,
        questionOf: resolution.questionOf.value,
        coSubs: resolution.coSubs.label,
        link: resolution.link,
      },
    });
    console.log("created")
    return new NextResponse(JSON.stringify(create), { status: 200 });
  } catch (error) {
    console.log("error", error)  
  }
};

