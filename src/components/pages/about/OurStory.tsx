'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import story1 from "@../../../public/story1.jpeg";
import story2 from "@../../../public/story2.jpeg";


export const OurStory = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 ">
      <Button className="mb-4 px-4 py-2 rounded-full bg-blue-500 text-white">Our Story</Button>
      <div className="w-3/4 text-center">
        <div className="h-4 bg-gray-300 w-3/4 mx-auto mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 w-2/3 mx-auto mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 w-3/4 mx-auto rounded"></div>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="relative w-40 h-56 rounded-lg overflow-hidden shadow-lg transform rotate-[-5deg]">
          <Image
            src={story1}
            alt="Happy patient"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-40 h-56 rounded-lg overflow-hidden shadow-lg transform rotate-[5deg]">
          <Image
            src={story2}
            alt="Happy patient"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

