"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Regular check-ups, cleanings, and preventative care for your dental health.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, and other cosmetic procedures.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Orthodontics",
    description: "Straighten your teeth with braces, aligners, and other orthodontic treatments.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Oral Surgery",
    description: "Expert surgical procedures including extractions and implant placement.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a comfortable environment.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function DentalServices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, services.length - 3)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            {/* <div className="inline-block cursor-pointer px-4 py-2 text-blue-600 rounded-md text-sm font-medium mb-4"> */}
            {/* <Button variant="outline" size="sm" className="rounded-md text-blue-600 text-sm font-medium mb-4"> */}
            <Button size="sm" className="rounded-md bg-blue-500 mb-4 text-sm cursor-pointer  font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

              Our Services
            </Button>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 max-w-xl">
              Our team of dentists can help with a variety of dental services
            </h2>
          </div>
          <Button className="rounded-md bg-blue-500 cursor-pointer text-base font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Book an Appointment
          </Button>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                  <Card className="border-0 shadow-sm h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center border-none shadow-md z-10"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center border-none shadow-md z-10"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

