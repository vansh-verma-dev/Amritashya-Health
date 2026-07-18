import { useState } from "react";
import { FaPlus } from "react-icons/fa";

// Amritasya Ayurveda — FAQ Section
// Same token system as Footer: emerald-950/900 ground, amber-400 accent, serif display

const faqs = [
  {
    q: "What is Ayurveda and how is it different from modern medicine?",
    a: "Ayurveda is a 5,000-year-old healing system from India that treats the root cause of an illness, not just the symptoms. Instead of standard doses, treatments are personalised to your body constitution (Prakriti), lifestyle, and current imbalances, using herbs, diet, and therapies alongside modern diagnostics where needed.",
  },
  {
    q: "Do I need a prior diagnosis before booking a consultation?",
    a: "No, you don't. Our doctors begin with a detailed Prakriti assessment and pulse diagnosis (Nadi Pariksha) during your first visit. If you already have reports or a diagnosis, you're welcome to bring them along so we can tailor your plan more precisely.",
  },
  {
    q: "Is Panchakarma safe, and how many sessions will I need?",
    a: "Yes, Panchakarma is safe when done under supervision and is customised to your age, condition, and stamina. Most first-time programmes run 7 to 21 days; our doctors recommend the exact duration only after your initial consultation.",
  },
  {
    q: "Can Ayurvedic treatment be taken alongside my current allopathic medication?",
    a: "In most cases, yes. Our physicians review your existing prescriptions and coordinate the Ayurvedic plan around them, adjusting timing and dosage so the two systems work together safely rather than against each other.",
  },
  {
    q: "How do I book an appointment or reach the clinic?",
    a: "You can call or WhatsApp us directly, use the contact form on this page, or simply walk in at our Sector 63, Noida clinic between 9:00 AM and 7:00 PM, Monday to Saturday.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-emerald-800/70" id="faq">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-serif text-base sm:text-lg transition-colors duration-300 ${
            isOpen ? "text-amber-400" : "text-stone-100"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-800 text-amber-400 transition-transform duration-300 ${
            isOpen ? "rotate-45 border-amber-500" : ""
          }`}
        >
          <FaPlus size={12} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10 text-sm leading-relaxed text-stone-400 sm:text-[15px]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-emerald-950 text-stone-300 overflow-hidden">
      {/* Faint leaf watermark, echoes footer signature */}
      <svg
        className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 text-emerald-900/40 sm:h-96 sm:w-96"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 10C60 40 20 80 20 120c0 40 35 70 80 70s80-30 80-70c0-40-40-80-80-110Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M100 25V190" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 60C80 70 65 85 60 100" stroke="currentColor" strokeWidth="1" />
        <path d="M100 60C120 70 135 85 140 100" stroke="currentColor" strokeWidth="1" />
        <path d="M100 100C78 112 62 128 55 145" stroke="currentColor" strokeWidth="1" />
        <path d="M100 100C122 112 138 128 145 145" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-px w-12 bg-amber-500/50" />
            <span className="mx-3 text-xs uppercase tracking-[0.3em] text-amber-400">
              FAQs
            </span>
            <span className="h-px w-12 bg-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Questions, <span className="text-amber-400">Answered</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone-400 sm:text-[15px]">
            Everything you need to know before starting your Ayurvedic
            wellness journey with us.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-emerald-800/70">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="mt-10 text-center text-sm text-stone-400">
          Still have questions?{" "}
          <a href="#contact" className="text-amber-400 underline underline-offset-4 hover:text-amber-300">
            Talk to our doctor
          </a>
        </p>
      </div>
    </section>
  );
}