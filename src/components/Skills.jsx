import { useEffect, useRef, useState, useMemo } from "react";
import LogoScrolling from "./LogoScroling";
import InfiniteMenu from "./ui/InfiniteMenu";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = useMemo(
    () => [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "REST APIs",
        logo: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Gemini",
        logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      },
      {
        name: "LLMs",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
    ]
  );

  const items = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "HTML",
    description: "The standard markup language for web pages",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS",
    description: "Styling language for designing web pages",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "JavaScript",
    description: "Dynamic scripting language for the web",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev",
    title: "React",
    description: "UI library for building component-based interfaces",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    link: "https://redux.js.org",
    title: "Redux",
    description: "Predictable state container for JavaScript apps",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com",
    title: "Tailwind",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org",
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    link: "https://expressjs.com",
    title: "Express.js",
    description: "Minimal and flexible Node.js web framework",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    link: "https://fastapi.tiangolo.com",
    title: "FastAPI",
    description: "Modern, fast Python web framework for building APIs",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
    link: "https://restfulapi.net",
    title: "REST APIs",
    description: "Architectural style for distributed hypermedia systems",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com",
    title: "MongoDB",
    description: "NoSQL document-oriented database",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    link: "https://www.mysql.com",
    title: "MySQL",
    description: "Open-source relational database management system",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com",
    title: "Git",
    description: "Distributed version control system",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com",
    title: "GitHub",
    description: "Platform for hosting and collaborating on Git repos",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    link: "https://www.python.org",
    title: "Python",
    description: "Versatile high-level programming language",
  },
  {
    image: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    link: "https://gemini.google.com",
    title: "Gemini",
    description: "Google's multimodal AI model",
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 min-h-screen relative"
      style={{ fontFamily: "Raleway" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Stack I Work With
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            A combination of modern technologies I use to build scalable
            applications
          </p>
        </div>

        {/* Logo Scroll */}
        <div className="max-w-2xl mx-auto">
          <LogoScrolling />
        </div>

        {/* Skills */}
        <div
          className={`flex flex-wrap justify-center gap-6 mt-7 transition-all 
         animate-fadeIn`}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center gap-3 p-2 rounded-xl cursor-pointer
                         hover:-translate-y-2 hover:scale-110
                         hover:bg-neutral-100 dark:hover:bg-neutral-900
                         hover:shadow-lg animate-fadeIn`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <span className="text-s text-neutral-500 opacity-0 group-hover:opacity-100 dark:group-hover:text-white transition-all duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
         <h4 className="text-center text-xl font-bold mt-20">About Techstacks</h4>



        <div className= "mt-10"
        style={{ height: "600px", position: "relative" ,width:"100%" }}>
          <InfiniteMenu items={items} scale={1} />
        </div>
      </div>

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
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
