
import { useEffect, useRef, useState } from "react";
import TypewriterText from "./ui/TyperwriterText";
import ScrollReveal from "./ui/ScrollReveal";
import { color } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("journey");
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const [visibleInterestItems, setVisibleInterestItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Animate timeline items step by step
  useEffect(() => {
    if (activeTab === "journey" && isVisible) {
      setVisibleTimelineItems([]);
      timeline.forEach((_, index) => {
        setTimeout(() => {
          setVisibleTimelineItems((prev) => [...prev, index]);
        }, index * 300); // 300ms delay between each item
      });
    }
  }, [activeTab, isVisible]);

  // Animate interest items step by step
  useEffect(() => {
    if (activeTab === "interests" && isVisible) {
      setVisibleInterestItems([]);
      interests.forEach((_, index) => {
        setTimeout(() => {
          setVisibleInterestItems((prev) => [...prev, index]);
        }, index * 150); // 150ms delay between each item
      });
    }
  }, [activeTab, isVisible]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "./My_Cv.pdf";
    link.download = "My_Cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeline = [
    {
      year: "2026",
      title: "Pursuing in Bachelors of Technology (CSE)",
      description:
        "Currently Pursuing my Bachelor's degree in Computer Science with strong academic record 8.78/10 A+ distinction along with a strong focus on full stack web development, problem solving, and modern Animations.",
      icon: "fa-solid fa-user-graduate",
      color: "aliceblue",
    },
    {
      year: "2025",
      title: "Full Stack Journey Begins and Mastery In Multiple Full-Stack Technologies",
      description:
        " Started learning Full-Stack and Mastered multiple technologies like MERN stack,JS libraries, Animation libraries (Gsap, Framer Motion), Python.",
      icon: "fa-solid fa-graduation-cap",
      color: "#3B82F6", // blue
    },
    {
      year: "2023",
      title: "Deep Dive into Python",
      description: "Mastered Python and did some DSA related to arrays",
      icon: "fa-solid fa-code",
      color: "#10B981", // green
    },
    {
      year: "2022",
      title: "First Steps in Coding",
      description: "Discovered passion for Python and problem-solving",
      icon: "fa-solid fa-seedling",
      color: "#F59E0B", // amber
    },
  ];

  const interests = [
    {
      name: "Web Development",
      description: "Building scalable applications",
      icon: "fa-solid fa-globe",
      color: "#3B82F6", // blue
    },
    {
      name: "System Design",
      description: "Architecture & patterns",
      icon: "fa-solid fa-diagram-project",
      color: "#8B5CF6", // purple
    },
    {
      name: "Trading",
      description: "Investing in forex",
      icon: "fa-solid fa-dumbbell",
      color: "#EF4444", // red
    },
    {
      name: "Learning",
      description: "Continuous improvement",
      icon: "fa-solid fa-book-open",
      color: "#F59E0B", // amber
    },
    {
      name: "Problem Solving",
      description: "DSA & algorithms",
      icon: "fa-solid fa-brain",
      color: "#EC4899", // pink
    },
    {
      name: "Open Source",
      description: "Contributing to community",
      icon: "fa-brands fa-github",
      color: "#10B981", // green
    },
  ];

  const tabs = [
    {
      id: "journey",
      label: "My Journey",
      icon: "fa-solid fa-map-location-dot",
    },
    { id: "interests", label: "Interests", icon: "fa-solid fa-heart" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            About Me
          </h1>
          <div
            className={`w-20 h-0.5 bg-black dark:bg-white mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        {/* Main Content */}
        <div
          className={`grid md:grid-cols-2 gap-16 mb-24 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="relative">
                <img
                  src="/My_Image.jpeg"
                  alt="Omm Roshan Sahoo"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-black dark:border-white transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div
              className="space-y-5 text-sm text-black dark:text-white leading-relaxed"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <p
                className={`transition-all duration-700 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                } hover:opacity-90`}
              >
                I'm a passionate{" "}
                <span className="font-semibold">Full Stack Developer</span>{" "}
                focused on building scalable, responsive, and production-ready
                web applications using modern technologies.
              </p>

              <p
                className={`transition-all duration-700 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                } hover:opacity-90`}
              >
                I work primarily with the{" "}
                <span className="font-semibold">MERN stack</span> and enjoy
                developing clean user interfaces, RESTful APIs, authentication
                systems, and efficient backend architectures.
              </p>

              <p
                className={`transition-all duration-700 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                } hover:opacity-90`}
              >
                Alongside development, I actively practice{" "}
                <span className="font-semibold">
                  Data Structures & Algorithms
                </span>{" "}
                and continuously improve my problem-solving, system design, and
                software engineering skills.
              </p>

              <p
                className={`transition-all duration-700 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                } hover:opacity-90`}
              >
                Currently, I’m building full-stack projects while
                preparing for{" "}
                <span className="font-semibold">
                  Upcoming Hackathons
                </span>{" "}
                where I can contribute, learn, and grow as a developer.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={handleDownloadCV}
                style={{ fontFamily: "'Raleway', sans-serif" }}
                className={`group px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-medium border-2 border-black dark:border-white transition-all duration-700 delay-800 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>Download CV</span>
                  <i className="fa-solid fa-download transform group-hover:translate-y-1 transition-transform"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Download CV Button */}

      {/* Tabbed Content Section */}
      <div
        className={`mb-20 transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Tabs */}
        <div className="flex justify-center mb-16 gap-0">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ fontFamily: "'Raleway', sans-serif" }}
              className={`px-10 py-4 font-medium transition-all duration-500 border-b-4 ${
                activeTab === tab.id
                  ? "border-black dark:border-white text-black dark:text-white -mb-[2px]"
                  : "border-transparent text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white"
              }`}
            >
              <i className={`${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div className="space-y-8 animate-fadeIn">
              <h3
                className="text-3xl font-semibold text-center mb-16 text-black dark:text-white"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                <TypewriterText
                  words={["My Coding Journey", "How was my journey"]}
                />
              </h3>
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-black dark:bg-white"></div>

                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 md:mb-16 transition-all duration-700 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } ${
                      visibleTimelineItems.includes(index)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                  >
                    <div
                      className={`pl-20 md:pl-0 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:ml-auto md:pl-16"
                          : "md:mr-auto md:pr-16"
                      }`}
                    >
                      <div
                        className="group bg-white dark:bg-black p-8 border-2 border-black dark:border-white transition-all duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `8px 8px 0px 0px ${item.color}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <i
                            className={`${item.icon} text-2xl transition-transform duration-300 group-hover:scale-110`}
                            style={{ color: item.color }}
                          ></i>
                          <span className="text-xl font-bold text-black dark:text-white">
                            {item.year}
                          </span>
                        </div>
                        <h4
                          className="text-xl font-semibold mb-3 text-black dark:text-white"
                          style={{ fontFamily: "cursive" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className={`absolute top-8 left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 border-4 border-white dark:border-black transition-all duration-500 ${
                        visibleTimelineItems.includes(index)
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests Tab */}
          {activeTab === "interests" && (
            <div className="animate-fadeIn">
              <h3
                className="text-4xl font-extrabold text-center mb-16 text-black dark:text-white"
                style={{ fontFamily: "Raleway" }}
              >
                <TypewriterText
                  words={["What I am passionate about", "Things I like to Do"]}
                />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`group p-8 bg-white dark:bg-black border-2 border-black dark:border-white transition-all duration-700 hover:-translate-y-1 ${
                      visibleInterestItems.includes(index)
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-20 scale-95"
                    }`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${interest.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="mb-4">
                      <i
                        className={`${interest.icon} text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                        style={{ color: interest.color }}
                      ></i>
                    </div>
                    <h4
                      className="text-4xl font-semibold text-black dark:text-white mb-3"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      {interest.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="px-6 sm:px-12 md:px-20 lg:px-32 py-4"
        style={{
          fontFamily: "Raleway",
          marginTop: "200px",
          marginBottom: "200px",
        }}
      >
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={5}
          blurStrength={6}
          wordAnimationEnd="bottom top"
        >
          {`"A developer doesn't die when the terminal goes dark. Not when the last commit is pushed. Not when the final project ships. A developer dies only when the things they built are forgotten."`}
        </ScrollReveal>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
