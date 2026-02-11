import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

const contactInfo =[
    {
        icon: Mail,
        label: "Email",
        value: "kaveeshasandeepani027@gmail.com",
        href: "mailto:kaveeshasandeepani027@gmail.com"
    }, 
    {
        icon: Phone,
        label: "Phone",
        value: "+94713608527",
        href: "tel:+94713608527"
    }, 
    {
        icon: MapPin,
        label: "Location",
        value: "Wennappuwa, Sri Lanka",
        href: "#"
    }, 
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
        } catch (error) {
            
        } finally {
            setIsLoading(false);
        }
    };

    return(
       <section id="projects" className="py-32 relative overflow-hidden">
        <div>
            {/* section header */}
            <div className="mb-12 text-center">
                <span>Get In Touch</span>
                <h2>Have a project in mind? I'd love to hear about it.</h2>
            </div>

            {/* content */}
            <div>
                {/* left side*/}
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="name"
                                className="">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => 
                                    setFormData({...formData, name: e.target.value})
                                }
                                />
                        </div>
                        <div>
                            <label 
                                htmlFor="name"
                                className="">Email</label>
                            <input 
                                type="email"   
                                id="email"
                                required
                                placeholder="you@email.com"
                                value={formData.email}
                                onChange={(e) => 
                                    setFormData({...formData, email: e.target.value})
                                }
                                />
                        </div>
                        <div>
                            <label 
                                htmlFor="message" 
                                className="">Message</label>
                            <textarea 
                                rows={5}
                                id="message"
                                required
                                placeholder="Your message"
                                value={formData.message}
                                onChange={(e) => 
                                    setFormData({...formData, message:e.target.value})
                                }
                                />
                        </div>
                        <button type="submit">
                            Send Message 
                        </button>
                    </form>
                </div>

                {/* right side */}
            </div>
        </div>
       </section>
    )
}