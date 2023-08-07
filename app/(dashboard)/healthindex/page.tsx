import React from 'react'
import { getPageSession } from '@/auth/lucia';
import UIDContent from './uid-content';
import UP3Content from './up3-content';
import ULPContent from './ulp-content';

async function getData(unit:any, wilayah:any) {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
		body: JSON.stringify({
			"unit": unit,
	    "wilayah": wilayah
		})
  })
  const json = await res.json();
  return json;
}

export default async function HealthIndexPage() {
  const session = await getPageSession();
  const data = await getData(session?.user.unit, session?.user.wilayah);

  const unit = session?.user.unit
  
  const dataHealthIndex = {
    unit: session?.user.unit,
    wilayah: session?.user.wilayah,
    allFeeder: data.allPenyulang
  }


  return (
    <>
      { unit === "UID" ? (
          <UIDContent data={dataHealthIndex} />
        ) : unit === "UP3" ? (
          <UP3Content data={dataHealthIndex} />
        ) : (
          <ULPContent data={dataHealthIndex} />
        )
      }
    </>
  )
}
