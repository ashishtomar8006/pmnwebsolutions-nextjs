"use client"

import { motion } from "framer-motion"
import {
  Code,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  Heart,
  Globe,
  Shield,
  Award,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    "Website Design",
    "E-commerce Development",
    "WordPress Development",
    "Mobile App Development",
    "SEO Optimization",
    "Digital Marketing",
    "Brand Identity",
    "UI/UX Design",
  ]

  const company = ["About Us", "Our Team", "Careers", "Portfolio", "Case Studies", "Testimonials", "Blog", "Contact"]

  const resources = [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR Compliance",
    "Refund Policy",
    "FAQ",
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const offices = [
    {
      city: "USA",
      address: "4900 California Avenue, Bakersfield, CA 93309",
      phone: "+1 913 578 8379",
    },
    {
      city: "UK",
      address: "70 White Lion Street, London N1 9PP",
      phone: "+44 20 7946 0958",
    },
    {
      city: "India",
      address: "Advant Navis Business Park, Noida",
      phone: "+91 120 456 7890",
    },
  ]

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            // backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Latest Trends
                </span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest web development insights, design trends, and exclusive
                offers delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                />
                <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300 border-0">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    WebCraft
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're a global team of passionate developers and designers creating exceptional digital experiences.
                  Transform your business with our premium web solutions at affordable prices.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { icon: Shield, text: "Secure" },
                    { icon: Award, text: "Certified" },
                    { icon: Zap, text: "Fast" },
                  ].map((badge, index) => {
                    const IconComponent = badge.icon
                    return (
                      <div
                        key={badge.text}
                        className="flex items-center gap-2 px-3 py-1 bg-slate-800/30 rounded-full border border-slate-700/30"
                      >
                        <IconComponent className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">{badge.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Social Links */}
                {/* <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div> */}
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-3">
                  {company.map((item, index) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <li key={resource}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {resource}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

    
        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} WebCraft. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by our global team.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
