"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Cloud, Sparkles, ChevronRight } from "lucide-react"
import { useState } from "react"

type TechnologyCategoryKey = "frontend" | "backend" | "database" | "cloud"

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<TechnologyCategoryKey>("frontend")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  const categories: Record<
    TechnologyCategoryKey,
    {
      title: string
      icon: typeof Code2
      color: string
      description: string
      techs: Array<{
        name: string
        icon: string
        description: string
        specialty: string
      }>
    }
  > = {
    frontend: {
      icon: Code2,
      title: "Frontend Development",
      color: "#61dafb",
      description: "Modern, responsive user interfaces that engage and convert",
      techs: [
        {
          name: "React",
          icon: "⚛️",
          description: "Component-based UI library for dynamic web applications",
          specialty: "UI Framework",
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "Full-stack React framework with SSR and SSG capabilities",
          specialty: "Full-Stack Framework",
        },
        {
          name: "TypeScript",
          icon: "📘",
          description: "Typed JavaScript for better code quality and maintainability",
          specialty: "Language",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Utility-first CSS framework for rapid UI development",
          specialty: "Styling",
        },
        {
          name: "Vue.js",
          icon: "💚",
          description: "Progressive framework for building user interfaces",
          specialty: "UI Framework",
        },
        {
          name: "Svelte",
          icon: "🔥",
          description: "Compile-time optimized framework for fast web apps",
          specialty: "UI Framework",
        },
      ],
    },
    backend: {
      icon: Database,
      title: "Backend Development",
      color: "#3d8eb9",
      description: "Robust server-side solutions that scale with your business",
      techs: [
        {
          name: "Node.js",
          icon: "🟢",
          description: "JavaScript runtime for scalable server-side applications",
          specialty: "Runtime Environment",
        },
        {
          name: "Python",
          icon: "🐍",
          description: "Versatile language for web development and data processing",
          specialty: "Language",
        },
        {
          name: "Express.js",
          icon: "💨",
          description: "Fast, unopinionated, minimalist web framework for Node.js",
          specialty: "Framework",
        },
        {
          name: "Django",
          icon: "🧱",
          description: "High-level Python web framework that encourages rapid development",
          specialty: "Framework",
        },
        {
          name: "REST APIs",
          icon: "🌐",
          description: "Architectural style for building scalable web services",
          specialty: "API Design",
        },
        {
          name: "gRPC",
          icon: "⚡",
          description: "High-performance, open-source universal RPC framework",
          specialty: "API Design",
        },
      ],
    },
    database: {
      icon: Database,
      title: "Database Solutions",
      color: "#e34c26",
      description: "Efficient data storage and management for seamless operations",
      techs: [
        {
          name: "PostgreSQL",
          icon: "🐘",
          description: "Advanced open-source relational database system",
          specialty: "Relational Database",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description: "NoSQL database for flexible, document-based storage",
          specialty: "NoSQL Database",
        },
        {
          name: "MySQL",
          icon: "🐬",
          description: "Open-source relational database management system",
          specialty: "Relational Database",
        },
        {
          name: "Redis",
          icon: "🔴",
          description: "In-memory data structure store for caching and sessions",
          specialty: "Caching",
        },
        {
          name: "GraphQL",
          icon: "🔗",
          description: "Query language for APIs with strong type system",
          specialty: "API Query Language",
        },
        {
          name: "SQL",
          icon: "🗄️",
          description: "Standard language for managing and manipulating databases",
          specialty: "Query Language",
        },
      ],
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "#f90",
      description: "Scalable infrastructure and deployment solutions",
      techs: [
        {
          name: "AWS",
          icon: "☁️",
          description: "Amazon Web Services for comprehensive cloud solutions",
          specialty: "Cloud Provider",
        },
        {
          name: "Vercel",
          icon: "▲",
          description: "Platform for frontend frameworks and static sites",
          specialty: "Deployment",
        },
        {
          name: "Docker",
          icon: "🐳",
          description: "Containerization platform for consistent deployments",
          specialty: "Containerization",
        },
        {
          name: "Kubernetes",
          icon: "⚙️",
          description: "Container orchestration for scalable applications",
          specialty: "Orchestration",
        },
        {
          name: "GitHub Actions",
          icon: "🔄",
          description: "CI/CD workflows for automated testing and deployment",
          specialty: "CI/CD",
        },
        {
          name: "Netlify",
          icon: "🌐",
          description: "Modern web development platform with edge computing",
          specialty: "Deployment",
        },
      ],
    },
  }

  const tabs: Array<{ key: TechnologyCategoryKey; label: string }> = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "cloud", label: "Cloud & DevOps" },
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
    <section className="relative py-32 bg-slate-900 overflow-hidden" ref={ref} id="technologies">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl" />
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
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              OUR TECH STACK
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We leverage the latest and most powerful technologies to build exceptional digital experiences that
              perform flawlessly across all platforms.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const category = categories[tab.key]
              const IconComponent = category.icon
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === tab.key
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </motion.div>

          {/* Active Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{categories[activeCategory].title}</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{categories[activeCategory].description}</p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[activeCategory].techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{tech.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-purple-300 text-sm">{tech.specialty}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/30"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology Solution?
              </span>
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team stays ahead of the curve with emerging technologies. Let's discuss how we can leverage the
              perfect tech stack for your unique requirements.
            </p>

            <motion.button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Project
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
