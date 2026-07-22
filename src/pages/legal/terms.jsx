import { useState } from "react";
import {
  FaLeaf,
  FaCopyright,
  FaUserCheck,
  FaStethoscope,
  FaTags,
  FaCreditCard,
  FaBalanceScale,
  FaAddressCard,
  FaBullhorn,
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../../Components/Navbar";

const sections = [
  {
    id: "ownership",
    number: "1",
    icon: FaCopyright,
    title: "Ownership",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          This website and all its content are the intellectual property of
          Amritashya Ayurveda Pvt. Ltd., including:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Product names", "Logos", "Images", "Text", "Formulations", "Descriptions"].map((i) => (
            <span
              key={i}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {i}
            </span>
          ))}
        </div>
        <p className="mt-4 rounded-xl bg-[#166534]/5 px-4 py-3 text-sm font-medium text-[#166534]">
          Unauthorized use, copying, or redistribution is prohibited.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    number: "2",
    icon: FaUserCheck,
    title: "Eligibility",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          By placing an order you confirm:
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#166534]/10 text-xs font-bold text-[#166534]">
              18+
            </span>
            <p className="pt-1 text-sm text-slate-600">
              You are 18 years or older
            </p>
          </div>
          <div className="flex items-center justify-center text-xs font-semibold text-slate-400 sm:hidden">
            OR
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/15 text-[#8a6d1f]">
              <FaUserCheck size={13} />
            </span>
            <p className="pt-1 text-sm text-slate-600">
              You are using the website under adult supervision
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "medical-disclaimer",
    number: "3",
    icon: FaStethoscope,
    title: "Medical Disclaimer",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          Our products are Ayurvedic wellness products. The information
          provided on this website:
        </p>
        <ul className="mt-3 space-y-2.5">
          <li className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E]/15 text-[#166534]">
              <FaCheck size={9} />
            </span>
            Is for educational and informational purposes only
          </li>
          <li className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
              <FaTimes size={9} />
            </span>
            Is <span className="font-semibold text-[#0F172A]">NOT</span> a substitute for professional medical advice
          </li>
          <li className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
              <FaTimes size={9} />
            </span>
            Does <span className="font-semibold text-[#0F172A]">NOT</span> replace consultation with a qualified doctor
          </li>
        </ul>
        <p className="mt-4 rounded-xl bg-[#D4AF37]/10 px-4 py-3 text-sm font-medium text-[#8a6d1f]">
          Always consult a healthcare professional for serious medical conditions.
        </p>
      </>
    ),
  },
  {
    id: "pricing-orders",
    number: "4",
    icon: FaTags,
    title: "Pricing & Orders",
    body: (
      <ul className="space-y-2.5">
        {[
          "Prices may change without prior notice",
          "Orders depend on product availability",
          "In case of out-of-stock items, a full refund will be issued",
          "We reserve the right to cancel suspicious or fraudulent orders",
        ].map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
            {i}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "payments",
    number: "5",
    icon: FaCreditCard,
    title: "Payments",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          All payments are processed securely through third-party payment
          providers.
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#166534]">
          <MdVerified /> The company does not store sensitive financial details.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "6",
    icon: FaBalanceScale,
    title: "Limitation of Liability",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          The company shall not be held liable for:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "Incorrect product usage",
            "Allergic reactions due to undisclosed conditions",
            "Misinterpretation of product information",
          ].map((i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Users are responsible for proper usage.
        </p>
      </>
    ),
  },
  {
    id: "contact-info",
    number: "7",
    icon: FaAddressCard,
    title: "Contact Information",
    body: (
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[#0F172A]">
          Amritashya Ayurveda Pvt. Ltd.
        </p>
        <div className="flex items-start gap-2.5 text-sm text-slate-600">
          <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-[#166534]" size={13} />
          Cabin No. 06, G-1 Floor, AGS Building, H-61, Sector 63, Noida,
          Uttar Pradesh, India
        </div>
        <a
          href="mailto:customercare@amritashya.in"
          className="flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-[#166534]"
        >
          <IoMdMailUnread className="flex-shrink-0 text-[#166534]" size={14} />
          customercare@amritashya.in
        </a>
        <a
          href="tel:+919319177676"
          className="flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-[#166534]"
        >
          <FaPhoneAlt className="flex-shrink-0 text-[#166534]" size={12} />
          +91 93191 77676
        </a>
      </div>
    ),
  },
];

function Terms() {
  const [activeId, setActiveId] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* ============ NAVBAR ============ */}
   <Navbar/>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-5 pb-14 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium text-[#8a6d1f]">
            <FaBalanceScale className="text-[#166534]" /> Legal & Policies
          </span>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Transparency and trust are at the core of Amritashya Ayurveda.
            Please read our terms carefully to understand the rules and
            regulations for using our services.
          </p>
        </div>
      </section>

      {/* ============ INTRO CARD ============ */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[#0F172A]">
              Amritashya Ayurveda Pvt. Ltd.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#166534]/10 px-3 py-1 text-[11px] font-semibold text-[#166534]">
              <MdVerified /> Applies to All Users
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            By using this website and purchasing products, you agree to the
            following terms.
          </p>
        </div>
      </section>

      {/* ============ CONTENT: TOC + SECTIONS ============ */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Table of Contents */}
          <div className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                On This Page
              </p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setActiveId(s.id)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeId === s.id
                          ? "bg-[#166534]/10 text-[#166534]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-[#166534]"
                      }`}
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-[#166534] ring-1 ring-[#166534]/20">
                        {s.number}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6 lg:col-span-3">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#22C55E] text-sm font-bold text-white shadow-md shadow-[#166534]/20">
                    {s.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <s.icon className="text-[#166534]" size={16} />
                    <h2 className="font-serif text-lg font-semibold text-[#0F172A] sm:text-xl">
                      {s.title}
                    </h2>
                  </div>
                </div>
                <div className="mt-5 pl-0 sm:pl-14">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

 <Footer/>
    </div>
  );
}

export default Terms;