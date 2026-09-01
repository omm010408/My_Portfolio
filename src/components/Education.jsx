import { useEffect, useRef, useState, useMemo } from "react";
import TypewriterText from "./ui/TyperwriterText";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [gradeCount, setGradeCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [visibleAchievements, setVisibleAchievements] = useState([]);
  const sectionRef = useRef(null);

  const educationData = useMemo(
    () => [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science",
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        duration: "2025 - 2029",
        grade: "8.78 CGPA",
        semester: "1st Year completed with A+ distinction CGPA : 8.78/10",
        description:
          "Specialized in CS fundamentals, Web Developement, and Algorithms with hands-on experience in modern development practices.",
        achievements: [
          "Gained O grade in every programming subject",
          "Helped 10+ friends in improving their programming skill",
          "Participated in a hackathon",
        ],
        color: "from-blue-500 to-purple-600",
        icon: "fa-graduation-cap",
      },
      {
        degree: "Higher Secondary (12th)",
        field: "Science Stream",
        institution: "St. Xavier Higher Secondary School",
        location: "Athagarh, Cuttack",
        duration: "2023 - 2025",
        grade: "89%",
        semester: "Completed",
        description:
          "Focused on Physics, Chemistry, Mathematics and Computer Science with strong analytical foundation.",
        achievements: [
          "Scored highest percentile in jee main in our college",
          "2nd Highest in school in term of academics",
          "Sports Team Member",
        ],
        color: "from-green-500 to-emerald-600",
        icon: "fa-book-open",
      },
      {
        degree: "Secondary School (10th)",
        field: "Matriculation Studies",
        institution: "Brahmani Public School",
        location: "Dhenkanal, Odisha",
        duration: "2011 - 2023",
        grade: "84%",
        semester: "Completed",
        description:
          "Strong foundation in Mathematics and Science with consistent academic performance.",
        achievements: [
          "Math Olympiad Participant",
          "Caption of Scout and guide",
          "Act as a leading role in Scout and Guide Camp in Governor House",
        ],
        color: "from-orange-500 to-red-600",
        icon: "fa-school",
      },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animate achievements when switching tabs
  useEffect(() => {
    setVisibleAchievements([]);
    const activeEducation = educationData[activeIndex];
    activeEducation.achievements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleAchievements((prev) => [...prev, index]);
      }, index * 200);
    });
  }, [activeIndex, educationData]);

  // Counter animation for grade
  useEffect(() => {
    const activeEducation = educationData[activeIndex];
    const displayGrade =
      activeEducation.grade.split(":")[1]?.trim() || activeEducation.grade;
    const targetValue = parseFloat(displayGrade);

    if (isNaN(targetValue)) return;

    setGradeCount(0);
    const duration = 1500;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setGradeCount(targetValue);
        clearInterval(timer);
      } else {
        setGradeCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [activeIndex, educationData]);

  // Counter animation for year
  useEffect(() => {
    const activeEducation = educationData[activeIndex];
    const startYear = parseInt(activeEducation.duration.split("-")[0].trim());

    setYearCount(startYear - 10);
    const duration = 1500;
    const steps = 60;
    const increment = 10 / steps;
    let current = startYear - 10;

    const timer = setInterval(() => {
      current += increment;
      if (current >= startYear) {
        setYearCount(startYear);
        clearInterval(timer);
      } else {
        setYearCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [activeIndex, educationData]);

  const activeEducation = educationData[activeIndex];
  const displayGrade =
    activeEducation.grade.split(":")[1]?.trim() || activeEducation.grade;
  const isPercentage = displayGrade.includes("%");
  const isCGPA = displayGrade.includes("/");

  return (
    <section
      id="education"
      className="py-16 md:py-20 min-h-screen bg-white dark:bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="mb-3  font-extrabold text-5xl md:text-6xl  text-black dark:text-white"
            style={{ fontFamily: '"Raleway", cursive' }}
          >
            <TypewriterText
              words={["My Education", "Academic Journey", "Learning Path"]}
            />
          </h1>

          <p
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            A journey through academic excellence and continuous learning
          </p>
        </div>

        {/* Mini Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 p-2 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
            {educationData.map((edu, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-black text-white shadow-md scale-105`
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className={`fas ${edu.icon} text-lg md:text-xl`}></i>
                  <span
                    className="hidden sm:inline"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {edu.degree.split(" ")[0]}
                  </span>
                </span>

                {/* Tooltip for mobile */}
                <span className="sm:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {edu.degree}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with Animation */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`rounded-3xl shadow-2xl bg-gradient-to-br ${activeEducation.color} p-1 transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 lg:p-12">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Details */}
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl bg-gradient-to-r ${activeEducation.color} shadow-lg flex-shrink-0`}
                    >
                      <i
                        className={`fas ${activeEducation.icon} text-white`}
                      ></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-2xl md:text-3xl lg:text-4xl  text-gray-900 dark:text-white mb-1"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                      >
                        {activeEducation.degree}
                      </h3>
                      <p
                        className={`text-base md:text-lg font-semibold bg-gradient-to-r ${activeEducation.color} bg-clip-text text-transparent`}
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        {activeEducation.field}
                      </p>
                       
                       <a href="https://cbcs19.uuems.in/CBCS_Result/">
                        Latest Results
                       </a>


                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-university text-blue-500 text-lg mt-1"></i>
                      <div>
                        <p
                          className="font-semibold text-gray-900 dark:text-white"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          {activeEducation.institution}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-xs"></i>
                          {activeEducation.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <i className="fas fa-calendar-alt text-purple-500 text-lg"></i>
                      <p
                        className="font-medium"
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        {activeEducation.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-green-500 text-lg"></i>
                      <p
                        className="font-medium"
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        {activeEducation.semester}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                    <p
                      className="text-gray-600 dark:text-gray-400 leading-relaxed"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      {activeEducation.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                      <i className="fas fa-star text-yellow-500 "></i>
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeEducation.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${activeEducation.color} text-white shadow-md transition-all duration-500 ${
                            visibleAchievements.includes(idx)
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-50 translate-y-4"
                          }`}
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          <i className="fas fa-trophy text-xs mr-1 "></i>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Stats */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Grade Card */}
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border border-gray-200 dark:border-slate-600 shadow-lg">
                    <div className="mb-3">
                      <i className="fas fa-chart-line text-3xl text-gray-400"></i>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Academic Score
                    </p>
                    <p
                      className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${activeEducation.color} bg-clip-text text-transparent mb-2`}
                      style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                      {isPercentage
                        ? `${Math.floor(gradeCount)}%`
                        : isCGPA
                          ? gradeCount.toFixed(1)
                          : displayGrade}
                    </p>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      <i className="fas fa-medal text-yellow-500 "></i>
                      Overall Performance
                    </p>
                  </div>

                  {/* Duration Card */}
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border border-gray-200 dark:border-slate-600 shadow-lg">
                    <div className="mb-3">
                      <i className="fas fa-clock text-3xl text-gray-400"></i>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Started In
                    </p>
                    <p
                      className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${activeEducation.color} bg-clip-text text-transparent mb-2`}
                      style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                      {yearCount}
                    </p>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      <i className="fas fa-calendar-check text-blue-500"></i>
                      Academic Year
                    </p>
                  </div>

                  {/* Progress Indicator */}
                 
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev > 0 ? prev - 1 : educationData.length - 1,
                )
              }
              className="p-3 rounded-full bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors shadow-md hover:scale-110 transform"
              aria-label="Previous education"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev < educationData.length - 1 ? prev + 1 : 0,
                )
              }
              className="p-3 rounded-full bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors shadow-md hover:scale-110 transform"
              aria-label="Next education"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700;
            filter: drop-shadow(0 0 3px #ffd700);
          }
          50% { 
            text-shadow: 0 0 2px #ffd700, 0 0 10px #ffd700, 0 0 30px #ffd700;
            filter: drop-shadow(0 0 6px #ffd700);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .glow-star {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;
