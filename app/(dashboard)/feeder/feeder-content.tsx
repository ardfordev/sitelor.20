"use client"
import { dataFeeder } from '@/types/allData'
import { useState } from 'react'
import { Select, SelectItem, Card, Title} from "@tremor/react"
import Image from 'next/image'
import Penyulang from "@/public/penyulang.jpg"

interface FeederContent{
  data: dataFeeder
}

export default function FeederContent({data} : FeederContent) {
  const [value, setValue] = useState("");
  return (
    <div className='container p-4'>
      <Card className="w-full" decoration="top" decorationColor="yellow">
        <Title>Search</Title>
        <Select className='mt-2' value={value} onValueChange={setValue}>
          {Array.from(data.Feeders).map((penyulang:any) => (
            <SelectItem key={penyulang} value={penyulang}>
              {penyulang}
            </SelectItem>
          ))}
        </Select>
      </Card>
      <Card className='mt-4' decoration='top' decorationColor='yellow'>
        <div className='w-full flex justify-center items-center'>
          <div className='grid'>
            <div>
              <Image
                src={Penyulang}
                alt="Penyulang 1"
                width={939}
                className="rounded-md object-cover"
              />
            </div>
            <div className='flex justify-between p-3'>
              <div className='w-5 h-5 bg-red-500'></div>
              <div className='w-5 h-5 bg-yellow-500'></div>
              <div className='w-5 h-5 bg-green-500'></div>
            </div>
          </div>
          </div>
      </Card>
    </div>
  )
}
