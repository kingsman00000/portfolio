"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="prose dark:prose-invert">
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new opportunities, projects, 
              and collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <ContactItem 
              icon={MapPin} 
              title="Location"
              details="NIT Patna, Ashok Rajpath, Patna, Bihar"
            />
            <ContactItem 
              icon={Mail} 
              title="Email"
              details={
                <div className="space-y-1">
                  <p>harshvardhan96611@gmail.com</p>
                  <p>harshv.ug21.cs@nitp.ac.in</p>
                </div>
              }
            />
            <ContactItem 
              icon={Phone} 
              title="Phone"
              details="+91-9661164511"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <SocialLinks className="justify-start" />
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* Map */}
      <div className="mt-12 h-[400px] rounded-lg overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.521724096893!2d85.17244287537754!3d25.62108277776046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4b0c2c337c264886!2sNational%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1709667547893!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, details }) {
  return (
    <div className="flex gap-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="text-sm text-muted-foreground">{details}</div>
      </div>
    </div>
  );
}