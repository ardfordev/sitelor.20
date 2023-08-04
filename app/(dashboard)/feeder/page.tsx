import React from 'react'
import FeederContent from './feeder-content'
import { getPageSession } from '@/auth/lucia';
import { dataFeeder } from '@/types/allData';

async function getData(unit:any, wilayah:any) {
  const res = await fetch("http://localhost:3000/api/feeder", {
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

export default async function FeederPage() {
  const session = await getPageSession();
  const data = await getData(session?.user.unit, session?.user.wilayah);

  const Feeders = new Set(data.allPenyulang.map((feeder: { PENYULANG: string; }) => feeder.PENYULANG))

  const dataFeeder:dataFeeder = {
    Feeders: Feeders,
    allFeeder: data.allPenyulang
  }

  return (
    <>
      <FeederContent data={dataFeeder}/>
    </>
  )
}
