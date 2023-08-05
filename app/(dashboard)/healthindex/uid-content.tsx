"use client"
import React, { useState } from 'react'
import { dataHealthIndex } from '@/types/allData'
import { Card, SearchSelect, SearchSelectItem, Title } from '@tremor/react';

interface UIDContent {
  data : dataHealthIndex
}

export default function UIDContent({data} : UIDContent) {
  const [value, setValue] = useState(data.allFeeder[0].PENYULANG);
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
    </div>
  )
}
