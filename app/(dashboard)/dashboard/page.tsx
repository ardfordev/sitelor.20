import React from 'react'
import DashboardContent from './dashboard-content';
import { getPageSession } from '@/auth/lucia';
import { allData } from '@/types/allData';

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

export default async function DashboardPage() {
  const session = await getPageSession();
  const data = await getData(session?.user.unit, session?.user.wilayah);
  
  const jumlahGarduInduk = (new Set(data.allPenyulang.map((feeder: { GI: string; }) => feeder.GI))).size;
  const jumlahFeeder = (new Set(data.allPenyulang.map((feeder: { PENYULANG: string; }) => feeder.PENYULANG))).size;
  const jumlahEnergi = data.allPenyulang.reduce((total: any, feeder: { KW_PANGKAL: any; }) => total + feeder.KW_PANGKAL, 0);
  const jumlahSehat = data.allPenyulang.filter((feeder: { STATUS: string; }) => feeder.STATUS === 'sehat').length;
  const jumlahSakit = data.allPenyulang.filter((feeder: { STATUS: string; }) => feeder.STATUS === 'sakit').length;
  const jumlahKronis = data.allPenyulang.filter((feeder: { STATUS: string; }) => feeder.STATUS === 'kronis').length;
  
  const allData:allData = {
    sumGI : jumlahGarduInduk,
    sumFeeder : jumlahFeeder,
    sumEnergi : jumlahEnergi,
    sumSehat : jumlahSehat,
    sumSakit : jumlahSakit,
    sumKronis : jumlahKronis,
    allFeeder: data.allPenyulang,
  }

  return (
    <>
      <DashboardContent data={allData} />
    </>
  )
}
