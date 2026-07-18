import React, { useEffect, useRef, useState } from "react";
import {
    Leaf,
    Sprout,
    Mountain,
    FlaskConical,
    CheckCircle2,
    ArrowRight,
    Quote,
    ShieldCheck,
    Gem,
    Eye,
} from "lucide-react";
import Navbar from "../../Components/Navbar";



function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.unobserve(node);
                }
            },
            { threshold: 0.18 }
        );
        io.observe(node);
        return () => io.disconnect();
    }, []);
    return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${className}`}
        >
            {children}
        </div>
    );
}

function LeafDivider({ color = "#7C8F6E" }) {
    return (
        <div className="flex items-center justify-center py-2" aria-hidden="true">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
                <line x1="0" y1="10" x2="46" y2="10" stroke={color} strokeOpacity="0.35" strokeWidth="1" />
                <path
                    d="M60 4C64 8 64 12 60 16C56 12 56 8 60 4Z"
                    stroke={color}
                    strokeWidth="1.2"
                    fill="none"
                />
                <line x1="74" y1="10" x2="120" y2="10" stroke={color} strokeOpacity="0.35" strokeWidth="1" />
            </svg>
        </div>
    );
}

const STATS = [
    { value: "15+", label: "Years of Ayurvedic research" },
    { value: "50,000+", label: "Lives touched across India" },
    { value: "100%", label: "Natural, plant-based formulations" },
    { value: "0", label: "Synthetic fillers, ever" },
];

const VALUES = [
    {
        icon: Gem,
        title: "Purity",
        desc: "Every herb is tested and sourced with nothing added that doesn't need to be there.",
    },
    {
        icon: FlaskConical,
        title: "Potency",
        desc: "Traditional extraction methods preserved to keep each formulation at full strength.",
    },
    {
        icon: Sprout,
        title: "Tradition",
        desc: "Formulas rooted in classical Ayurvedic texts, respected rather than reinvented.",
    },
    {
        icon: Eye,
        title: "Transparency",
        desc: "Every ingredient, every process, open for you to see — nothing hidden on the label.",
    },
];

const PILES_STEPS = [
    {
        step: "01",
        name: "The Gel",
        detail: "A fast-acting external application that soothes irritation and eases discomfort from the first use.",
    },
    {
        step: "02",
        name: "The Churan",
        detail: "A herbal powder that supports healthy digestion and regular bowel movement, addressing the root cause.",
    },
    {
        step: "03",
        name: "The Capsules",
        detail: "A daily internal formulation that strengthens vein health and prevents recurrence over time.",
    },
];

const SHILAJIT_BENEFITS = [
    "Rich in bioavailable fulvic acid and 85+ trace minerals",
    "Supports sustained energy and physical stamina",
    "Strengthens the body's natural immune response",
    "Purified through traditional Ayurvedic shodhana methods",
];

export default function AboutAmritashya() {
    return (
        <> 
    <Navbar/>

    <div style={{ backgroundColor: "bg-emerald-950" }} className="w-full font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .am-display { font-family: 'Cormorant Garamond', serif; }
        .am-body { font-family: 'Work Sans', sans-serif; }
        @keyframes am-sway {
          0%, 100% { transform: rotate(-3deg) translateY(0px); }
          50% { transform: rotate(3deg) translateY(-6px); }
        }
        .am-sway { animation: am-sway 7s ease-in-out infinite; transform-origin: bottom center; }
        @media (prefers-reduced-motion: reduce) {
          .am-sway { animation: none; }
        }
      `}</style>

      <div className="am-body">
        {/* ================= HERO ================= */}
        <section className="relative px-6 sm:px-10 pt-28 pb-24 max-w-5xl mx-auto text-center">
          <svg
            className="am-sway absolute -top-4 right-4 sm:right-16 opacity-70"
            width="70"
            height="90"
            viewBox="0 0 70 90"
            fill="none"
          >
            <path
              d="M35 5C55 20 62 45 40 70C48 45 30 25 35 5Z"
              stroke="#7C8F6E"
              strokeWidth="1.3"
            />
            <path d="M35 12V78" stroke="#7C8F6E" strokeWidth="1" strokeOpacity="0.6" />
          </svg>

          <Reveal>
            <div
              style={{ color: "#D9A441" }}
              className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold mb-7"
            >
              <span style={{ backgroundColor: "#D9A441" }} className="w-6 h-[1.5px]" />
              Our Foundation
              <span style={{ backgroundColor: "#D9A441" }} className="w-6 h-[1.5px]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="am-display font-medium leading-[1.08] mb-6"
              style={{ color: "#F6EFE3", fontSize: "clamp(36px,6vw,64px)" }}
            >
              About <span style={{ color: "#D9A441", fontStyle: "italic" }}>Amritashya</span> Ayurveda
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p
              style={{ color: "#C9BBA6" }}
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Amritashya Ayurveda Pvt. Ltd. is a premier wellness organization dedicated to
              reviving the ancient wisdom of Ayurveda for the modern world. We believe true
              healing doesn't come from a lab-made shortcut — it comes from nature, applied
              with precision, patience, and respect for the body's own intelligence.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#products"
                style={{ backgroundColor: "#D9A441", color: "#1B140F" }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(217,164,65,0.55)]"
              >
                Explore Our Products <ArrowRight size={15} />
              </a>
              <a
                href="#story"
                style={{ color: "#F6EFE3", borderColor: "rgba(246,239,227,0.25)" }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:border-[rgba(246,239,227,0.6)]"
              >
                Read Our Story
              </a>
            </div>
          </Reveal>
        </section>

        <LeafDivider />

        {/* ================= STATS STRIP ================= */}
        <Reveal>
          <section className="px-6 sm:px-10 py-14 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center sm:justify-between gap-y-8 gap-x-10 text-center">
              {STATS.map((s, i) => (
                <div key={s.label} className={i !== 0 ? "sm:border-l border-white/10 sm:pl-10" : ""}>
                  <div
                    className="am-display font-medium"
                    style={{ color: "#F6EFE3", fontSize: "34px" }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: "#8A7A64" }} className="text-xs mt-1 max-w-[140px] mx-auto">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ================= FOUNDATION / STORY ================= */}
        <section id="story" style={{ backgroundColor: "#241B14" }} className="px-6 sm:px-10 py-24">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
            <Reveal>
              <div
                style={{ color: "#D9A441" }}
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6"
              >
                <Leaf size={14} /> Our Story
              </div>
              <h2
                className="am-display font-medium leading-tight mb-6"
                style={{ color: "#F6EFE3", fontSize: "clamp(26px,3.2vw,38px)" }}
              >
                Where classical texts meet modern rigor
              </h2>
              <p style={{ color: "#C9BBA6" }} className="leading-relaxed mb-5">
                Long before laboratories and prescriptions, healers across India understood the
                body as a system in balance — one that could be restored, not just managed.
                Amritashya was founded on a simple conviction: that this wisdom, tested over
                thousands of years, still holds the answers to many of today's chronic health
                struggles.
              </p>
              <p style={{ color: "#C9BBA6" }} className="leading-relaxed mb-5">
                We work directly with Ayurvedic practitioners and herbal cultivators to translate
                classical formulations into products that meet modern standards of purity and
                consistency — without diluting what made them effective in the first place.
              </p>
              <p style={{ color: "#C9BBA6" }} className="leading-relaxed">
                Every batch we release is formulated in AYUSH-compliant facilities, tested for
                purity, and made with a single question in mind: would this genuinely help
                someone heal, not just feel better for a day.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div
                style={{ borderColor: "rgba(246,239,227,0.12)" }}
                className="border-l pl-8 py-2"
              >
                <Quote size={26} style={{ color: "#7C8F6E" }} className="mb-4" />
                <p
                  className="am-display italic leading-snug mb-4"
                  style={{ color: "#F6EFE3", fontSize: "22px" }}
                >
                  "We don't treat symptoms. We treat the person, and the root cause behind
                  what they're feeling."
                </p>
                <p style={{ color: "#8A7A64" }} className="text-sm">
                  — Founding philosophy, Amritashya Ayurveda
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section style={{ backgroundColor: "#F6EFE3" }} className="px-6 sm:px-10 py-24">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div
              style={{ color: "#B75C3D" }}
              className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6"
            >
              <span style={{ backgroundColor: "#B75C3D" }} className="w-6 h-[1.5px]" />
              Our Mission
              <span style={{ backgroundColor: "#B75C3D" }} className="w-6 h-[1.5px]" />
            </div>
            <p
              className="am-display font-medium leading-snug"
              style={{ color: "#2A1F16", fontSize: "clamp(24px,3.4vw,36px)" }}
            >
              To provide high-quality, authentic, and result-oriented Ayurvedic solutions
              that treat the root cause — not just the symptom in front of you.
            </p>
          </Reveal>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="px-6 sm:px-10 py-24 max-w-5xl mx-auto">
          <Reveal className="max-w-xl mb-14">
            <div
              style={{ color: "#D9A441" }}
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6"
            >
              <Sprout size={14} /> What We Do
            </div>
            <h2
              className="am-display font-medium leading-tight mb-5"
              style={{ color: "#F6EFE3", fontSize: "clamp(26px,3.2vw,38px)" }}
            >
              Chronic care, built for lasting change
            </h2>
            <p style={{ color: "#C9BBA6" }} className="leading-relaxed">
              We specialize in chronic care and lifestyle wellness. Our flagship products are
              crafted with precision and purity, with a singular focus: addressing the root
              cause of a health issue rather than masking it for a while.
            </p>
          </Reveal>

          <div>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div
                  style={{ borderColor: "rgba(246,239,227,0.1)" }}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[60px_200px_1fr] items-center gap-5 sm:gap-8 py-7 border-b"
                >
                  <span style={{ color: "#7C8F6E" }}>
                    <v.icon size={24} strokeWidth={1.6} />
                  </span>
                  <h3
                    className="am-display font-medium"
                    style={{ color: "#F6EFE3", fontSize: "21px" }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "#8A7A64" }} className="text-sm leading-relaxed sm:max-w-md">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <LeafDivider color="#D9A441" />

        {/* ================= PRODUCTS ================= */}
        <section id="products" style={{ backgroundColor: "#241B14" }} className="py-24">
          <Reveal className="max-w-5xl mx-auto px-6 sm:px-10 mb-16 text-center">
            <div
              style={{ color: "#D9A441" }}
              className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-semibold mb-6"
            >
              Our Flagship Formulations
            </div>
            <h2
              className="am-display font-medium leading-tight"
              style={{ color: "#F6EFE3", fontSize: "clamp(26px,3.4vw,40px)" }}
            >
              Two formulas, backed by decades of tradition
            </h2>
          </Reveal>

          {/* Product 1 — Piles Kit */}
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid sm:grid-cols-2 gap-14 items-center mb-24">
            <Reveal>
              <div
                className="rounded-full mx-auto sm:mx-0 flex items-center justify-center"
                style={{
                  width: "260px",
                  height: "260px",
                  background: "radial-gradient(circle at 35% 30%, #3a2c1c, #241B14 70%)",
                  border: "1px solid rgba(217,164,65,0.25)",
                }}
              >
                <FlaskConical size={64} style={{ color: "#D9A441" }} strokeWidth={1.2} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span style={{ color: "#B75C3D" }} className="text-xs tracking-widest uppercase font-semibold">
                For Chronic Digestive Care
              </span>
              <h3
                className="am-display font-medium mt-3 mb-4 leading-tight"
                style={{ color: "#F6EFE3", fontSize: "30px" }}
              >
                Complete Piles Management Kit
              </h3>
              <p style={{ color: "#C9BBA6" }} className="leading-relaxed mb-7">
                A comprehensive 3-step healing process involving our specialized Gel, Churan,
                and Capsules — designed to provide long-term relief without invasive procedures.
              </p>
              <div className="space-y-5">
                {PILES_STEPS.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span
                      className="am-display font-medium flex-shrink-0"
                      style={{ color: "rgba(246,239,227,0.3)", fontSize: "22px" }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <div style={{ color: "#F6EFE3" }} className="font-semibold text-sm mb-1">
                        {s.name}
                      </div>
                      <div style={{ color: "#8A7A64" }} className="text-sm leading-relaxed">
                        {s.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Product 2 — Shilajit */}
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid sm:grid-cols-2 gap-14 items-center">
            <Reveal className="sm:order-2">
              <div
                className="rounded-full mx-auto sm:mx-0 flex items-center justify-center"
                style={{
                  width: "260px",
                  height: "260px",
                  background: "radial-gradient(circle at 35% 30%, #3a2c1c, #241B14 70%)",
                  border: "1px solid rgba(124,143,110,0.3)",
                }}
              >
                <Mountain size={64} style={{ color: "#7C8F6E" }} strokeWidth={1.2} />
              </div>
            </Reveal>
            <Reveal delay={120} className="sm:order-1">
              <span style={{ color: "#7C8F6E" }} className="text-xs tracking-widest uppercase font-semibold">
                For Energy &amp; Immunity
              </span>
              <h3
                className="am-display font-medium mt-3 mb-4 leading-tight"
                style={{ color: "#F6EFE3", fontSize: "30px" }}
              >
                Premium Himalayan Shilajit
              </h3>
              <p style={{ color: "#C9BBA6" }} className="leading-relaxed mb-7">
                Sourced from the highest altitudes of the Himalayas and purified using
                traditional methods, to ensure maximum minerals and fulvic acid for sustained
                energy, stamina, and immunity.
              </p>
              <ul className="space-y-3">
                {SHILAJIT_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={17} style={{ color: "#7C8F6E" }} className="mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#C9BBA6" }} className="text-sm leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ================= TRUST / CTA ================= */}
        <section className="px-6 sm:px-10 py-28 max-w-3xl mx-auto text-center">
          <Reveal>
            <ShieldCheck size={30} style={{ color: "#D9A441" }} className="mx-auto mb-6" />
            <h2
              className="am-display font-medium leading-tight mb-5"
              style={{ color: "#F6EFE3", fontSize: "clamp(26px,3.6vw,42px)" }}
            >
              Begin your healing journey with Amritashya
            </h2>
            <p style={{ color: "#C9BBA6" }} className="leading-relaxed mb-9 max-w-xl mx-auto">
              Real Ayurveda, made for real life — no shortcuts, no synthetic fillers, just
              formulations that respect both the tradition they come from and the body they're
              meant to heal.
            </p>
            <a
              href="#products"
              style={{ backgroundColor: "#D9A441", color: "#1B140F" }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(217,164,65,0.55)]"
            >
              Discover Our Products <ArrowRight size={15} />
            </a>
          </Reveal>
        </section>

        <div style={{ borderTop: "1px solid rgba(246,239,227,0.08)" }} className="py-8 text-center">
          <p style={{ color: "#5C4E3E" }} className="text-xs">
            © 2026 Amritashya Ayurveda Pvt. Ltd. — Rooted in tradition, made for today.
          </p>
        </div>
      </div>
    </div>

</>
    );

}