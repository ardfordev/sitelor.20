import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  const { unit, wilayah } = (await req.json()) as Partial<{
		unit: string;
		wilayah: string;
	}>;

  if(unit === "UID") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main a1 WHERE a1.ID IN (SELECT MAX(a2.id) FROM main a2 GROUP BY a2.PENYULANG) AND UID = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "UP3") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main a1 WHERE a1.ID IN (SELECT MAX(a2.id) FROM main a2 GROUP BY a2.PENYULANG) AND UP3 = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "ULP") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM main a1 WHERE a1.ID IN (SELECT MAX(a2.id) FROM main a2 GROUP BY a2.PENYULANG) AND ULP = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  }
    
}