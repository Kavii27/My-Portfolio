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
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive personal portfolio website to showcase projects, skills, and experience. Designed with a clean UI, smooth navigation, and mobile-first responsiveness.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "MovieSphere – Movie Browsing Web Application",
    description:
      "An interactive movie browsing application with real-time search and genre filtering. Focused on clean UI/UX, responsive layouts, and smooth state management using React component-based architecture.",
    image: "/projects/moviesphere.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "#",
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
    github: "#",
  },
  {
    title: "Habitly – Android Wellness & Habit Tracker",
    description:
      "An Android application for habit tracking, hydration reminders, and mood monitoring. Includes analytics with weekly visual reports and local data persistence using Shared Preferences.",
    image: "/projects/habitly.png",
    tags: ["Kotlin", "Android", "Shared Preferences"],
    link: "#",
    github: "#",
  },
  {
    title: "AppPlus – Online App Store",
    description:
      "A full-stack online app store featuring user authentication, application browsing, inquiry and feedback management, and app ratings. Includes a complete Inquiry Management CRUD module.",
    image: "/projects/appplus.jpeg",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
];


export const Projects = () => {
    return(
       <section id="projects" className="py-32 relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div>
                    <span>Featured Projects</span>
                </div>
                {/* projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx}>
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
                                    <h3>{project.title}</h3>
                                    <ArrowUpRight/>
                                </div>
                                <p>{project.description}</p>
                                <div>
                                    {project.tags.map((tag, tagIdx) => (
                                        <span>{tag}</span>
                                    ))}
                                </div>
                                <div>
                                    <a 
                                    href={project.github}
                                    className="">
                                        <FaGithub className="w-6 h-6"/>
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