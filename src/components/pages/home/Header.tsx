import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, SmileIcon as Tooth, Phone, Wrench } from "lucide-react";
import { Button } from "../../ui/button"
import header from '@../../../public/header.jpg';

export default function Home() {

      const InfoCards = () => {
    const cards = [
      {
        icon: <Phone className="w-7 h-7 text-gray-500 mb-3" />,
        title: "Contact Us",
        description: "Go to this step-by-step guideline process on how to",
        linkText: "Book an Appointment",
        href: "#",
      },
      {
        icon: <Clock className="w-7 h-7 text-gray-500 mb-3" />,
        title: "Open Hours",
        description: "Check our available service timings.",
        linkText: "See our guideline",
        href: "#",
      },
      {
        icon: <Wrench className="w-7 h-7 text-gray-500 mb-3" />,
        title: "Service",
        description: "Explore our range of professional services.",
        linkText: "View Services",
        href: "#",
      },
    ];

    return (
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className={`p-6 bg-white ${index < cards.length - 1 ? "sm:border-r" : ""}`}>
              {card.icon}
              <h5 className="mb-2 text-2xl font-semibold text-gray-900">{card.title}</h5>
              <p className="mb-3 text-gray-500">{card.description}</p>
              <a href={card.href} className="inline-flex items-center text-blue-600 hover:underline">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };



  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl">
        {/* Background decoration */}
        <div className="absolute -left-36 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative">
          {/* Hero image */}
          <div className="relative h-[500px] w-full md:h-[550px] bg-amber-400 lg:h-[600px]">
            <Image
              src={header}
              alt="Dentist examining patient"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text overlay */}
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="ml-6 mt-16 max-w-md space-y-6 md:ml-12 md:mt-30 lg:ml-20">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Transforming Smiles With Expert Dental Care
              </h1>

             <div className="flex flex-col gap-1">
              <div className="w-36 border-b-3 border-black" />
              <div className="w-30 border-b-3 border-black" />
             </div>


              <div>
                <Button
                 
                  className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-6 text-base font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Services card */}
          <div className="absolute bottom-0 left-1/2 w-full max-w-3xl -translate-x-1/2 translate-y-1/2 transform px-4">
          <InfoCards />
          </div>
        </div>

        {/* Spacer for content below the card */}
        <div className="h-32 md:h-40"></div>
      </div>
    </main>
  )
}

