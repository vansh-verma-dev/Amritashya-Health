import { useState } from "react";
import {
  FaLeaf,
  FaUserShield,
  FaCreditCard,
  FaBullhorn,
  FaLock,
  FaShareAlt,
  FaCookieBite,
  FaUserEdit,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../../Components/Navbar";

const sections = [
  {
    id: "info-collect",
    number: "1",
    icon: FaUserShield,
    title: "Information We Collect",
    body: (
      <>
        <p className="text-sm font-semibold text-[#0F172A]">a. Personal Information</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          When you place an order or contact us, we may collect:
        </p>
        <ul className="mt-3 space-y-2">
          {["Full name", "Phone number", "Email address", "Shipping & billing address"].map((i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          This information is required to process and deliver your order.
        </p>

        <p className="mt-5 text-sm font-semibold text-[#0F172A]">b. Payment Information</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          We do <span className="font-semibold text-[#0F172A]">NOT</span> store your card or
          bank details. All payments are securely processed through certified
          third-party payment gateways such as:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Razorpay", "Cashfree", "Other PCI-DSS compliant partners"].map((p) => (
            <span
              key={p}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {p}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          These providers handle your payment data using encrypted systems.
        </p>
      </>
    ),
  },
  {
    id: "info-use",
    number: "2",
    icon: FaCreditCard,
    title: "How We Use Your Information",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          We use your data only for legitimate business purposes:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "To confirm and deliver your orders",
            "To send order updates via SMS, WhatsApp, or email",
            "To provide customer support",
            "To improve our products and services",
            "To prevent fraud or misuse",
          ].map((i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl bg-[#166534]/5 px-4 py-3 text-sm font-medium text-[#166534]">
          We do not sell or rent your personal information to third parties.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "3",
    icon: FaLock,
    title: "Data Security",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          We implement industry-standard security measures including:
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {["SSL Encryption", "Secure Payment Processing", "Restricted Internal Data Access"].map(
            (i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-600"
              >
                <MdVerified className="flex-shrink-0 text-[#22C55E]" />
                {i}
              </div>
            )
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Your information is protected from unauthorized access, disclosure,
          or alteration.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    number: "4",
    icon: FaShareAlt,
    title: "Data Sharing",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          We may share limited information only with trusted service
          providers:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            ["Delivery partners", "for shipping"],
            ["Payment gateways", "for transactions"],
            ["Customer support tools", "for assistance"],
          ].map(([main, note]) => (
            <li key={main} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
              <span className="font-medium text-[#0F172A]">{main}</span>
              <span className="text-slate-400">({note})</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          They are authorized to use your data only for completing the
          requested service.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "5",
    icon: FaCookieBite,
    title: "Cookies & Tracking",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          Our website may use cookies to:
        </p>
        <ul className="mt-3 space-y-2">
          {["Improve user experience", "Remember preferences", "Analyze website performance"].map(
            (i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
                {i}
              </li>
            )
          )}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          You may disable cookies in your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: "6",
    icon: FaUserEdit,
    title: "Your Rights",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">You may request to:</p>
        <ul className="mt-3 space-y-2">
          {["Update your personal information", "Delete your account data", "Stop promotional communication"].map(
            (i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
                {i}
              </li>
            )
          )}
        </ul>
        <a
          href="mailto:customercare@Prajanya.in"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#166534]/10 px-4 py-2.5 text-sm font-semibold text-[#166534] transition-all duration-300 hover:bg-[#166534] hover:text-white"
        >
          <FaEnvelope size={12} /> Info@prajanyahealthcares.com
        </a>
      </>
    ),
  },
  {
    id: "policy-updates",
    number: "7",
    icon: FaSyncAlt,
    title: "Policy Updates",
    body: (
      <p className="text-sm leading-relaxed text-slate-500">
        We may update this policy when required. Updated versions will always
        be available on this page.
      </p>
    ),
  },
];

function Privacy() {
  const [activeId, setActiveId] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
 <Navbar/>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-5 pb-14 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium text-[#8a6d1f]">
            <FaUserShield className="text-[#166534]" /> Legal & Policies
          </span>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Transparency and trust are at the core of Prajanya Ayurveda.
            Please read our policies carefully to understand how we protect
            your data and the terms of using our services.
          </p>
        </div>
      </section>

      {/* ============ INTRO CARD ============ */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
              Last Updated: <span className="text-[#0F172A]">[Add Date]</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#166534]/10 px-3 py-1 text-[11px] font-semibold text-[#166534]">
              <MdVerified /> PCI-DSS Compliant Payments
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Prajanya Ayurveda Pvt. Ltd. ("Company", "we", "our", "us")
            respects your privacy and is committed to protecting your
            personal information. This Privacy Policy explains how we
            collect, use, and safeguard your information when you access our
            website or purchase our products including the Piles Kit and
            Shilajit. By using our website, you agree to the practices
            described in this policy.
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

export default Privacy;