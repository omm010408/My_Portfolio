import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  LibraryBig,
  MessageCircle,
  TrendingUp,
  Video,
  Plane,
  ArrowRight,
  Layout,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

// Ensure Raleway is loaded with multiple weights
(() => {
  if (!document.head.querySelector("[href*='Raleway']")) {
    const l = document.createElement("link");
    l.href =
      "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
  }
})();

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      id: 1,
      title: "Modern Calculator",
      subtitle: "Interactive Web Utility",

      description:
        "A fast, responsive, and visually appealing calculator built using modern web technologies to handle everyday mathematical operations seamlessly.",

      features: [
        "Clean and responsive user interface",
        "Instant real-time mathematical calculations",
        "Optimized for both desktop and mobile devices",
      ],

      stats: ["UI/UX", "Interactive", "Web"],

      image: "/Calc.png",

      tags: ["HTML", "CSS", "JavaScrip"],

      github: "https://github.com/omm010408/Web-Devs/tree/main/Modern%20calculator",

      color: "from-orange-400 to-red-500",

      icon: Layout,

      featured: true,
    },

    {
      id: 2,

      title: "Maaza",

      subtitle: "Brand Concept Revamp",

      description:
        "A vibrant, modern visual redesign of the Maaza brand website, focusing on engaging animations, vivid imagery, and a refreshing user experience.",

      features: [
        "Vibrant and engaging visual design",
        "Improved user experience and navigation flow",
        "Responsive layout adapting to all screen sizes",
      ],

      stats: ["Redesign", "Frontend", "UI/UX"],

      image: "/Mazza.png",

      tags: ["HTML", "CSS", "JavaScript", "Gsap"],

      github: "https://github.com/omm010408/Web-Devs/tree/main/mazza",


      color: "from-sky-400 to-blue-500",

      icon: Layout,
    },

    {
      id: 3,

      title: "Web 2",

      subtitle: "First Developer Portfolio",

      description:
        "My foundational web developer portfolio showcasing early coding projects, technical skills, and my initial journey into frontend development.",

      features: [
        "Personalized project gallery and styling",
        "Interactive contact and about sections",
        "Foundational Web 2.0 design principles",
      ],

      stats: ["Portfolio", "Frontend", "Personal"],

      image:"/web_2.png",

      tags: ["React", "WebSocket", "Node.js"],

      github: "https://github.com/omm010408/Web-Devs/tree/main/web2",


      color: "from-emerald-400 to-teal-500",

      icon: Layout,
    }
  ];

  const fontStyle = { fontFamily: "'Raleway', sans-serif" };

  return (
    <section
      id="projects"
      className="py-24 px-4 overflow-hidden"
      style={fontStyle}
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 ">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Works
            </span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto">
            Crafting digital experiences through clean code and intentional
            design.
          </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-3/5 group relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-white/10"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] md:h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </motion.div>

                  {/* Decorative Background Element */}
                  <div
                    className={`absolute -inset-4 bg-gradient-to-br ${project.color} opacity-20 blur-3xl -z-10 group-hover:opacity-40 transition-opacity`}
                  />
                </div>

                {/* Content Side */}
                {/* Content Side */}
                <div className="w-full md:w-2/5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-widest uppercase text-blue-500">
                      0{index + 1}
                    </span>

                    <div className="h-px w-8 bg-blue-500" />

                    {project.featured && (
                      <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400 border border-orange-400/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold mb-1">
                      {project.title}
                    </h3>

                    <p
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-bold text-lg`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                    {project.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-500 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-gray-300 dark:border-gray-700 backdrop-blur-md"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wider uppercase border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-full hover:scale-105 transition-transform"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-6 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-bold text-sm hover:text-blue-500 transition-colors"
                    >
                      <Github size={18} />
                      SOURCE
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
