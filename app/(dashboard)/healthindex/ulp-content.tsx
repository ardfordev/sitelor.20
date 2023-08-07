"use client"
import React, { useState } from 'react'
import { dataHealthIndex } from '@/types/allData'
import { Card, Grid, SearchSelect, SearchSelectItem, Title, Text } from '@tremor/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountStatusGI, CountStatusULP, SUMEnergiBeliGI, SUMEnergiBeliULP, SUMEnergiJualGI, SUMEnergiJualULP, SUMLossGI, SUMLossULP } from '@/lib/utils';

interface ULPContent {
  data : dataHealthIndex
}

export default function ULPContent({data} : ULPContent) {
  const [valueGI, setValueGI] = useState(data.allFeeder[0].GI);
  const [valuePenyulang, setValuePenyulang] = useState(data.allFeeder[0].PENYULANG);

  const GIList = new Set(data.allFeeder.map((feeder: { GI: string; }) => feeder.GI))
  const PenyulangList = new Set(data.allFeeder.map((feeder: { PENYULANG: string; }) => feeder.PENYULANG))

  const totalEnergiBeliGI = SUMEnergiBeliGI(data.allFeeder, valueGI).toFixed(2);
  
  const totalEnergiJualGI = SUMEnergiJualGI(data.allFeeder, valueGI).toFixed(2);
  
  const totalLossGI = SUMLossGI(data.allFeeder, valueGI).toFixed(2);
  
  const SehatGI = CountStatusGI(data.allFeeder, "sehat", valueGI)
  
  const SakitGI = CountStatusGI(data.allFeeder, "sakit", valueGI)
  
  const KronisGI = CountStatusGI(data.allFeeder, "kronis", valueGI)

  const HIpenyulang = data.allFeeder.find((p: { PENYULANG: string; }) => p.PENYULANG === valuePenyulang);

  return (
    <div className='container p-4'>
      <Tabs defaultValue="penyulang" className="w-full mb-28">
        <TabsList className="grid w-full md:w-1/2 grid-cols-2">
          <TabsTrigger value="penyulang">Penyulang</TabsTrigger>
          <TabsTrigger value="ulp">ULP</TabsTrigger>
        </TabsList>
        <TabsContent value="ulp">
          <Card className='mt-4'>
            <Title>Unit Layanan Pelanggan</Title>
            <SearchSelect className='mt-2' value={valueGI} onValueChange={setValueGI}>
              {Array.from(GIList).map((GI:any) => (
                <SearchSelectItem key={GI} value={GI}>
                  GI {GI}
                </SearchSelectItem>
              ))}
            </SearchSelect>           
          </Card>
          <Card className='mt-6'>
            <Title>Health Index</Title>
            <Grid numItems={2} className="gap-6 mt-4 items-center">
              <div className='text-2xl'>Energi Beli GI {valueGI}</div>
              <div className='text-right text-xl'>{totalEnergiBeliGI} kWH</div>
              <div className='text-2xl'>Energi Jual GI {valueGI} (&Sigma; SEGMEN)</div>
              <div className='text-right text-xl'>{totalEnergiJualGI} kWH</div>
            </Grid>
            <Grid numItemsSm={1} numItemsMd={2} className="gap-6 mt-4 items-center border-t">
              <div>
                <Grid numItemsSm={1} numItemsMd={4} className="gap-4 mt-4 items-center">
                  <div>Resume Health Index {valueGI}</div>
                  <div className='text-green-500'>Sehat : {SehatGI}</div>
                  <div className='text-yellow-500'>Sakit :  {SakitGI}</div>
                  <div className='text-red-500'>Kronis : {KronisGI}</div>
                </Grid>
              </div>
              <div>
                <Grid numItemsSm={1} numItemsMd={2} className="gap-4 mt-4 items-center">
                  <div>GAP LOSS TOTAL</div>
                  <div className='md:text-right'>{totalLossGI}</div>
                </Grid>
              </div>
            </Grid>
          </Card>
        </TabsContent>
        <TabsContent value="penyulang">
          <Card className='mt-4'>
            <Title>Penyulang</Title>
            <SearchSelect className='mt-2' value={valuePenyulang} onValueChange={setValuePenyulang}>
              {Array.from(PenyulangList).map((Penyulang:any) => (
                <SearchSelectItem key={Penyulang} value={Penyulang}>
                  Penyulang {Penyulang}
                </SearchSelectItem>
              ))}
            </SearchSelect>          
          </Card>
          <Card className='mt-6'>
            <Title>Health Index</Title>
            <Grid numItems={2} className="gap-6 mt-4 items-center">
              <div className='text-2xl'>Energi Beli Penyulang {valuePenyulang}</div>
              <div className='text-right text-xl'>{HIpenyulang.KW_PANGKAL} kWH</div>
              <div>Segment 1 {valuePenyulang}</div>
              <div className='text-right'>{HIpenyulang.KW_TENGAH} kWH</div>
              <div>Segment 2 {valuePenyulang}</div>
              <div className='text-right'>{HIpenyulang.KW_UJUNG} kWH</div>
              <div className='text-2xl'>Energi Jual (TUL 309) Penyulang {valuePenyulang}</div>
              <div className='text-right text-xl'>{(HIpenyulang.KW_TENGAH+HIpenyulang.KW_UJUNG).toFixed(2)} kWH</div>
            </Grid>
            <Grid numItemsSm={1} numItemsMd={2} className="gap-6 mt-4 items-center border-t">
              <div className='flex gap-4'>
                <div>Resume Health Index {valuePenyulang}</div>
                <div className={
                  (HIpenyulang.STATUS === 'sehat') ? "text-green-500 text-xl" : (HIpenyulang.STATUS === 'sakit') ? "text-yellow-500 text-xl" : "text-red-500 text-xl"}>{(HIpenyulang.STATUS).toUpperCase()}</div>
              </div>
              <div>
                <Grid numItems={2} className="gap-4 mt-4 items-center">
                  <div>GAP KW</div>
                  <div className='md:text-right'>{HIpenyulang.GAP_KW}</div>
                  <div>GAP %</div>
                  <div className='md:text-right'>{HIpenyulang.GAP_PERSEN} %</div>
                </Grid>
              </div>
            </Grid>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
