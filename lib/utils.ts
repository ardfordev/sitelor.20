import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function CountStatusUP3(penyulang: any, status: string, up3: string): number {
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

export function CountStatusULP(penyulang: any, status: string, ulp: string): number {
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

export function CountStatusGI(penyulang: any, status: string, gi: string): number {
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

export function SUMEnergiBeliUP3(penyulang: any, up3: string): number {
  let totalKWPangkal = 0;
  for (const item of penyulang) {
    if (item.UP3 === up3) {
      totalKWPangkal += item.KW_PANGKAL;
    }
  }
  return totalKWPangkal;
}

export function SUMEnergiBeliULP(penyulang: any, ulp: string): number {
  let totalKWPangkal = 0;
  for (const item of penyulang) {
    if (item.ULP === ulp) {
      totalKWPangkal += item.KW_PANGKAL;
    }
  }
  return totalKWPangkal;
}

export function SUMEnergiBeliGI(penyulang: any, gi: string): number {
  let totalKWPangkal = 0;
  for (const item of penyulang) {
    if (item.GI === gi) {
      totalKWPangkal += item.KW_PANGKAL;
    }
  }
  return totalKWPangkal;
}

export function SUMEnergiJualUP3(penyulang: any, up3: string): number {
  let totalKWUjung = 0;
  for (const item of penyulang) {
    if (item.UP3 === up3) {
      totalKWUjung += item.KW_TENGAH;
      totalKWUjung += item.KW_UJUNG;
    }
  }
  return totalKWUjung;
}

export function SUMEnergiJualULP(penyulang: any, ulp: string): number {
  let totalKWUjung = 0;
  for (const item of penyulang) {
    if (item.ULP === ulp) {
      totalKWUjung += item.KW_TENGAH;
      totalKWUjung += item.KW_UJUNG;
    }
  }
  return totalKWUjung;
}

export function SUMEnergiJualGI(penyulang: any, gi: string): number {
  let totalKWUjung = 0;
  for (const item of penyulang) {
    if (item.GI === gi) {
      totalKWUjung += item.KW_TENGAH;
      totalKWUjung += item.KW_UJUNG;
    }
  }
  return totalKWUjung;
}

export function SUMLossUP3(penyulang: any, up3: string): number {
  let totalLoss = 0;
  for (const item of penyulang) {
    if (item.UP3 === up3) {
      totalLoss += item.GAP_KW;
    }
  }
  return totalLoss;
}

export function SUMLossULP(penyulang: any, ulp: string): number {
  let totalLoss = 0;
  for (const item of penyulang) {
    if (item.ULP === ulp) {
      totalLoss += item.GAP_KW;
    }
  }
  return totalLoss;
}

export function SUMLossGI(penyulang: any, gi: string): number {
  let totalLoss = 0;
  for (const item of penyulang) {
    if (item.GI === gi) {
      totalLoss += item.GAP_KW;
    }
  }
  return totalLoss;
}