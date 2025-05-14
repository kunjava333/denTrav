"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialMedia = [
  { name: "Facebook", icon: <Facebook size={24} />, link: "#", text: "Follow Us" },
  { name: "Twitter", icon: <Twitter size={24} />, link: "#", text: "Follow Us" },
  { name: "Instagram", icon: <Instagram size={24} />, link: "#", text: "Follow Us" },
  { name: "Location", icon: <MapPin size={24} />, link: "#", text: "View Location" },
];

export default function SocialMediaCards() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact us through  our <br /> Social Media</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {socialMedia.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            <Card className="text-center p-4 shadow-md">
              <CardContent className="flex flex-col items-center gap-2">
                <div className="bg-blue-500 text-white p-3 rounded-lg">{item.icon}</div>
                <p className="font-medium">{item.name}</p>
                <Link href={item.link} className="text-blue-600 font-medium hover:underline">
                  {item.text}
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
