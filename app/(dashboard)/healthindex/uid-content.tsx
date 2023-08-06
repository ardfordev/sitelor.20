"use client"
import React, { useState } from 'react'
import { dataHealthIndex } from '@/types/allData'
import { Card, Grid, SearchSelect, SearchSelectItem, Title, Text } from '@tremor/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface UIDContent {
  data : dataHealthIndex
}

export default function UIDContent({data} : UIDContent) {
  const [valueUP3, setValueUP3] = useState(data.allFeeder[0].UP3);
  const [valueULP, setValueULP] = useState(data.allFeeder[0].ULP);
  const [valueGI, setValueGI] = useState(data.allFeeder[0].GI);
  const [valuePenyulang, setValuePenyulang] = useState(data.allFeeder[0].PENYULANG);

  const UP3List = new Set(data.allFeeder.map((feeder: { UP3: string; }) => feeder.UP3))
  const ULPList = new Set(data.allFeeder.map((feeder: { ULP: string; }) => feeder.ULP))
  const GIList = new Set(data.allFeeder.map((feeder: { GI: string; }) => feeder.GI))
  const PenyulangList = new Set(data.allFeeder.map((feeder: { PENYULANG: string; }) => feeder.PENYULANG))

  function CountStatusUP3(penyulang: any, status: string, up3: string): number {
    let totalStatus = 0;
    for (const item of penyulang) {
      if (item.UP3 === up3) {
        if (item.STATUS === status) {
          totalStatus += 1;
        }
      }
    }
    return totalStatus;
  }

  function CountStatusULP(penyulang: any, status: string, ulp: string): number {
    let totalStatus = 0;
    for (const item of penyulang) {
      if (item.ULP === ulp) {
        if (item.STATUS === status) {
          totalStatus += 1;
        }
      }
    }
    return totalStatus;
  }
  
  function CountStatusGI(penyulang: any, status: string, gi: string): number {
    let totalStatus = 0;
    for (const item of penyulang) {
      if (item.GI === gi) {
        if (item.STATUS === status) {
          totalStatus += 1;
        }
      }
    }
    return totalStatus;
  }

  function SUMEnergiBeliUP3(penyulang: any, up3: string): number {
    let totalKWPangkal = 0;
    for (const item of penyulang) {
      if (item.UP3 === up3) {
        totalKWPangkal += item.KW_PANGKAL;
      }
    }
    return totalKWPangkal;
  }
  
  function SUMEnergiBeliULP(penyulang: any, ulp: string): number {
    let totalKWPangkal = 0;
    for (const item of penyulang) {
      if (item.ULP === ulp) {
        totalKWPangkal += item.KW_PANGKAL;
      }
    }
    return totalKWPangkal;
  }
  
  function SUMEnergiBeliGI(penyulang: any, gi: string): number {
    let totalKWPangkal = 0;
    for (const item of penyulang) {
      if (item.GI === gi) {
        totalKWPangkal += item.KW_PANGKAL;
      }
    }
    return totalKWPangkal;
  }

  function SUMEnergiJualUP3(penyulang: any, up3: string): number {
    let totalKWUjung = 0;
    for (const item of penyulang) {
      if (item.UP3 === up3) {
        totalKWUjung += item.KW_TENGAH;
        totalKWUjung += item.KW_UJUNG;
      }
    }
    return totalKWUjung;
  }
  
  function SUMEnergiJualULP(penyulang: any, ulp: string): number {
    let totalKWUjung = 0;
    for (const item of penyulang) {
      if (item.ULP === ulp) {
        totalKWUjung += item.KW_TENGAH;
        totalKWUjung += item.KW_UJUNG;
      }
    }
    return totalKWUjung;
  }
  
  function SUMEnergiJualGI(penyulang: any, gi: string): number {
    let totalKWUjung = 0;
    for (const item of penyulang) {
      if (item.GI === gi) {
        totalKWUjung += item.KW_TENGAH;
        totalKWUjung += item.KW_UJUNG;
      }
    }
    return totalKWUjung;
  }
  
  function SUMLossUP3(penyulang: any, up3: string): number {
    let totalLoss = 0;
    for (const item of penyulang) {
      if (item.UP3 === up3) {
        totalLoss += item.GAP_KW;
      }
    }
    return totalLoss;
  }
  
  function SUMLossULP(penyulang: any, ulp: string): number {
    let totalLoss = 0;
    for (const item of penyulang) {
      if (item.UP3 === ulp) {
        totalLoss += item.GAP_KW;
      }
    }
    return totalLoss;
  }
  
  function SUMLossGI(penyulang: any, gi: string): number {
    let totalLoss = 0;
    for (const item of penyulang) {
      if (item.GI === gi) {
        totalLoss += item.GAP_KW;
      }
    }
    return totalLoss;
  }

  const totalEnergiBeliUP3 = SUMEnergiBeliUP3(data.allFeeder, valueUP3).toFixed(2);
  const totalEnergiBeliULP = SUMEnergiBeliULP(data.allFeeder, valueULP).toFixed(2);
  const totalEnergiBeliGI = SUMEnergiBeliGI(data.allFeeder, valueGI).toFixed(2);
  
  const totalEnergiJualUP3 = SUMEnergiJualUP3(data.allFeeder, valueUP3).toFixed(2);
  const totalEnergiJualULP = SUMEnergiJualULP(data.allFeeder, valueULP).toFixed(2);
  const totalEnergiJualGI = SUMEnergiJualGI(data.allFeeder, valueGI).toFixed(2);
  
  const totalLossUP3 = SUMLossUP3(data.allFeeder, valueUP3).toFixed(2);
  const totalLossULP = SUMLossULP(data.allFeeder, valueULP).toFixed(2);
  const totalLossGI = SUMLossGI(data.allFeeder, valueGI).toFixed(2);
  
  const SehatUP3 = CountStatusUP3(data.allFeeder, "sehat", valueUP3)
  const SehatULP = CountStatusULP(data.allFeeder, "sehat", valueULP)
  const SehatGI = CountStatusGI(data.allFeeder, "sehat", valueGI)
  
  const SakitUP3 = CountStatusUP3(data.allFeeder, "sakit", valueUP3)
  const SakitULP = CountStatusULP(data.allFeeder, "sakit", valueULP)
  const SakitGI = CountStatusGI(data.allFeeder, "sakit", valueGI)
  
  const KronisUP3 = CountStatusUP3(data.allFeeder, "kronis", valueUP3)
  const KronisULP = CountStatusULP(data.allFeeder, "kronis", valueULP)
  const KronisGI = CountStatusGI(data.allFeeder, "kronis", valueGI)

  const HIpenyulang = data.allFeeder.find((p: { PENYULANG: string; }) => p.PENYULANG === valuePenyulang);

  return (
    <div className='container p-4'>
      <Tabs defaultValue="penyulang" className="w-full mb-28">
        <TabsList className="grid w-full md:w-1/2 grid-cols-4">
          <TabsTrigger value="penyulang">Penyulang</TabsTrigger>
          <TabsTrigger value="ulp">ULP</TabsTrigger>
          <TabsTrigger value="up3">UP3</TabsTrigger>
          <TabsTrigger value="uid">UID</TabsTrigger>
        </TabsList>
        <TabsContent value="uid">
          <Card className='mt-4'>
            <Title>Unit Induk Distribusi</Title>
            <SearchSelect className='mt-2' value={valueUP3} onValueChange={setValueUP3}>
              {Array.from(UP3List).map((UP3:any) => (
                <SearchSelectItem key={UP3} value={UP3}>
                  UP3 {UP3}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Card>
          <Card className='mt-6'>
            <Title>Health Index</Title>
            <Grid numItems={2} className="gap-6 mt-4 items-center">
              <div className='text-2xl'>Energi Beli UP3 {valueUP3}</div>
              <div className='text-right text-xl'>{totalEnergiBeliUP3} kWH</div>
              <div className='text-2xl'>Energi Jual UP3 {valueUP3} (&Sigma; SEGMEN)</div>
              <div className='text-right text-xl'>{totalEnergiJualUP3} kWH</div>
            </Grid>
            <Grid numItemsSm={1} numItemsMd={2} className="gap-6 mt-4 items-center border-t">
              <div>
                <Grid numItemsSm={1} numItemsMd={4} className="gap-4 mt-4 items-center">
                  <div>Resume Health Index {valueUP3}</div>
                  <div className='text-green-500'>Sehat : {SehatUP3}</div>
                  <div className='text-yellow-500'>Sakit :  {SakitUP3}</div>
                  <div className='text-red-500'>Kronis : {KronisUP3}</div>
                </Grid>
              </div>
              <div>
                <Grid numItemsSm={1} numItemsMd={2} className="gap-4 mt-4 items-center">
                  <div>GAP LOSS TOTAL</div>
                  <div className='md:text-right'>{totalLossUP3}</div>
                </Grid>
              </div>
            </Grid>
          </Card>
        </TabsContent>
        <TabsContent value="up3">
          <Card className='mt-4'>
            <Title>Unit Pelaksana Pelayanan Pelanggan</Title>
            <SearchSelect className='mt-2' value={valueULP} onValueChange={setValueULP}>
              {Array.from(ULPList).map((ULP:any) => (
                <SearchSelectItem key={ULP} value={ULP}>
                  ULP {ULP}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Card>
          <Card className='mt-6'>
            <Title>Health Index</Title>
            <Grid numItems={2} className="gap-6 mt-4 items-center">
              <div className='text-2xl'>Energi Beli ULP {valueULP}</div>
              <div className='text-right text-xl'>{totalEnergiBeliULP} kWH</div>
              <div className='text-2xl'>Energi Jual ULP {valueULP} (&Sigma; SEGMEN)</div>
              <div className='text-right text-xl'>{totalEnergiJualULP} kWH</div>
            </Grid>
            <Grid numItemsSm={1} numItemsMd={2} className="gap-6 mt-4 items-center border-t">
              <div>
                <Grid numItemsSm={1} numItemsMd={4} className="gap-4 mt-4 items-center">
                  <div>Resume Health Index {valueULP}</div>
                  <div className='text-green-500'>Sehat : {SehatULP}</div>
                  <div className='text-yellow-500'>Sakit :  {SakitULP}</div>
                  <div className='text-red-500'>Kronis : {KronisULP}</div>
                </Grid>
              </div>
              <div>
                <Grid numItemsSm={1} numItemsMd={2} className="gap-4 mt-4 items-center">
                  <div>GAP LOSS TOTAL</div>
                  <div className='md:text-right'>{totalLossULP}</div>
                </Grid>
              </div>
            </Grid>
          </Card>
        </TabsContent>
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
