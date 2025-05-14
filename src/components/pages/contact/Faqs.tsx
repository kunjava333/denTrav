'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqCategories = ["General", "Appointment", "Consultation"];

const faqs = [
  { category: "General", question: "What's your main dental service?", answer: "Our main service is dental implants." },
  { category: "Appointment", question: "How do I book an appointment?", answer: "You can book an appointment via our website or by calling us." },
  { category: "Consultation", question: "What should I bring to my consultation?", answer: "Bring your medical history and any current medications." },
  { category: "General", question: "Do you offer emergency consultations?", answer: "Yes, we offer emergency consultations during office hours." },
    { category: "General", subCategory: "Services", question: "What's your main dental service?", answer: "Our main service is dental implants." },
    { category: "General", subCategory: "Emergency", question: "Do you offer emergency consultations?", answer: "Yes, we offer emergency consultations during office hours." },
    { category: "Appointment", subCategory: "Booking Process", question: "How do I book an appointment?", answer: "You can book an appointment via our website or by calling us." },
    { category: "Appointment", subCategory: "Timings", question: "What are your office timings?", answer: "We are open Monday to Friday, 9 AM to 6 PM." },
    { category: "Consultation", subCategory: "Preparation", question: "What should I bring to my consultation?", answer: "Bring your medical history and any current medications." },
    { category: "Consultation", subCategory: "Costs", question: "How much does a consultation cost?", answer: "The cost of a consultation depends on the type of service required." },
  
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Filter FAQs by selected category
  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-6">
        <Button variant="outline" className="uppercase text-sm font-semibold">FAQs</Button>
        <div className="h-2 mt-3 bg-gray-300 w-20 mx-auto rounded" />
        <div className="h-2 mt-2 bg-gray-200 w-40 mx-auto rounded" />
      </div>
      
      <div className="flex space-x-3 mb-6 flex-wrap justify-center">
        {faqCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn("rounded-lg", { "bg-blue-500 text-white cursor-pointer": selectedCategory === category })}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Card className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <div
              className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 px-3 rounded"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-gray-700 text-lg">{faq.question}</span>
              {openFaqIndex === index ? (
                <ChevronDown className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronRight className="h-6 w-6 text-gray-500" />
              )}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? "max-h-96" : "max-h-0"}`}
            >
              {openFaqIndex === index && (
                <div className="px-3 py-2 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
