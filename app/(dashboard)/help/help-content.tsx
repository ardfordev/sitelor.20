import { buttonVariants } from '@/components/ui/button'
import { Card, Flex, Title, Text } from '@tremor/react'
import Link from 'next/link'
import React from 'react'

export default function HelpContent() {
  return (
    <div className='container p-4'>
      <div className='mb-96'>
        <Card className="w-full mx-auto">
          <Title>Help Page</Title>
          <div className='mt-4'>
            <Text>Download Manual Book</Text>
            <Link target="_blank" href="/manual.pdf" className={buttonVariants({ variant: "outline" })}>Click here</Link>
          </div>          
        </Card>
      </div>
    </div>
  )
}
