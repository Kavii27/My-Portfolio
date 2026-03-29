import { Code, Database, Server, Wrench, GitBranch, Cpu } from "lucide-react";
import { useEffect, useRef } from "react";

const skills = [
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Java EE (JSP/Servlets)", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML / CSS", level: 92 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB Atlas", level: 78 },
      { name: "SQL Server", level: 72 },
    ],
  },
  {
    title: "Languages",
    icon: Cpu,
    items: [
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 },
      { name: "Kotlin", level: 60 },
      { name: "C / C++", level: 65 },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 85 },
      { name: "Apache Tomcat", level: 72 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 80 },
      { name: "XAMPP / phpMyAdmin", level: 78 },
      { name: "ClickUp / Agile", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${level}%`;
          }, 120);
          observer.unobserve(bar);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(bar);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-6 last:mb-0">
      <p className="text-xs text-[var(--color-text-muted)] mb-1.5">{name}</p>
      <div className="h-[5px] bg-[var(--color-surface-light)] rounded-full overflow-hidden">
        <div
          ref={barRef}
          style={{
            width: "0%",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
            background:
              "linear-gradient(90deg, var(--color-sage-1), var(--color-gold-1))",
          }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-text-primary)]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-11">
          <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-gold-1)] mb-3">
            Skills
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Technologies I use to{" "}
            <em className="italic text-[var(--color-sage-1)]">
              build and scale
            </em>{" "}
            applications
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[var(--color-surface)] border border-[var(--color-border)]
              rounded-2xl p-6 relative overflow-hidden
              hover:-translate-y-[3px] hover:shadow-[0_10px_32px_rgba(45,38,32,0.09)]
              hover:border-[rgba(106,120,96,0.35)] transition-all duration-200"
            >
              {/* Top gradient bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0
                group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-sage-1), var(--color-gold-1))",
                }}
              />

              {/* Icon + Title */}
              <div className="flex items-center gap-2.5 mb-[18px]">
                <div
                  className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center flex-shrink-0
                  bg-[var(--color-background)] border border-[var(--color-border)]
                  group-hover:bg-[rgba(106,120,96,0.12)] group-hover:border-[rgba(106,120,96,0.3)]
                  transition-all duration-200"
                >
                  <skill.icon
                    className="w-[15px] h-[15px] text-[var(--color-sage-1)]"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="font-serif text-sm font-medium text-[var(--color-text-primary)]">
                  {skill.title}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-4 transition-all duration-200"
                style={{
                  background: "var(--color-border)",
                }}
              />

              {/* Skill bars */}
              {skill.items.map((item, i) => (
                <SkillBar key={i} name={item.name} level={item.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};