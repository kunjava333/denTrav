import Image from "next/image";
import aboutImage from "@../../../public/about.jpeg"

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-black p-6 rounded-lg shadow-lg relative mt-44">
    
      <div className="mb-4 space-y-2 text-black dark:text-white">
        <div className=" mb-6 "><h1 className="text-2xl font-bold">About Us</h1></div>
        <div className="mb-"><h1 className="text-lg underline ">Our Vision</h1></div>
        <div className=""><p>At DenTrav, we believe that world-class dental care should be affordable, accessible, and enriching. That’s why we’ve brought together expert dentistry and serene travel experiences all in one place.

We envision a future where patients no longer have to choose between cost and quality where you can take care of your health while exploring one of the most beautiful regions in the world: Kerala, India.</p></div>
      </div>

   
      <div className="relative">
        <Image
          src={aboutImage}
          alt="Dental Procedure"
          width={800}
          height={500}
          className="rounded-lg"
        />
        {/* <div className="absolute bottom-[-20px] left-[-30px] w-20 h-20 border-4 border-blue-300 rounded-full"></div> */}
      </div>
    </div>
  );
};


