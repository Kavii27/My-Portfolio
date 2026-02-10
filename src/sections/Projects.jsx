import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Livora – Smart Residential Management System",
    description:
      "A smart residential management system with a QR-based Parcel Management Module. Security officers can log parcels, notify residents via email and in-app alerts, and ensure secure parcel handover using QR code validation. Includes analytics and monthly PDF reports.",
    image: "/projects/livora.jpeg",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "QR Code",
      "Nodemailer"
    ],
    link: "#",
    github: "https://github.com/VDewMin/Livora",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive personal portfolio website to showcase projects, skills, and experience. Designed with a clean UI, smooth navigation, and mobile-first responsiveness.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/Kavii27/My-Portfolio",
  },
  {
    title: "MovieSphere – Movie Browsing Web Application",
    description:
      "An interactive movie browsing application with real-time search and genre filtering. Focused on clean UI/UX, responsive layouts, and smooth state management using React component-based architecture.",
    image: "/projects/moviesphere.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/Kavii27/MovieSphere",
  },
  {
    title: "AutoHub – Vehicle Service & Fuel Station Management System",
    description:
      "A role-based Java web application for managing vehicle services and fuel station operations. Features service booking CRUD, secure authentication, MVC architecture, and role-based access control.",
    image: "/projects/autohub.jpeg",
    tags: [
      "Java",
      "JSP",
      "Servlets",
      "MySQL",
      "MVC",
      "OOP",
      "Bootstrap"
    ],
    link: "#",
    github: "https://github.com/Sachintha-88/AutoHub",
  },
  {
    title: "Habitly – Android Wellness & Habit Tracker",
    description:
      "An Android application for habit tracking, hydration reminders, and mood monitoring. Includes analytics with weekly visual reports and local data persistence using Shared Preferences.",
    image: "/projects/habitly.png",
    tags: ["Kotlin", "Android", "Shared Preferences"],
    link: "#",
    github: "https://github.com/Kavii27/Habitly",
  },
  {
    title: "AppPlus – Online App Store",
    description:
      "A full-stack online app store featuring user authentication, application browsing, inquiry and feedback management, and app ratings. Includes a complete Inquiry Management CRUD module.",
    image: "/projects/appplus.jpeg",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/Kavii27/appPlus---Online-App-Store",
  },
];


export const Projects = () => {
    return(
       <section id="projects" className="py-32 relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="mb-12 text-center">
                    <span className="inline-block mb-3 text-2xl font-bold text-[var(--color-text-muted)]">Featured Projects</span>
                </div>
                {/* projects grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx}
                            className="group rounded-2xl bg-[var(--color-surface)] shadow-lg border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            {/* content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold text-[var(--color-bw)] ">{project.title}</h3>
                                    <ArrowUpRight/>
                                </div>
                                <p className="text-sm text-[var(--color-bw)]">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span className="px-3 py-1 text-xs rounded-full bg-[var(--color-surface-light)] text-[var(--color-text-secondary)]">{tag}</span>
                                    ))}
                                </div>
                                <div>
                                    <a 
                                    href={project.github}
                                    className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                                        <FaGithub className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
       </section>
    )
}