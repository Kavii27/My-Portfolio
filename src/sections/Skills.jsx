import { Code, Database, Server, Wrench, GitBranch, Cpu } from "lucide-react";

const skills = [
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Java EE (JSP/Servlets)", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: Code,
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML / CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB Atlas", "SQL Server"],
  },
  {
    title: "Languages",
    icon: Cpu,
    items: ["Java", "JavaScript", "Python", "PHP", "Kotlin", "C / C++"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub", "Apache Tomcat"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["VS Code", "Postman", "Figma", "XAMPP / phpMyAdmin", "ClickUp / Agile"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-text-primary)]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-3 text-2xl font-bold text-[var(--color-text-muted)]">Skills</span>
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

              {/* Skill items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-[var(--color-surface-light)] text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};