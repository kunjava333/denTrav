'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import story1 from "@../../../public/story1.jpeg";
import story2 from "@../../../public/story2.jpeg";


export const OurStory = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 ">
      <h1 className="mb-2 px-4 py-2 font-bold text-xl text-left">Why Kerala?</h1>
      <div className="w-3/4 text-center">
        <div className=" ml-50 mr-50 mx-auto mb-12 w-auto h-auto text-left "><p>Nestled between palm-fringed beaches, lush backwaters, and tranquil hill stations, Kerala is more than a destination—it’s an experience.

Here’s why Kerala is the perfect place for your dental journey: <br />

   - 🦷 World-class dental clinics with internationally trained professionals <br />

   - 💰 Affordable treatment costs, compared to the West. <br />

   - 🌴 Stunning natural surroundings for rest and recovery. <br />

   - 🧘🏽‍♀️ Wellness culture rooted in Ayurveda and holistic healing. <br />

   - 🛶 A vacation experience you’ll remember for life. <br />

With DenTrav, your treatment becomes part of a rejuvenating, curated travel experience</p></div>
        
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
      <div className=""><h1 className='text-2xl font-bold mt-12 mb-6'>Smile Better. Heal Naturally. Discover Kerala with DenTrav.</h1></div>
    </section>
  );
};

