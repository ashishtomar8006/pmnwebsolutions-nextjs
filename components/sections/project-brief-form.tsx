"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  Globe,
  ShoppingCart,
  Briefcase,
  BookOpen,
  Target,
  Palette,
  Eye,
  Calendar,
  DollarSign,
  CheckCircle,
  Send,
  Sparkles,
  FileText,
} from "lucide-react"

export default function ProjectBriefForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // Basic Information
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    communicationMode: "",

    // Project Overview
    websiteType: "",
    websiteGoal: "",
    customGoal: "",

    // Design Preferences
    primaryColor: "#8B5CF6",
    secondaryColor: "#06B6D4",
    referenceWebsite1: "",
    referenceWebsite1Like: "",
    referenceWebsite2: "",
    referenceWebsite2Like: "",
    mustHavePages: [] as string[],
    customPages: "",

    // Functionality Requirements
    keyFeatures: [] as string[],
    customFeatures: "",

    // Content & Timeline
    contentStatus: "",
    launchDate: "",
    budgetRange: "",
    customBudget: "",

    // Additional Notes
    additionalNotes: "",
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

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        communicationMode: "",
        websiteType: "",
        websiteGoal: "",
        customGoal: "",
        primaryColor: "#8B5CF6",
        secondaryColor: "#06B6D4",
        referenceWebsite1: "",
        referenceWebsite1Like: "",
        referenceWebsite2: "",
        referenceWebsite2Like: "",
        mustHavePages: [],
        customPages: "",
        keyFeatures: [],
        customFeatures: "",
        contentStatus: "",
        launchDate: "",
        budgetRange: "",
        customBudget: "",
        additionalNotes: "",
      })
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name as keyof typeof prev].includes(value)
        ? (prev[name as keyof typeof prev] as string[]).filter((item) => item !== value)
        : [...(prev[name as keyof typeof prev] as string[]), value],
    }))
  }

  const websiteTypes = [
    { value: "business", label: "Business Website", icon: Building },
    { value: "ecommerce", label: "eCommerce Store", icon: ShoppingCart },
    { value: "portfolio", label: "Portfolio", icon: Briefcase },
    { value: "blog", label: "Blog", icon: BookOpen },
    { value: "other", label: "Other", icon: Globe },
  ]

  const websiteGoals = [
    { value: "leads", label: "Generate Leads", icon: Target },
    { value: "sales", label: "Sell Products", icon: ShoppingCart },
    { value: "branding", label: "Build Brand Awareness", icon: Eye },
    { value: "other", label: "Other", icon: Globe },
  ]

  const communicationModes = [
    { value: "call", label: "Call", icon: Phone },
    { value: "email", label: "Email", icon: Mail },
    { value: "whatsapp", label: "WhatsApp", icon: MessageSquare },
  ]

  const mustHavePages = [
    "Home",
    "About",
    "Services/Products",
    "Blog",
    "Contact",
    "Portfolio",
    "Testimonials",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
  ]

  const keyFeatures = [
    "Contact Form",
    "Payment Gateway",
    "User Login",
    "Multi-language",
    "SEO Setup",
    "Social Media Integration",
    "Live Chat",
    "Newsletter Subscription",
    "Analytics Integration",
    "Mobile App",
    "Booking System",
    "Inventory Management",
  ]

  const contentStatuses = [
    { value: "ready", label: "Ready" },
    { value: "needs-creation", label: "Needs Creation" },
    { value: "partial", label: "Partial Content" },
  ]

  const budgetRanges = [
    { value: "500-1k", label: "$500–$1K" },
    { value: "1k-3k", label: "$1K–$3K" },
    { value: "3k+", label: "$3K+" },
    { value: "custom", label: "Custom" },
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
    <section className="relative py-32 bg-gray-50 overflow-hidden" ref={ref} id="project-brief">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </motion.div>

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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              PROJECT BRIEF
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Website Development{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Project Brief
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill this form to help us understand your requirements accurately and provide you with the best solution
              for your project.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Brief Submitted!</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for providing detailed information about your project. Our team will review your
                    requirements and get back to you within 24 hours with a customized proposal.
                  </p>
                  <div className="bg-slate-700/30 rounded-lg p-4 max-w-md mx-auto">
                    <p className="text-sm text-gray-400">
                      <strong className="text-gray-900">Next Steps:</strong>
                      <br />
                      1. Project analysis (1-2 hours)
                      <br />
                      2. Custom proposal creation (12-24 hours)
                      <br />
                      3. Initial consultation call
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* 1. Basic Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <User className="w-7 h-7 text-purple-400" />
                      1. Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Company Name *"
                          required
                          className="pl-12 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          placeholder="Contact Person *"
                          required
                          className="pl-12 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email *"
                          required
                          className="pl-12 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone *"
                          required
                          className="pl-12 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-gray-900 font-medium mb-4">Preferred Communication Mode:</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {communicationModes.map((mode) => {
                          const IconComponent = mode.icon
                          return (
                            <label
                              key={mode.value}
                              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                                formData.communicationMode === mode.value
                                  ? "border-purple-400 bg-purple-400/10"
                                  : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="communicationMode"
                                value={mode.value}
                                checked={formData.communicationMode === mode.value}
                                onChange={(e) => handleRadioChange("communicationMode", e.target.value)}
                                className="sr-only"
                              />
                              <IconComponent className="w-5 h-5 text-purple-400" />
                              <span className="text-gray-900 font-medium">{mode.label}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 2. Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Globe className="w-7 h-7 text-cyan-400" />
                      2. Project Overview
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-900 font-medium mb-4">Website Type:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {websiteTypes.map((type) => {
                            const IconComponent = type.icon
                            return (
                              <label
                                key={type.value}
                                className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                                  formData.websiteType === type.value
                                    ? "border-cyan-400 bg-cyan-400/10"
                                    : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="websiteType"
                                  value={type.value}
                                  checked={formData.websiteType === type.value}
                                  onChange={(e) => handleRadioChange("websiteType", e.target.value)}
                                  className="sr-only"
                                />
                                <IconComponent className="w-5 h-5 text-cyan-400" />
                                <span className="text-gray-900 font-medium">{type.label}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-900 font-medium mb-4">Goal of the Website:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {websiteGoals.map((goal) => {
                            const IconComponent = goal.icon
                            return (
                              <label
                                key={goal.value}
                                className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                                  formData.websiteGoal === goal.value
                                    ? "border-emerald-400 bg-emerald-400/10"
                                    : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="websiteGoal"
                                  value={goal.value}
                                  checked={formData.websiteGoal === goal.value}
                                  onChange={(e) => handleRadioChange("websiteGoal", e.target.value)}
                                  className="sr-only"
                                />
                                <IconComponent className="w-5 h-5 text-emerald-400" />
                                <span className="text-gray-900 font-medium">{goal.label}</span>
                              </label>
                            )
                          })}
                        </div>
                        {formData.websiteGoal === "other" && (
                          <div className="mt-4">
                            <Input
                              type="text"
                              name="customGoal"
                              value={formData.customGoal}
                              onChange={handleInputChange}
                              placeholder="Please specify your goal"
                              className="bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3. Design Preferences */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Palette className="w-7 h-7 text-pink-400" />
                      3. Design Preferences
                    </h3>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-900 font-medium mb-3">Primary Color:</label>
                          <div className="flex items-center gap-4">
                            <input
                              type="color"
                              name="primaryColor"
                              value={formData.primaryColor}
                              onChange={handleInputChange}
                              className="w-12 h-12 rounded-lg border-2 border-gray-300/50 bg-transparent cursor-pointer"
                            />
                            <Input
                              type="text"
                              name="primaryColor"
                              value={formData.primaryColor}
                              onChange={handleInputChange}
                              className="flex-1 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-900 font-medium mb-3">Secondary Color:</label>
                          <div className="flex items-center gap-4">
                            <input
                              type="color"
                              name="secondaryColor"
                              value={formData.secondaryColor}
                              onChange={handleInputChange}
                              className="w-12 h-12 rounded-lg border-2 border-gray-300/50 bg-transparent cursor-pointer"
                            />
                            <Input
                              type="text"
                              name="secondaryColor"
                              value={formData.secondaryColor}
                              onChange={handleInputChange}
                              className="flex-1 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-900 font-medium mb-3">Reference Website 1:</label>
                          <Input
                            type="url"
                            name="referenceWebsite1"
                            value={formData.referenceWebsite1}
                            onChange={handleInputChange}
                            placeholder="https://example.com"
                            className="mb-3 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
                          />
                          <textarea
                            name="referenceWebsite1Like"
                            value={formData.referenceWebsite1Like}
                            onChange={handleInputChange}
                            placeholder="What you like about it..."
                            rows={3}
                            className="w-full p-3 bg-gray-100/80 border border-gray-300/50 rounded-lg text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-900 font-medium mb-3">Reference Website 2:</label>
                          <Input
                            type="url"
                            name="referenceWebsite2"
                            value={formData.referenceWebsite2}
                            onChange={handleInputChange}
                            placeholder="https://example.com"
                            className="mb-3 bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
                          />
                          <textarea
                            name="referenceWebsite2Like"
                            value={formData.referenceWebsite2Like}
                            onChange={handleInputChange}
                            placeholder="What you like about it..."
                            rows={3}
                            className="w-full p-3 bg-gray-100/80 border border-gray-300/50 rounded-lg text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none resize-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-900 font-medium mb-4">Must-Have Pages:</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {mustHavePages.map((page) => (
                            <label
                              key={page}
                              className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                                formData.mustHavePages.includes(page)
                                  ? "border-pink-400 bg-pink-400/10"
                                  : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.mustHavePages.includes(page)}
                                onChange={() => handleCheckboxChange("mustHavePages", page)}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                  formData.mustHavePages.includes(page)
                                    ? "border-pink-400 bg-pink-400"
                                    : "border-gray-400"
                                }`}
                              >
                                {formData.mustHavePages.includes(page) && (
                                  <CheckCircle className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span className="text-gray-900 text-sm">{page}</span>
                            </label>
                          ))}
                        </div>
                        <div className="mt-4">
                          <Input
                            type="text"
                            name="customPages"
                            value={formData.customPages}
                            onChange={handleInputChange}
                            placeholder="Other pages (comma separated)"
                            className="bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Functionality Requirements */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <FileText className="w-7 h-7 text-orange-400" />
                      4. Functionality Requirements
                    </h3>

                    <div>
                      <label className="block text-gray-900 font-medium mb-4">Key Features Needed:</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {keyFeatures.map((feature) => (
                          <label
                            key={feature}
                            className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                              formData.keyFeatures.includes(feature)
                                ? "border-orange-400 bg-orange-400/10"
                                : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.keyFeatures.includes(feature)}
                              onChange={() => handleCheckboxChange("keyFeatures", feature)}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formData.keyFeatures.includes(feature)
                                  ? "border-orange-400 bg-orange-400"
                                  : "border-gray-400"
                              }`}
                            >
                              {formData.keyFeatures.includes(feature) && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-gray-900 text-sm">{feature}</span>
                          </label>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Input
                          type="text"
                          name="customFeatures"
                          value={formData.customFeatures}
                          onChange={handleInputChange}
                          placeholder="Other features (comma separated)"
                          className="bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Content & Timeline */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Calendar className="w-7 h-7 text-green-400" />
                      5. Content & Timeline
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-900 font-medium mb-4">Content Status:</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {contentStatuses.map((status) => (
                            <label
                              key={status.value}
                              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                                formData.contentStatus === status.value
                                  ? "border-green-400 bg-green-400/10"
                                  : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="contentStatus"
                                value={status.value}
                                checked={formData.contentStatus === status.value}
                                onChange={(e) => handleRadioChange("contentStatus", e.target.value)}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded-full border-2 ${
                                  formData.contentStatus === status.value
                                    ? "border-green-400 bg-green-400"
                                    : "border-gray-400"
                                }`}
                              />
                              <span className="text-gray-900 font-medium">{status.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-900 font-medium mb-3">Preferred Launch Date:</label>
                        <Input
                          type="date"
                          name="launchDate"
                          value={formData.launchDate}
                          onChange={handleInputChange}
                          className="bg-gray-100/80 border-gray-300/50 text-gray-900 focus:border-green-400 focus:ring-green-400/20"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-900 font-medium mb-4">Budget Range:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {budgetRanges.map((budget) => (
                            <label
                              key={budget.value}
                              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                                formData.budgetRange === budget.value
                                  ? "border-green-400 bg-green-400/10"
                                  : "border-gray-300/50 bg-gray-100/80 hover:border-gray-500/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="budgetRange"
                                value={budget.value}
                                checked={formData.budgetRange === budget.value}
                                onChange={(e) => handleRadioChange("budgetRange", e.target.value)}
                                className="sr-only"
                              />
                              <DollarSign className="w-5 h-5 text-green-400" />
                              <span className="text-gray-900 font-medium">{budget.label}</span>
                            </label>
                          ))}
                        </div>
                        {formData.budgetRange === "custom" && (
                          <div className="mt-4">
                            <Input
                              type="text"
                              name="customBudget"
                              value={formData.customBudget}
                              onChange={handleInputChange}
                              placeholder="Please specify your budget"
                              className="bg-gray-100/80 border-gray-300/50 text-gray-900 placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 6. Additional Notes */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <MessageSquare className="w-7 h-7 text-blue-400" />
                      6. Additional Notes
                    </h3>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any additional requirements, special requests, or important details about your project..."
                      rows={6}
                      className="w-full p-4 bg-gray-100/80 border border-gray-300/50 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting Project Brief...
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="w-6 h-6" />
                          Submit Project Brief
                        </div>
                      )}
                    </Button>
                    <p className="text-gray-400 text-sm mt-4">
                      We'll review your requirements and get back to you within 24 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
