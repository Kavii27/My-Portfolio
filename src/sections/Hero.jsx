import { ArrowRight } from "lucide-react"

export const Hero = () => {
    

    return(
       <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 -z-10">

            </div>
            {/*content*/}
            <div className="container mx-auto px-6">
                {/* Left column */}
                <div className="max-w-2xl">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-[var(--color-surface)] text-[var(--color-text-secondary)]">✨ Available for oppotunities</span>
                    </div>
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[var(--color-bw)]">
                        Hello, I'm&nbsp;
                        <span className="text bg-gradient-to-r from-[var(--color-sage-1)] via-[var(--color-gold-1)] to-[var(--color-sage-2)] bg-clip-text text-transparent">Kaveesha Sandeepani</span>
                    </h1>
                    <h2 className="mt-3 text-2xl sm:text-2xl text-[var(--color-text-muted)]">Software engineering undergraduate</h2>
                    
                    <p className="mt-3 max-w-xl text-base text-[var(--color-bw)] sm:text-lg">A creative developer crafting beautiful digital experiences with clean code and thoughtful design</p>
                    
                    <div className="mt-8 flex items-center gap-4 ">
                        <a href="#contact" className="px-6 py-4 inline-flex rounded-full bg-[var(--color-sage-3)] text-white">Get in Touch<ArrowRight  /></a>
                        <a href="#projects" className="px-6 py-4 rounded-full bg-white text-black">View Work</a>
                    </div>
                </div>
                {/* Right column - profile image */}
                <img src="" alt="" />
            </div>
            
       </section>
    )
}