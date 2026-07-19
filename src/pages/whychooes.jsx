import React, { useEffect, useRef, useState } from "react";
import { Leaf, Users, ShieldCheck, Clock3, TrendingUp, HeartPulse, ArrowUpRight } from "lucide-react";

const REASONS = [
  {
    icon: HeartPulse,
    title: "Personalized health plans",
    desc: "Built around your body and goals — never a one-size-fits-all formula.",
  },
  {
    icon: Users,
    title: "Experienced expert team",
    desc: "Doctors, nutritionists, and yoga trainers with 15+ years by your side.",
  },
  {
    icon: Clock3,
    title: "Support around the clock",
    desc: "Whenever you need us, we're one message away — no waiting rooms.",
  },
  {
    icon: TrendingUp,
    title: "Results you can measure",
    desc: "12,000+ members have seen real, trackable change in their health.",
  },
  {
    icon: Leaf,
    title: "A whole-body approach",
    desc: "Not just symptoms — body, mind, and lifestyle, treated as one system.",
  },
  {
    icon: ShieldCheck,
    title: "Private and secure",
    desc: "Your data and your health, protected with complete confidentiality.",
  },
];

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
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function ReasonRow({ icon: Icon, title, desc, index }) {
  const [ref, visible] = useReveal();
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transitionDelay: `${index * 80}ms`,
        borderBottom: "1px solid rgba(245,241,230,0.1)",
      }}
      className={`group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_auto_1fr_auto] items-center gap-4 sm:gap-8 py-7 sm:py-9 transition-all duration-700 ease-out cursor-default ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span
        className="hidden sm:block prana-font-display font-medium transition-all duration-500"
        style={{
          fontSize: "34px",
          color: hover ? "#FF8360" : "rgba(245,241,230,0.28)",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="transition-all duration-500"
        style={{
          color: hover ? "#FF8360" : "#8FB39B",
          transform: hover ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <Icon size={26} strokeWidth={1.6} />
      </span>

      <div className="min-w-0">
        <h3
          className="prana-font-display font-medium mb-1.5 transition-colors duration-500"
          style={{ color: "#F5F1E6", fontSize: "20px" }}
        >
          {title}
        </h3>
        <p style={{ color: "#8FB39B" }} className="text-sm sm:text-[15px] leading-relaxed max-w-md">
          {desc}
        </p>
      </div>

      <span
        className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500"
        style={{
          border: "1px solid rgba(245,241,230,0.18)",
          color: "#F5F1E6",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateX(0) rotate(0deg)" : "translateX(-8px) rotate(-45deg)",
        }}
      >
        <ArrowUpRight size={16} />
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  const [headRef, headVisible] = useReveal();

  return (
    <section style={{ backgroundColor: "#16261C" }} className="w-full py-20 px-6 sm:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');
        .prana-font-body { font-family: 'Manrope', sans-serif; }
        .prana-font-display { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="prana-font-body max-w-4xl mx-auto">
        <div
          ref={headRef}
          className={`mb-4 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div
            style={{ color: "#E8B86D" }}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold mb-5"
          >
            <span style={{ backgroundColor: "#E8B86D" }} className="w-5 h-[1.5px]" />
            Why choose  Prajanya
          </div>
          <h2
            className="prana-font-display font-medium leading-tight mb-3"
            style={{ color: "#F5F1E6", fontSize: "clamp(28px,4vw,44px)" }}
          >
            A health journey built on trust
          </h2>
          <p style={{ color: "#8FB39B" }} className="text-base max-w-md">
            Thousands choose Prana for these reasons — no clinics, no clutter, just what actually helps.
          </p>
        </div>

        <div>
          {REASONS.map((r, i) => (
            <ReasonRow key={r.title} index={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}