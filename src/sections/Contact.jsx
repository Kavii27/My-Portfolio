import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

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

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables"
                );
            } 

            await emailjs.send(
                serviceId, 
                templateId, 
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }, 
                publicKey
            );

            setSubmitStatus({
                type: "success", 
                message: "Message sent successfully! I'll get back to you soon",
            });

            setFormData({name: "", email: "", message: ""})
            
        } catch (error) {
            console.error("EmailJs error:", error);
            setSubmitStatus({
                type: "error",
                message: 
                    error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return(
       <section
            id="contact"
            className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-text-primary)]"
            >
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="mb-12 text-center sm:mb-16">
                <span className="inline-block mb-3 text-2xl font-bold text-[var(--color-text-muted)]">
                    Get In Touch
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    Have a project in mind?{" "}
                    <span className="bg-gradient-to-r from-[var(--color-sage-1)] via-[var(--color-gold-1)] to-[var(--color-sage-2)] bg-clip-text text-transparent">
                    Let's talk
                    </span>
                </h2>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* LEFT - FORM */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm">
                    
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                        Name
                        </label>
                        <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
                        bg-[var(--color-surface-light)] border border-[var(--color-border)] 
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-2)]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                        Email
                        </label>
                        <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
                        bg-[var(--color-surface-light)] border border-[var(--color-border)] 
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-2)]"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                        Message
                        </label>
                        <textarea
                        rows={5}
                        required
                        placeholder="Your message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
                        bg-[var(--color-surface-light)] border border-[var(--color-border)] 
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-2)]"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base 
                        rounded-lg sm:rounded-xl font-medium
                        bg-[var(--color-sage-1)] text-white hover:bg-[var(--color-sage-2)] transition"
                    >
                        {isLoading ? "Sending..." : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                        )}
                    </button>

                    {/* Status */}
                    {submitStatus.type && (
                        <div
                        className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border text-xs sm:text-sm
                        ${
                            submitStatus.type === "success"
                            ? "bg-green-500/10 border-green-500/30 text-green-600"
                            : "bg-red-500/10 border-red-500/30 text-red-600"
                        }`}
                        >
                        {submitStatus.type === "success" ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        {submitStatus.message}
                        </div>
                    )}
                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6 sm:space-y-8">
                    
                    {/* Contact Info */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-4 sm:space-y-5">
                        {contactInfo.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl 
                            hover:bg-[var(--color-surface-light)] transition"
                        >
                            <div className="p-2.5 sm:p-3 rounded-lg bg-[var(--color-sage-1)]/10">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-sage-2)]" />
                            </div>

                            <div>
                            <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                                {item.label}
                            </p>
                            <p className="text-sm sm:text-base font-medium break-all">
                                {item.value}
                            </p>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>

                    {/* Availability */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm sm:text-base font-medium">
                        Currently Available
                        </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        I'm currently open to new opportunities and exciting projects.
                        Whether you need a full-time engineer or a freelance consultant,
                        let’s talk!
                    </p>
                    </div>

                </div>
                </div>
            </div>
        </section>
    )
}