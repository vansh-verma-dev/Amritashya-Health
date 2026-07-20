import {
  FaLeaf,
  FaSeedling,
  FaHandHoldingHeart,
  FaMountain,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { GiMedicinePills, GiHerbsBundle } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import Navbar from "../../Components/Navbar";
import Footer from "../Footer";

function About() {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
    <Navbar/>

      {/* ============ HERO / FOUNDATION ============ */}
      <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium text-[#8a6d1f]">
            <FaSeedling className="text-[#166534]" /> Our Foundation
          </span>

          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            About  Prajanya Healthcares
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
           Prajanya Healthcares Pvt. Ltd. is a premier wellness organization
            dedicated to reviving the ancient wisdom of Ayurveda for the
            modern world. We believe that true healing comes from nature.
          </p>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md lg:col-span-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#22C55E] shadow-md shadow-[#166534]/20">
              <FaHandHoldingHeart className="text-white" size={18} />
            </span>
            <h2 className="mt-5 font-serif text-xl font-semibold text-[#0F172A] sm:text-2xl">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
              To provide high-quality, authentic, and result-oriented
              Ayurvedic solutions that treat the root cause — not just mask
              the symptoms.
            </p>
            <ul className="mt-6 space-y-3">
              {["Authentic herbal formulations", "Root-cause healing approach", "Trusted by thousands of families"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <FaCheckCircle className="flex-shrink-0 text-[#22C55E]" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* What We Do */}
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-[#166534] to-[#0F172A] p-8 shadow-sm lg:col-span-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
              <GiHerbsBundle className="text-[#D4AF37]" size={22} />
            </span>
            <h2 className="mt-5 font-serif text-xl font-semibold text-white sm:text-2xl">
              What We Do
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
              We specialize in chronic care and lifestyle wellness. Our
              flagship products are crafted with precision and purity. Our
              mission focuses on treating the root cause of health issues
              rather than just the symptoms.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Chronic Care" },
                { label: "Lifestyle Wellness" },
                { label: "Purity First" },
                { label: "Root-Cause Focus" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-white backdrop-blur-md"
                >
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLAGSHIP PRODUCTS ============ */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#166534]/20 bg-[#166534]/5 px-4 py-1.5 text-xs font-medium text-[#166534]">
            <GiMedicinePills /> Flagship Products
          </span>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-[#0F172A] sm:text-3xl">
            Crafted with Precision & Purity
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Piles Kit */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#166534]/10 to-[#22C55E]/5">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#166534] to-[#22C55E] shadow-lg shadow-[#166534]/25 transition-transform duration-300 group-hover:scale-110">
                <GiMedicinePills className="text-white" size={28} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#D4AF37]/15 px-2.5 py-1 text-[10px] font-semibold text-[#8a6d1f]">
                <MdVerified /> 3-Step Healing Process
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-[#0F172A] sm:text-xl">
                Complete Piles Management Kit
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                A comprehensive 3-step healing process involving our
                specialized Gel, Churan, and Capsules. Designed to provide
                long-term relief without invasive procedures.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#166534] transition-all duration-200 group-hover:gap-2.5"
              >
                Explore Kit <FaArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Shilajit */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-[#166534]/5">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8a6d1f] shadow-lg shadow-[#D4AF37]/25 transition-transform duration-300 group-hover:scale-110">
                <FaMountain className="text-white" size={26} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#166534]/10 px-2.5 py-1 text-[10px] font-semibold text-[#166534]">
                <MdVerified /> Himalayan Origin
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-[#0F172A] sm:text-xl">
                Premium Himalayan Shilajit
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Sourced from the highest altitudes and purified using
                traditional methods to ensure maximum minerals and fulvic
                acid for energy, stamina, and immunity.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#166534] transition-all duration-200 group-hover:gap-2.5"
              >
                Explore Shilajit <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#166534] to-[#0F172A] px-8 py-10 text-center shadow-xl shadow-[#166534]/15 sm:flex-row sm:text-left">
          <div>
            <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
              Ready to begin your healing journey?
            </h3>
            <p className="mt-1 text-sm text-[#CBD5E1]">
              Explore our full range of authentic Ayurvedic wellness solutions.
            </p>
          </div>
          <a
            href="/"
            className="flex-shrink-0 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#166534] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Browse Products
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;