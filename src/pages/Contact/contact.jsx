import { useState } from "react";
import {
  FaLeaf,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaCheckCircle,
  FaPaperPlane,
  FaRegLightbulb,
  FaBoxOpen,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../../Components/Navbar";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone)) next.phone = "Enter a valid 10-digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Please add a subject";
    if (!form.message.trim()) next.message = "Please write a message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const whyContact = [
    { icon: FaRegLightbulb, text: "Expert guidance on Ayurvedic products" },
    { icon: FaBoxOpen, text: "Assistance with tracking your order" },
    { icon: FaClipboardList, text: "Information on dosage and usage" },
    { icon: FaCommentDots, text: "Feedback and suggestions" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
    <Navbar/>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-5 pb-14 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium text-[#8a6d1f]">
            <MdSupportAgent className="text-[#166534]" /> Get In Touch
          </span>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            We're Here for Your Wellness Journey
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            "Have questions about our Piles Kit or Shilajit? Our Ayurvedic
            experts are here to help you on your journey to wellness."
          </p>
        </div>
      </section>

      {/* ============ INFO CARDS ============ */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Registered Office */}
          <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#22C55E] shadow-md shadow-[#166534]/20 transition-transform duration-300 group-hover:scale-110">
              <FaMapMarkerAlt className="text-white" size={16} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">Registered Office</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
             Prajanya Healthcares Pvt. Ltd.
              <br />
              Cabin No. 06, G-1 Floor, AGS Building
              <br />
              H-61, Sector 63, Noida, Uttar Pradesh
            </p>
          </div>

          {/* Customer Support */}
          <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#22C55E] shadow-md shadow-[#166534]/20 transition-transform duration-300 group-hover:scale-110">
              <FaWhatsapp className="text-white" size={17} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">Customer Support</h3>
            <p className="mt-2 text-sm font-medium text-[#0F172A]">+91 93191 77676</p>
            <p className="text-xs text-slate-400">(WhatsApp & Call)</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
              <FaClock className="text-[#22C55E]" /> 10:00 AM – 6:00 PM (Mon–Sat)
            </p>
            <a
              href="https://wa.me/919319177676"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#166534]/10 px-4 py-2 text-xs font-semibold text-[#166534] transition-all duration-300 hover:bg-[#166534] hover:text-white"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          {/* Email Us */}
          <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#22C55E] shadow-md shadow-[#166534]/20 transition-transform duration-300 group-hover:scale-110">
              <IoMdMailUnread className="text-white" size={17} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">Email Us</h3>
            <p className="mt-2 text-sm font-medium text-[#0F172A]">customercare@amritashya.in</p>
            <p className="mt-1 text-xs text-slate-500">We aim to respond within 24 hours.</p>
            <a
              href="mailto:customercare@amritashya.in"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#166534]/10 px-4 py-2 text-xs font-semibold text-[#166534] transition-all duration-300 hover:bg-[#166534] hover:text-white"
            >
              <IoMdMailUnread /> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ============ FORM + WHY CONTACT ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="font-serif text-xl font-semibold text-[#0F172A] sm:text-2xl">
              Send us a Message
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Fill out the form below and our team will get back to you
              within 24 hours. Whether you have questions about products,
              orders, or Ayurvedic consultation, we're here to assist.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                      errors.name
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#22C55E] focus:ring-[#22C55E]/20"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#22C55E] focus:ring-[#22C55E]/20"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                      errors.email
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#22C55E] focus:ring-[#22C55E]/20"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                      errors.subject
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#22C55E] focus:ring-[#22C55E]/20"
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                    errors.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#22C55E] focus:ring-[#22C55E]/20"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#166534] to-[#22C55E] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#166534]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {sent ? (
                  <>
                    <FaCheckCircle /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Why Contact Us + Socials */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-[#0F172A]">
                Why Contact Us?
              </h3>
              <ul className="mt-5 space-y-4">
                {whyContact.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#166534]/10">
                      <Icon className="text-[#166534]" size={14} />
                    </span>
                    <span className="pt-1.5 text-sm text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#0F172A]">Connect With Us</h3>
              <p className="mt-1 text-xs text-slate-500">
                Follow for wellness tips, offers, and Ayurvedic remedies.
              </p>
              <div className="mt-4 flex gap-3">
                {[
                  { icon: FaFacebook, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaWhatsapp, href: "https://wa.me/919319177676" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#22C55E]/40 hover:bg-[#166534] hover:text-white"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#166534] to-[#0F172A] p-6 text-white shadow-sm">
              <h3 className="font-serif text-base font-semibold">Need Urgent Help?</h3>
              <p className="mt-1 text-xs text-[#CBD5E1]">
                Chat with our Ayurvedic wellness experts directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/919319177676"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;