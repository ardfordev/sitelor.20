import React from 'react'
import PrediksiAIContent from './prediksiai-content'
import { getPageSession } from '@/auth/lucia';

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

export default async function PrediksiAIPage() {
  const session = await getPageSession();
  const data = await getData(session?.user.unit, session?.user.wilayah);

  return (
    <>
      <PrediksiAIContent data={data} />
    </>
  )
}
