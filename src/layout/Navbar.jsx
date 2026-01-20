import {Sun , Moon} from "lucide-react";
import { useState , useEffect} from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"}
]

export const Navbar = () => {
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

        {/*document.documentElement.classList.toggle("dark"); */}
    } 

    const handleCvDownload = () => {

    }

    return(
       <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface)]">
            <nav className="flex items-center justify-between px-8 py-4">
                <a href="#">Kaveesha</a>
                {/* Desktop Nav */}
                <div className="flex gap-8">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-300 hover:text-[var(--color-sage-1)]">{link.label}</a>
                    ))}    
                </div>
                

                <div className="flex items-center gap-4">
                    <button 
                    onClick={handleCvDownload}
                    className="px-5 py-2 font-medium rounded-full bg-[var(--color-sage-1)] text-[var(--color-background)] hover:bg-[var(--color-gold-1)] transition-colors duration-300">
                    Download CV</button>

                    <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-sage-1)] transition-colors duration-300">
                        {darkMode? <Sun size={18} /> : <Moon size={18}/>}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <div>
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}>{link.label}</a>
                        ))}    
                    </div>
                </div>
            </nav>
       </header>
    )
}