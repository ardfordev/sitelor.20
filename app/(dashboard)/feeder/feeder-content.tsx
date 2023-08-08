"use client"
import { dataFeeder } from '@/types/allData'
import { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { Card, Title, SearchSelect, SearchSelectItem, Grid, LineChart, Metric, Flex} from "@tremor/react"
import Image from 'next/image'
import Penyulang from "@/public/penyulang.jpg"

interface FeederContent{
  data: dataFeeder
}

export default function FeederContent({data} : FeederContent) {
  const [value, setValue] = useState(data.allFeeder[0].PENYULANG);
  const hasilPencarian = data.allFeeder.filter((penyulang: { PENYULANG: any }) => penyulang.PENYULANG === value);
  const chartdata = hasilPencarian.map((penyulang: { TIME: any; V_PANGKAL: any; I_PANGKAL: any; COSP_PANGKAL: any; V_TENGAH: any; I_TENGAH: any; COSP_TENGAH: any; V_UJUNG: any; I_UJUNG: any; COSP_UJUNG: any;}) => ({
    time: format(parseISO(penyulang.TIME), 'HH:mm:ss dd-MM-yyyy'), // Memetakan properti TIME ke dalam properti Time pada chartdata
    "V_PANGKAL": penyulang.V_PANGKAL, // Memetakan properti V_PANGKAL ke dalam properti V_PANGKAL pada chartdata
    "I_PANGKAL": penyulang.I_PANGKAL, // Memetakan properti I_PANGKAL ke dalam properti I_PANGKAL pada chartdata
    "COSP_PANGKAL": penyulang.COSP_PANGKAL, // Memetakan properti COSP_PANGKAL ke dalam properti COSP_PANGKAL pada chartdata
    "V_TENGAH": penyulang.V_TENGAH, // Memetakan properti V_TENGAH ke dalam properti V_TENGAH pada chartdata
    "I_TENGAH": penyulang.I_TENGAH, // Memetakan properti I_TENGAH ke dalam properti I_TENGAH pada chartdata
    "COSP_TENGAH": penyulang.COSP_TENGAH, // Memetakan properti COSP_TENGAH ke dalam properti COSP_TENGAH pada chartdata
    "V_UJUNG": penyulang.V_UJUNG, // Memetakan properti V_UJUNG ke dalam properti V_UJUNG pada chartdata
    "I_UJUNG": penyulang.I_UJUNG, // Memetakan properti I_UJUNG ke dalam properti I_UJUNG pada chartdata
    "COSP_UJUNG": penyulang.COSP_UJUNG, // Memetakan properti COSP_UJUNG ke dalam properti COSP_UJUNG pada chartdata
  }));

  const maxIndex:number = chartdata.length-1;
  
  return (
    <div className='container p-4'>
      <Card className="w-full" decoration="top" decorationColor="yellow">
        <Title>Search</Title>
        <SearchSelect className='mt-2' value={value} onValueChange={setValue}>
          {Array.from(data.Feeders).map((penyulang:any) => (
            <SearchSelectItem key={penyulang} value={penyulang}>
              Penyulang {penyulang}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </Card>
      <Card className='mt-4'>
        <Title>Penyulang {value}</Title>
        <div className='w-full flex justify-center items-center mt-2'>
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
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card decoration='top' decorationColor='red'>
          <Title>Titik Pangkal</Title>
          <Flex className='justify-arround mt-4 gap-6'>
            <Card>
              <Metric>{chartdata[maxIndex].V_PANGKAL}</Metric>
              <Title>KV</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].I_PANGKAL}</Metric>
              <Title>A</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].COSP_PANGKAL}</Metric>
              <Title>‎</Title>
            </Card>
          </Flex>
          <LineChart
            className="mt-6"
            data={chartdata}
            index="time"
            categories={["V_PANGKAL", "I_PANGKAL"]}
            colors={["blue", "orange"]}
            yAxisWidth={40}
          />
        </Card>
        <Card decoration='top' decorationColor='yellow'>
          <Title>Segment 1</Title>
          <Flex className='justify-arround mt-4 gap-6'>
            <Card>
              <Metric>{chartdata[maxIndex].V_TENGAH}</Metric>
              <Title>KV</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].I_TENGAH}</Metric>
              <Title>A</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].COSP_TENGAH}</Metric>
              <Title>‎</Title>
            </Card>
          </Flex>
          <LineChart
            className="mt-6"
            data={chartdata}
            index="time"
            categories={["V_TENGAH", "I_TENGAH"]}
            colors={["blue", "orange"]}
            yAxisWidth={40}
          />
        </Card>
        <Card decoration='top' decorationColor='green'>
          <Title>Segment 2</Title>
          <Flex className='justify-arround mt-4 gap-6'>
            <Card>
              <Metric>{chartdata[maxIndex].V_UJUNG}</Metric>
              <Title>KV</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].I_UJUNG}</Metric>
              <Title>A</Title>
            </Card>
            <Card>
              <Metric>{chartdata[maxIndex].COSP_UJUNG}</Metric>
              <Title>‎</Title>
            </Card>
          </Flex>
          <LineChart
            className="mt-6"
            data={chartdata}
            index="time"
            categories={["V_UJUNG", "I_UJUNG"]}
            colors={["blue", "orange"]}
            yAxisWidth={40}
          />
        </Card>
      </Grid>
    </div>
  )
}
