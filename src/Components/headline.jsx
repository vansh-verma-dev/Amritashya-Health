import { FaCheckCircle } from "react-icons/fa";
 

const items = [
  "Free First Consultation",
  "Certified BAMS Doctors",
  "100% Authentic Herbal Medicines",
  "Panchakarma Therapy Available",
  "Personalised Treatment Plans",
  "Open Mon–Sat, 9 AM–7 PM",
];

export default function HeroMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-emerald-100 bg-emerald-50/70 py-3">
      <style>{`
        @keyframes amritasya-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .amritasya-marquee-track {
          animation: amritasya-marquee 28s linear infinite;
        }
        .amritasya-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .amritasya-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="flex w-max amritasya-marquee-track">
     
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 px-6 text-sm font-medium text-green-700 sm:text-[15px]"
          >
            <FaCheckCircle className="text-green-500" size={13} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}