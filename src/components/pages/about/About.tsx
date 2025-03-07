import Image from "next/image";
import aboutImage from "@../../../public/about.jpeg"

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg relative mt-44">
    
      <div className="mb-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
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


