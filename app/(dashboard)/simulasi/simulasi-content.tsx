import { Card, Title, Text, AccordionList, Accordion, AccordionHeader, AccordionBody } from '@tremor/react'
import React from 'react'

export default function SimulasiContent() {
  return (
    <div className='container p-4'>
      <Card className='mb-72'>
        <Title>Simulasi Page</Title>
        <AccordionList className="w-full mx-auto mt-4">
          <Accordion>
            <AccordionHeader>Simulasi 1</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
              congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Simulasi 2</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
              congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Simulasi 3</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
              congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </Card>
    </div>
  )
}
