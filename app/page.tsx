import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import eastjavaMap from "@/public/map.png"
import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function HomePage() {
  return (
    <div className='w-full mb-10'>
      <Brand/>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            SITELOR.20
          </h1>
          <p className="text-lg text-muted-foreground">
            Sistem Informasi Technical Losses Realtime 20 KV
          </p>
        </div>
        <Link href='/login'>
          <Button className='w-32' variant="outline">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={eastjavaMap}
              alt="UP2D JATIM"
              className="rounded-md object-cover"
              priority
            />
          </AspectRatio>
        </div>
      </section>
    </div>
  )
}
