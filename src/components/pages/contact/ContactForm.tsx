"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  phone1: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone1: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-mail", {
        ...formData,
        subject: "New Contact Form Submission",
      });
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone1: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
  };
  

  return (
    <div className="w-full max-w-7xl mx-auto mt-32 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side - Information */}
        <div className="w-full md:w-1/3 space-y-8">
          <div className="relative">
            <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-gray-200 rounded-full opacity-50"></div>
            <div className="h-32"></div> {/* Spacer for the circle background */}
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold">More Information</h2>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-gray-600">Address</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-gray-600">Email</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-gray-600">Phone</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone1">Phone Number</Label>
              <Input id="phone1" name="phone1" placeholder="1315584532" value={formData.phone1} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
