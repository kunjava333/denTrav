import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Check-ups",
      description: "Routine examinations to monitor oral health and catch issues early.",
      imageUrl: "/services-",
    },
    {
      id: 2,
      title: "Bonding",
      description: "Cosmetic fix that uses tooth-colored material to repair chips, gaps or discoloration.",
      imageUrl: "/services-",
    },
    {
      id: 3,
      title: "Extractions",
      description: "Removal of teeth that are damaged, decayed or causing crowding.",
      imageUrl: "/services-",
    },
    {
      id: 4,
      title: "Dental implants",
      description: "Permanent artificial tooth roots topped with lifelike crowns to replace missing teeth.",
      imageUrl: "/services-",
    },
    {
      id: 5,
      title: "Cosmetic procedures",
      description: "Enhancements like reshaping or color correction, designed to improve your smile’s appearance.",
      imageUrl: "/services-",
    },
    {
      id: 6,
      title: "Fillings and sealants",
      description: "Tooth-colored restorations and protective coatings that prevent or repair decay.",
      imageUrl: "/services-",
    },

    {
      id: 7,
      title: "Root canals",
      description: "Removes infected tissue inside a tooth to save it from extraction.",
      imageUrl: "/services-",
    },
    {
      id: 8,
      title: "Teeth whitening",
      description: "Lightens tooth color to give you a brighter smile.",
      imageUrl: "/services-",
    },
    {
      id: 9,
      title: "Paediatrics",
      description: "Dental care tailored specifically for children’s growth and comfort.",
      imageUrl: "/services-",
    },
    {
      id: 10,
      title: "Teeth cleaning",
      description: "Professional removal of plaque and tartar to maintain healthy gums and fresh breath.",
      imageUrl: "/services-",
    },
    {
      id: 11,
      title: "Mouth guards",
      description: "Custom-fitted devices to protect teeth during sports or from nighttime grinding.",
      imageUrl: "/services-",
    },
    {
      id: 12,
      title: "X-ray",
      description: "Low-radiation imaging that reveals hidden issues for accurate diagnosis.",
      imageUrl: "/services-",
    },
    {
      id: 13,
      title: "Oral surgery",
      description: "Surgical treatments for complex dental or jaw-related concerns.",
      imageUrl: "/services-",
    },
    {
      id: 14,
      title: "Teeth reshaping",
      description: "Minor alterations to tooth shape for a more even, harmonious smile.",
      imageUrl: "/services-",
    },
    {
      id: 15,
      title: "veneers and crowns",
      description: "Thin shells or caps that cover teeth to correct color, shape or alignment issues.",
      imageUrl: "/services-",
    },
    
  ];

  return (
    <section className="w-full mt-28 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold ">
              <a href="/services">Our Services</a>
            </h2>
            <div className="w-64 h-1 bg-gray-300 mt-2"></div>
          </div>
          <form action="/contact">
            <Button
              type="submit"
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Book an Appointment
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service,index) => (
            <Card
              key={service.id}
              className="border-none overflow-hidden rounded-lg shadow-sm"
            >
              <CardHeader className="p-0">
                <div className="bg-gray-200 h-48 w-full">
                  <Image
                    src={`${service.imageUrl}${index+1}.jpg`}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 ">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
