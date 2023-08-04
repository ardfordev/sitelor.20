import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  const { unit, wilayah } = (await req.json()) as Partial<{
		unit: string;
		wilayah: string;
	}>;

  if(unit === "UID") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM (SELECT *, CAST(ROW_NUMBER() OVER (PARTITION BY PENYULANG ORDER BY id DESC) AS CHAR) AS row_num FROM main) AS ranked WHERE CAST(row_num AS UNSIGNED) <= 2 AND UID = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "UP3") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM (SELECT *, CAST(ROW_NUMBER() OVER (PARTITION BY PENYULANG ORDER BY id DESC) AS CHAR) AS row_num FROM main) AS ranked WHERE CAST(row_num AS UNSIGNED) <= 2 AND UP3 = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  } else if (unit === "ULP") {
    const allPenyulang = await prisma.$queryRaw`SELECT * FROM (SELECT *, CAST(ROW_NUMBER() OVER (PARTITION BY PENYULANG ORDER BY id DESC) AS CHAR) AS row_num FROM main) AS ranked WHERE CAST(row_num AS UNSIGNED) <= 2 AND ULP = ${wilayah}`
    return NextResponse.json({ allPenyulang })
  }
    
}