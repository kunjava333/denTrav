'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from 'lucide-react';

const faqCategories = ["General", "Appointment", "Consultation"];
const faqs = [
  "What's your main dental service?",
  "What's your main dental service?",
  "What's your main dental service?",
  "What's your main dental service?",
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("General");

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-6">
        <Button variant="outline" className="uppercase text-sm font-semibold">FAQs</Button>
        <div className="h-2 mt-3 bg-gray-300 w-20 mx-auto rounded" />
        <div className="h-2 mt-2 bg-gray-200 w-40 mx-auto rounded" />
      </div>
      
      <div className="flex space-x-3 mb-6">
        {faqCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn("rounded-lg", { "bg-blue-500 text-white": selectedCategory === category })}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Card className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="flex justify-between items-center py-4 border-b last:border-none cursor-pointer hover:bg-gray-100 px-3 rounded">
            <span className="text-gray-700 text-lg">{faq}</span>
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </div>
        ))}
      </Card>
    </div>
  );
}
