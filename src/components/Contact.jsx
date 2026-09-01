import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { SiGmail, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <SiGmail size={24} />,
      label: "Email",
      value: "ommroshan@gmail.com",
      href: "mailto:ommroshan@gmail.com",
    },

    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      value: "@omm_roshan",
      href: "https://github.com/omm010408",
    },

    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      value: "Omm Roshan Sahoo",
      href: "https://www.linkedin.com/in/omm-roshan-sahoo-432077273/",
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      value: "+91 9938292559",
      href: "https://wa.me/9938292559",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-black dark:text-white font-semibold tracking-[0.3em] uppercase text-sm">
            Contact
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
            Let’s Work Together
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Interested in collaborations, or building impactful
            software products? Feel free to reach out.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-black transition-all"
              />

              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-blue-500 transition-all"
              />

              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-blue-500 transition-all"
              />

              <textarea
                id="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 resize-none outline-none focus:border-blue-500 transition-all"
              />

              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 hover:bg-blue-500 hover:scale-[1.02]"
                }`}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>

            <img src="/assets/contact-us-animate.svg" alt="contact_svg" />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gray-400 mb-1">Location</p>

                  <h4 className="text-lg font-semibold">
                    Dhenkanal, Odisha, India
                  </h4>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gray-400 mb-1">Response Time</p>

                  <h4 className="text-lg font-semibold">
                    Usually within 24 hours
                  </h4>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500/40 hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="mb-4 text-blue-500  transition-transform">
                    {method.icon}
                  </div>

                  <h4 className="font-semibold mb-1 hover:text-xl">{method.label}</h4>

                  <p className="text-sm text-gray-400 truncate">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
