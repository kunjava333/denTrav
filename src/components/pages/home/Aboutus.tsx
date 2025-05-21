import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import about_image1 from "@../../../public/main.jpg"
import about_image2 from "@../../../public/about2.jpeg"

export default function AboutUs() {
  return (
    <main className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={about_image1}
                alt="Smiling dentist"
                width={400}
                height={300}
                className="rounded-3xl shadow-lg object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 right-0 z-20">
              <Image
                src={about_image2}
                alt="Dental procedure"
                width={400}
                height={300}
                className="rounded-3xl shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="pt-16 md:pt-0">
            <div className="flex justify-end mb-4">

            <Button size="sm" className="rounded-md bg-blue-500 mb-4 text-sm cursor-pointer  font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <a href="/about">About Us</a>
              </Button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="h-4 rounded w-full flex"><p>DenTrav blends expert dental care with Kerala’s serene charm. Think sunlit backwaters, peaceful recovery, and curated experiences. It’s not just about treatment—it’s about feeling better, inside and out. Come for the care, stay for the journey.
              </p></div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" alt="Doctor" />
                {/* <AvatarFallback>Dr</AvatarFallback> */}
              </Avatar>
              {/* <span className="text-sm font-medium">Dr</span> */}
            </div>

            {/* <Button className="rounded-md bg-blue-500 cursor-pointer text-base font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"><a href="/about">About our clinic</a></Button> */}
          </div>
        </div>
      </div>
    </main>
  )
}

