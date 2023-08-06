import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  const { unit, wilayah } = (await req.json()) as Partial<{
		unit: string;
		wilayah: string;
	}>;

  if(unit === "UID") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main WHERE UID = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "UP3") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main WHERE UP3 = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "ULP") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main WHERE ULP = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  }
    
}