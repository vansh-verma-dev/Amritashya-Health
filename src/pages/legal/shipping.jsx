import { useState } from "react";
import {
  FaLeaf,
  FaTruck,
  FaClock,
  FaTags,
  FaMapMarkedAlt,
  FaBan,
  FaUserShield,
  FaFileContract,
  FaStethoscope,
  FaBullhorn,
  FaBoxOpen,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdVerified, MdGavel } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../../Components/Navbar";

const sections = [
  {
    id: "shipping-delivery",
    number: "1",
    icon: FaTruck,
    title: "Shipping & Delivery Policy",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          Amritashya Ayurveda Pvt. Ltd. is committed to delivering your
          order in good condition and on time.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#166534]/10">
              <FaClock className="text-[#166534]" size={14} />
            </span>
            <p className="mt-3 text-sm font-semibold text-[#0F172A]">
              Shipping Timelines
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Orders processed within 24–48 hours. Delivery usually takes
              5–7 business days depending on your location.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#166534]/10">
              <FaTags className="text-[#166534]" size={14} />
            </span>
            <p className="mt-3 text-sm font-semibold text-[#0F172A]">
              No Hidden Charges
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              The price you see at checkout is final and inclusive of GST.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#166534]/10">
              <FaMapMarkedAlt className="text-[#166534]" size={14} />
            </span>
            <p className="mt-3 text-sm font-semibold text-[#0F172A]">
              Order Tracking
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              You'll receive a tracking ID via SMS/Email once your order
              is shipped.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "cancellation-policy",
    number: "2",
    icon: FaBan,
    title: "Cancellation Policy",
    body: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[#22C55E]/20 bg-[#166534]/5 p-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
            <FaCheckCircle className="text-[#22C55E]" size={14} />
          </span>
          <p className="mt-3 text-sm font-semibold text-[#0F172A]">
            Before Dispatch
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            You can cancel your order within 12 hours of placing it by
            contacting our support team.
          </p>
        </div>

        <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
            <FaExclamationTriangle className="text-red-500" size={13} />
          </span>
          <p className="mt-3 text-sm font-semibold text-[#0F172A]">
            After Dispatch
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Once handed over to the courier, orders cannot be cancelled.
            Refusing delivery may attract a shipping penalty on future
            orders.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "privacy-summary",
    number: "3",
    icon: FaUserShield,
    title: "Privacy Policy (Summary)",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          Your privacy is our priority. Amritashya Ayurveda Pvt. Ltd.
          ensures:
        </p>
        <ul className="mt-3 space-y-3">
          {[
            "We only collect necessary data (Name, Address, Phone) to deliver your products.",
            "Your payment details are processed through encrypted, secure gateways and are never stored on our servers.",
            "We do not sell or share your personal information with third-party marketing agencies.",
          ].map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22C55E]" />
              {i}
            </li>
          ))}
        </ul>
        <a
          href="/privacy"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#166534] hover:underline"
        >
          Read Full Privacy Policy →
        </a>
      </>
    ),
  },
  {
    id: "terms-service",
    number: "4",
    icon: FaFileContract,
    title: "Terms of Service",
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-500">
          By using the Amritashya Ayurveda website, you agree to the
          following:
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#166534]/10 text-[#166534]">
              <FaBoxOpen size={13} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A]">Information Accuracy</p>
              <p className="text-xs text-slate-500">
                The content on this site is for informational purposes only.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#166534]/10 text-[#166534]">
              <MdVerified size={15} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A]">Product Usage</p>
              <p className="text-xs text-slate-500">
                Always follow the dosage instructions on the packaging.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#166534]/10 text-[#166534]">
              <MdGavel size={15} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0F172A]">Jurisdiction</p>
              <p className="text-xs text-slate-500">
                Any legal disputes will be subject to the jurisdiction of
                the courts in Noida.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "medical-disclaimer",
    number: "5",
    icon: FaStethoscope,
    title: "Medical Disclaimer",
    body: (
      <div className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5">
        <p className="text-sm italic leading-relaxed text-slate-600">
          "The results of Ayurvedic treatments can vary from person to
          person. While our Piles Care Kit and Shilajit are made with
          high-quality herbs, they are not intended to diagnose, treat, or
          cure any chronic disease without proper consultation. If you have
          a serious medical history, please consult an Ayurvedic
          practitioner."
        </p>
      </div>
    ),
  },
];

function ShippingPolicy() {
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
            <FaTruck className="text-[#166534]" /> Shipping & Policies
          </span>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Shipping & Delivery Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Transparent policies to ensure a smooth and trustworthy
            experience with Amritashya Ayurveda.
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
              <MdVerified /> Pan-India Delivery
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Amritashya Ayurveda Pvt. Ltd. is committed to delivering your
            order in good condition and on time.
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

export default ShippingPolicy;