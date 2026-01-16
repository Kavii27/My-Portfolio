const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"}
]

export const Navbar = () => {
    const handleCvDownload = () => {

    }

    return(
       <header>
            <nav>
                <a href="#">Kaveesha</a>
                {/* Desktop Nav */}
                <div>
                    <div>
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}>{link.label}</a>
                        ))}    
                    </div>
                </div>

                <div>
                    <button onClick={handleCvDownload}>Download CV</button>
                    <button>DarkMode</button>
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