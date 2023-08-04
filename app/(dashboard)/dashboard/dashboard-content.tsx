"use client"
import React from 'react'
import { Badge, Card, Flex, Grid, Legend, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { Activity, UtilityPole, Warehouse } from 'lucide-react';
import BarChart from '@/components/bar-chart';
import { ChartData } from '@/types/chart';
import { allData } from '@/types/allData';

interface DashboardContent {
  data: allData;
}

export default function DashboardContent({data}: DashboardContent) {

  const chartBarData: ChartData[] = [
    { name: 'Sehat', value: data.sumSehat },
    { name: 'Sakit', value: data.sumSakit },
    { name: 'Kronis', value: data.sumKronis },
  ];
  
  return (
    <div className='container p-4'>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Gardu Induk</Text>
              <Metric>{data.sumGI}</Metric>
            </div>
            <Warehouse className="h-4 w-4 text-muted-foreground" />
          </Flex>
        </Card>
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Total Feeder</Text>
              <Metric>{data.sumFeeder}</Metric>
            </div>
            <UtilityPole className="h-4 w-4 text-muted-foreground" />
          </Flex>
        </Card>
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Energi Beli/Jam</Text>
              <Metric>{data.sumEnergi}</Metric>
            </div>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </Flex>
        </Card>
      </Grid>
      <Card className="mt-6 mb-4">
        <Title>Overview</Title>
        <Legend
          className="mt-3"
          categories={["Sehat", "Sakit", "Kronis"]}
          colors={["green", "yellow", "red"]}
        />
        <BarChart data={chartBarData}/>
      </Card>
      <Card>
        <Title>Data Detail</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Penyulang</TableHeaderCell>
              <TableHeaderCell>GAP (%)</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>GI</TableHeaderCell>
              <TableHeaderCell>ULP</TableHeaderCell>
              <TableHeaderCell>UP3</TableHeaderCell>
              <TableHeaderCell>UID</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.allFeeder.map((data : any, index : number) => (
              <TableRow key={data.id}>
                <TableCell >{index+1}</TableCell>
                <TableCell>{data.PENYULANG}</TableCell>
                <TableCell>{data.GAP_PERSEN}%</TableCell>
                <TableCell>
                  <span className={
                  (data.STATUS === 'sehat') ? "bg-green-500 py-1 px-3 rounded-full" : (data.STATUS === 'sakit') ? "bg-yellow-500 py-1 px-3 rounded-full" : "bg-red-500 py-1 px-3 rounded-full"}>{data.STATUS}
                  </span>
                </TableCell>
                <TableCell>{data.GI}</TableCell>
                <TableCell>{data.ULP}</TableCell>
                <TableCell>{data.UP3}</TableCell>
                <TableCell>{data.UID}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
