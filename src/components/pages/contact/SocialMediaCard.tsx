"use client"
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTiktok, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { motion } from "framer-motion";

const socialMedia = [
  {
    name: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
    link: "#",
    text: "Follow Us",
  },
  {
    name: "Tiktok",
    icon: <FontAwesomeIcon icon={faTiktok} size="lg" />,
    link: "#",
    text: "Follow Us",
  },
  {
    name: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
    link: "#",
    text: "Follow Us",
  },
  {
    name: "Pinterest",
    icon: <FontAwesomeIcon icon={faPinterest} size="lg" />,
    link: "#",
    text: "View Location",
  },
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
