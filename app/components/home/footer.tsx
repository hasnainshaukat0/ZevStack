"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowRight,
  Send
} from "lucide-react";
import { useState } from "react";

interface FooterData {
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: Array<{
    platform: string;
    url: string;
  }>;
}

interface FooterProps {
  data: FooterData;
}

const socialIcons = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
};

export function Footer({ data }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                ZevStack
              </span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
              Transforming businesses through AI-powered digital solutions. 
              We help enterprise companies achieve exponential growth with cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {data.socials.map((social) => {
                const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <a href={`mailto:${data.contact.email}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                    {data.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <a href={`tel:${data.contact.phone}`} className="text-slate-200 hover:text-green-400 transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-slate-200">{data.contact.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{data.newsletter.title}</h3>
              <p className="text-slate-300">{data.newsletter.description}</p>
            </div>
            
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-600/20 border border-green-600/30 rounded-lg text-center"
              >
                <div className="text-green-400 font-semibold mb-1">Subscribed!</div>
                <div className="text-sm text-green-300">Check your email for our latest insights.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder={data.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
                  />
                  <Button 
                    type="submit"
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700 shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xs text-slate-400">
                  Join 5,000+ business leaders getting weekly growth insights.
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-sm text-slate-400">
            © 2024 ZevStack. All rights reserved. Transforming businesses with AI-powered solutions.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}