import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Service 1",
      description: "Description of service 1 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Service 2",
      description: "Description of service 2 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Service 3",
      description: "Description of service 3 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Service 4",
      description: "Description of service 4 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Service 5",
      description: "Description of service 5 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Service 6",
      description: "Description of service 6 and what it entails.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="w-full mt-28 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <div className="w-64 h-1 bg-gray-300 mt-2"></div>
          </div>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Book an Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border-none overflow-hidden rounded-lg shadow-sm">
              <CardHeader className="p-0">
                <div className="bg-gray-200 h-48 w-full">
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

