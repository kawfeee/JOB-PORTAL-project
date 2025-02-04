import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/Carousel'
import companies from '../data/companies.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import faq from '../data/faq.json'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get Hired
            
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant='blue' size='xl'>Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button size='xl' variant='destructive'>Post a Job</Button>
        </Link>
      </div>

        {/* carousel */}

      <Carousel 
        plugins={[Autoplay({ delay: 2000})]}
        className="w-full py-10">
        
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({name, id, path})=>{
            return(
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img src={path} alt={name} className='h-9 sm:h-14 object-contain'/>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img src="/banner.jpeg" className='w-full' />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track appliaction, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Employers</CardTitle>
          </CardHeader>
          <CardContent>
          Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      <Accordion type="multiple" className="w-full">
        {faq.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

export default LandingPage