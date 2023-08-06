"use client"
import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Flex,
  DeltaType,
  Card,
  MultiSelect,
  Select,
  SelectItem,
  MultiSelectItem,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { format, parseISO } from 'date-fns'
import { useState } from "react";
import { allData } from "@/types/allData";
import { ScrollArea } from "@/components/ui/scroll-area";

export type PenyulangData = {
  id: number;
  PENYULANG: string;
  GI: string;
  ULP: string;
  UP3: string;
  UID: string;
  V_PANGKAL: number;
  I_PANGKAL: number;
  COSP_PANGKAL: number;
  KW_PANGKAL: number;
  TITIK_TENGAH: string;
  V_TENGAH: number;
  I_TENGAH: number;
  COSP_TENGAH: number;
  KW_TENGAH: number;
  TITIK_UJUNG: string;
  V_UJUNG: number;
  I_UJUNG: number;
  COSP_UJUNG: number;
  KW_UJUNG: number;
  GAP_KW: number;
  GAP_PERSEN: number;
  STATUS: string;
  TIME: any;
};

const deltaTypes: { [key: string]: DeltaType } = {
  sakit: "unchanged",
  sehat: "moderateIncrease",
  kronis: "moderateDecrease",
};

export default function PrediksiAIContent({data} : any) {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPenyulang, setSelectedPenyulang] = useState<string[]>([]);

  const Feeders = new Set(data.allPenyulang.map((feeder: { PENYULANG: string; }) => feeder.PENYULANG))

  const isSalesPersonSelected = (penyulang: PenyulangData) =>
    (penyulang.STATUS === selectedStatus || selectedStatus === "all") &&
    (selectedPenyulang.includes(penyulang.PENYULANG) || selectedPenyulang.length === 0);

  return (
    <div className="container p-4">
      <Card>
        <div>
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title>Penyulang Performance History</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows performance per penyulang"
            />
          </Flex>
        </div>
        <div className="flex space-x-2">
          <MultiSelect
            className="max-w-full sm:max-w-xs"
            onValueChange={setSelectedPenyulang}
            placeholder="Pilih Nama Penyulang..."
          >
            {Array.from(Feeders).map((item : any) => (
              <MultiSelectItem key={item} value={item}>
                {item}
              </MultiSelectItem>
            ))}
          </MultiSelect>
          <Select
            className="max-w-full sm:max-w-xs"
            defaultValue="all"
            onValueChange={setSelectedStatus}
          >
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="sehat">Sehat</SelectItem>
            <SelectItem value="sakit">Sakit</SelectItem>
            <SelectItem value="kronis">Kronis</SelectItem>
          </Select>
        </div>
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Penyulang</TableHeaderCell>
              <TableHeaderCell>GI</TableHeaderCell>
              <TableHeaderCell>ULP</TableHeaderCell>
              <TableHeaderCell>UP3</TableHeaderCell>
              <TableHeaderCell>UID</TableHeaderCell>
              <TableHeaderCell className="text-right">V PANGKAL</TableHeaderCell>
              <TableHeaderCell className="text-right">I PANGKAL</TableHeaderCell>
              <TableHeaderCell className="text-right">COSP PANGKAL</TableHeaderCell>
              <TableHeaderCell className="text-right">KW PANGKAL</TableHeaderCell>
              <TableHeaderCell>TITIK TENGAH</TableHeaderCell>
              <TableHeaderCell className="text-right">V TENGAH</TableHeaderCell>
              <TableHeaderCell className="text-right">I TENGAH</TableHeaderCell>
              <TableHeaderCell className="text-right">COSP TENGAH</TableHeaderCell>
              <TableHeaderCell className="text-right">KW TENGAH</TableHeaderCell>
              <TableHeaderCell>TITIK UJUNG</TableHeaderCell>
              <TableHeaderCell className="text-right">V UJUNG</TableHeaderCell>
              <TableHeaderCell className="text-right">I UJUNG</TableHeaderCell>
              <TableHeaderCell className="text-right">COSP UJUNG</TableHeaderCell>
              <TableHeaderCell className="text-right">KW UJUNG</TableHeaderCell>
              <TableHeaderCell className="text-right">GAP KW</TableHeaderCell>
              <TableHeaderCell className="text-right">GAP PERSEN</TableHeaderCell>
              <TableHeaderCell className="text-right">STATUS</TableHeaderCell>
              <TableHeaderCell>TIME</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.allPenyulang
              .filter((item: PenyulangData) => isSalesPersonSelected(item))
              .map((item: PenyulangData) => (
              <TableRow key={item.id}>
                <TableCell>{item.PENYULANG}</TableCell>
                <TableCell>{item.GI}</TableCell>
                <TableCell>{item.ULP}</TableCell>
                <TableCell>{item.UP3}</TableCell>
                <TableCell>{item.UID}</TableCell>
                <TableCell className="text-right">{item.V_PANGKAL}</TableCell>
                <TableCell className="text-right">{item.I_PANGKAL}</TableCell>
                <TableCell className="text-right">{item.COSP_PANGKAL}</TableCell>
                <TableCell className="text-right">{item.KW_PANGKAL}</TableCell>
                <TableCell>{item.TITIK_TENGAH}</TableCell>
                <TableCell className="text-right">{item.V_TENGAH}</TableCell>
                <TableCell className="text-right">{item.I_TENGAH}</TableCell>
                <TableCell className="text-right">{item.COSP_TENGAH}</TableCell>
                <TableCell className="text-right">{item.KW_TENGAH}</TableCell>
                <TableCell>{item.TITIK_UJUNG}</TableCell>
                <TableCell className="text-right">{item.V_UJUNG}</TableCell>
                <TableCell className="text-right">{item.I_UJUNG}</TableCell>
                <TableCell className="text-right">{item.COSP_UJUNG}</TableCell>
                <TableCell className="text-right">{item.KW_UJUNG}</TableCell>
                <TableCell className="text-right">{item.GAP_KW}</TableCell>
                <TableCell className="text-right">{item.GAP_PERSEN}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.STATUS]} size="xs">
                    {item.STATUS}
                  </BadgeDelta>
                </TableCell>
                <TableCell>{format(parseISO(item.TIME), 'HH:mm:ss dd-MM-yyyy')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
