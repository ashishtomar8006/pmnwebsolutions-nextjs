"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  MessageSquare,
  User,
  Building,
  Globe,
} from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const offices = [
    {
      city: "Bakersfield, CA",
      address: "4900 California Avenue, Bakersfield, CA 93309",
      phone: "+1 913 578 8379",
      email: "usa@webcraft.com",
      timezone: "PST (UTC-8)",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      city: "London, UK",
      address: "70 White Lion Street, London N1 9PP",
      phone: "+44 20 7946 0958",
      email: "uk@webcraft.com",
      timezone: "GMT (UTC+0)",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      city: "Noida, India",
      address: "Advant Navis Business Park, Noida, India",
      phone: "+91 120 456 7890",
      email: "india@webcraft.com",
      timezone: "IST (UTC+5:30)",
      hours: "10:00 AM - 7:00 PM",
    },
    {
      city: "Adelaide, Australia",
      address: "25 Grenfell Street, Adelaide, SA 5000",
      phone: "+61 8 8123 4567",
      email: "au@webcraft.com",
      timezone: "ACST (UTC+9:30)",
      hours: "9:00 AM - 5:00 PM",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden" ref={ref} id="contact">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 text-white/5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Mail size={120} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-white/5"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Phone size={100} />
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              GET IN TOUCH
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team of experts and let's discuss how we
              can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                  Send us a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="pl-12 bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          className="pl-12 bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="pl-12 bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="pl-12 bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="pl-12 bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-cyan-400" />
                    Our Global Offices
                  </h3>
                  <p className="text-gray-300 mb-8">
                    We have offices around the world to serve you better. Reach out to the location nearest to you or
                    contact our main office.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="bg-slate-800/20 backdrop-blur-sm rounded-xl p-6 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{office.city}</h4>
                          <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              {office.address}
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              {office.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              {office.email}
                            </p>
                            <p className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              {office.hours} ({office.timezone})
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, number: "< 24h", label: "Response Time", color: "text-emerald-400" },
              { icon: Globe, number: "4", label: "Global Offices", color: "text-blue-400" },
              { icon: MessageSquare, number: "24/7", label: "Support Available", color: "text-purple-400" },
              { icon: CheckCircle, number: "98%", label: "Client Satisfaction", color: "text-orange-400" },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
