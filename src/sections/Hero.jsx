import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
    

    return(
       <section className="relative min-h-screen lg:flex lg:items-center">
            <div className="absolute inset-0 -z-10">

            </div>
            {/*content*/}
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left column */}
                <div className="max-w-2xl lg:w-1/2 pt-6 lg:pt-0">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-[var(--color-surface)] text-[var(--color-text-secondary)]">✨ Available for opportunities</span>
                    </div>
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[var(--color-bw)]">
                        Hello, I'm&nbsp;
                        <span className="text bg-gradient-to-r from-[var(--color-sage-1)] via-[var(--color-gold-1)] to-[var(--color-sage-2)] bg-clip-text text-transparent">Kaveesha Sandeepani</span>
                    </h1>
                    <h2 className="mt-3 text-2xl sm:text-2xl text-[var(--color-text-muted)]">
                        and I'm  a&nbsp;
                        <Typewriter
                            words={[
                            "Software Engineering Undergraduate",
                            "Full stack Developer",
                            "UI Designer",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        /></h2>
                    
                    <p className="mt-3 max-w-xl text-base text-[var(--color-bw)] sm:text-lg">A creative developer crafting beautiful digital experiences with clean code and thoughtful design</p>
                    
                    <div className="mt-8 flex items-center gap-4 ">
                        <a href="#contact" className="px-6 py-4 inline-flex rounded-full bg-[var(--color-sage-3)] text-white">Get in Touch<ArrowRight  /></a>
                        <a href="#projects" className="px-6 py-4 rounded-full bg-white text-black">View Work</a>
                    </div>

                    <div className="mt-9 flex items-center gap-5"> 
                        <a href="https://github.com/Kavii27" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition">
                                <FaGithub size={32}/>
                        </a>
                        <a href="https://www.linkedin.com/in/kaveesha-sandeepani-1769532ba/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition">
                                <FaLinkedin size={32}/>
                        </a>
                        <a href="mailto:kaveeshasandeepani027@gmail.com" 
                           className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition">
                                <Mail size={32}/>
                        </a>
                    </div>
                </div>
                {/* Right column - profile image */}
           
                <div className="relative flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                {/* Glow background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--color-gold-1)] via-[var(--color-sage-1)] to-[var(--color-gold-2)] blur-3xl opacity-50"></div>

                    {/* Image wrapper */}
                    <div className="relative w-80 h-80 sm:w-80 sm:h-80 lg:w-120 lg:h-120 rounded-full overflow-hidden border border-[var(--color-border)]">
                        <img
                        src="/profile-photo.jpeg"
                        alt="Kaveesha Sandeepani"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>


            </div>
            
       </section>
    )
}