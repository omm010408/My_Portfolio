import LogoLoop from "../components/ui/LogoLoop";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGit,
  SiPython,
  SiOpenai,
} from "react-icons/si";


const techLogos = [
  // Frontend
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },

  // Backend
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiExpress />, title: "Express.js" },

  // Databases
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiMysql />, title: "MySQL" },

  // DevOps & Cloud

  { node: <SiDocker />, title: "Docker" },
  { node: <SiKubernetes />, title: "Kubernetes" },

  // Version Control
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },

  // AI / Scripting
  { node: <SiPython />, title: "Python" },
  { node: <SiOpenai />, title: "Generative AI" },
];

function LogoScrolling() {
  return (
    <div
      style={{
        height: "200px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={44}
        gap={36}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Skills and technologies"
      />
    </div>
  );
}

export default LogoScrolling;
