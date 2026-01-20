import {Sun , Moon, Menu, X} from "lucide-react";
import { useState , useEffect} from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"}
]

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() =>{
        const root = document.documentElement;

        if(darkMode){
            root.classList.add("dark");
            localStorage.setItem("theme", "dark")
        }else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);

        //document.documentElement.classList.toggle("dark"); 
    } 

    const handleCvDownload = () => {
        const link = document.createElement("a");  //create hidden link
        link.href = "/cv/Kaveesha_Sandeepani_CV.pdf";
        link.download = "Kaveesha_Sandeepani_CV.pdf";
        link.click();
    }

    return(
       <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
            <nav className="flex items-center font-bold justify-between px-8 py-5 max-w-7xl mx-auto">
                <a href="#" className="text-lg bg-gradient-to-r from-[var(--color-sage-1)] via-[var(--color-gold-1)] to-[var(--color-sage-2)] bg-clip-text text-transparent hover:from-[var(--color-sage-2)] hover:via-[var(--color-gold-2)] hover:to-[var(--color-sage-1)] transition-all duration-500">
                    Kaveesha Sandeepani</a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-300 hover:text-[var(--color-sage-1)]">{link.label}</a>
                    ))}    
                </div>
                

                <div className="flex items-center gap-4">
                    <button 
                    onClick={handleCvDownload}
                    className="hidden sm:block px-6 py-2.5 font-medium rounded-full bg-gradient-to-r from-[var(--color-sage-1)] to-[var(--color-sage-2)] text-[var(--color-background)] hover:from-[var(--color-gold-1)] hover:to-[var(--color-gold-2)] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">
                    Download CV</button>

                    <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-sage-1)] transition-colors duration-300">
                        {darkMode? <Sun size={18} /> : <Moon size={18}/>}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-sage-1)] transition-colors">
                        {menuOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>

                
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link, index) => (
                            <a
                            key={index}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[var(--color-text-primary)] text-sm font-medium hover:text-[var(--color-sage-1)] transition-colors">
                                {link.label}
                            </a>
                        ))}

                    <button
                        onClick={handleCvDownload}
                        className="mt-2 px-5 py-2 rounded-full bg-[var(--color-sage-1)] text-[var(--color-background)] hover:bg-[var(--color-gold-1)] transition-colors"
                    >
                        Download CV
                    </button>
                    </div>
                </div>
            )}
       </header>
    )
}