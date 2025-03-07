import Image from "next/image"
import { Button } from "@/components/ui/button"
import serviceBoxImg from "@../../../public/servicebox.jpeg"

export default function ServiceBox() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid md:grid-cols-2   rounded-md ">
        <div className="bg-blue-500 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-3 w-32 bg-white/90 rounded"></div>
              <div className="h-3 w-64 bg-white/90 rounded"></div>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-md px-6 py-5 h-auto font-medium w-fit mt-6">
              Book an Appointment
            </Button>
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <Image
            src= {serviceBoxImg}
            alt="Dental patient receiving treatment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

