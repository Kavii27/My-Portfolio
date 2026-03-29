import { User, Code, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-text-primary)]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header (same style as Projects & Contact) */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-3 text-xl sm:text-2xl font-bold text-[var(--color-text-muted)]">
            About Me
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-[var(--color-sage-1)] via-[var(--color-gold-1)] to-[var(--color-sage-2)] bg-clip-text text-transparent">
              impactful digital experiences
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT - TEXT */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Hi, I’m <span className="font-medium text-[var(--color-text-primary)]">Kaveesha Sandeepani</span>, 
              an undergraduate IT student and passionate developer who loves building 
              clean, user-friendly, and efficient digital solutions.
            </p>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              I specialize in full-stack development using modern technologies like 
              <span className="font-medium text-[var(--color-text-primary)]"> React, Node.js, MongoDB,</span> 
              and <span className="font-medium text-[var(--color-text-primary)]">Java</span>. 
              My focus is on creating systems that are not only functional but also 
              intuitive and visually appealing.
            </p>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              I enjoy solving real-world problems through technology—from smart 
              management systems to interactive web applications. I'm always 
              learning, improving, and exploring new tools to enhance my skills.
            </p>
          </div>

          {/* RIGHT - CARDS */}
          <div className="grid gap-6">
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:shadow-md transition">
              <div className="p-3 rounded-lg bg-[var(--color-sage-1)]/10">
                <Code className="w-5 h-5 text-[var(--color-sage-2)]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Full-Stack Development</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Building scalable web applications using MERN stack and Java-based architectures.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:shadow-md transition">
              <div className="p-3 rounded-lg bg-[var(--color-gold-1)]/10">
                <User className="w-5 h-5 text-[var(--color-gold-2)]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">User-Centered Design</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Creating clean, modern UI/UX experiences that focus on usability and accessibility.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:shadow-md transition">
              <div className="p-3 rounded-lg bg-[var(--color-sage-1)]/10">
                <Sparkles className="w-5 h-5 text-[var(--color-sage-2)]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Continuous Learning</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Always exploring new technologies, frameworks, and best practices to grow as a developer.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};