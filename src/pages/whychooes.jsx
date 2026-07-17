import {
  FaUserMd,
  FaLeaf,
  FaClipboardList,
  FaSpa,
  FaClinicMedical,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import { HiOutlineUserGroup, HiOutlineBadgeCheck } from "react-icons/hi";
 

const features = [
  {
    icon: FaUserMd,
    title: "Experienced Doctors",
    desc: "BAMS-qualified physicians with 15+ years of clinical Ayurvedic practice.",
  },
  {
    icon: FaLeaf,
    title: "100% Authentic Herbs",
    desc: "Medicines sourced and prepared in-house, free from synthetic fillers.",
  },
  {
    icon: FaClipboardList,
    title: "Personalised Treatment",
    desc: "Every plan is built around your Prakriti, not a one-size-fits-all protocol.",
  },
  {
    icon: FaSpa,
    title: "Traditional Panchakarma",
    desc: "Time-tested detox therapies performed by trained, certified therapists.",
  },
  {
    icon: FaClinicMedical,
    title: "Hygienic, Modern Clinic",
    desc: "A clean, comfortable space that blends traditional care with modern standards.",
  },
  {
    icon: FaHeadset,
    title: "Ongoing Doctor Support",
    desc: "Follow-up calls and diet guidance included through your recovery.",
  },
];

const stats = [
  { icon: HiOutlineUserGroup, value: "500+", label: "Happy Patients" },
  { icon: HiOutlineBadgeCheck, value: "15+", label: "Years Experience" },
  { icon: FaStar, value: "4.9", label: "Average Rating" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-teal-600 ring-1 ring-teal-100">
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose <span className="text-teal-600">Amritasya</span>?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
            We combine classical Ayurvedic wisdom with disciplined, modern
            clinical care — so every treatment is authentic, safe, and
            genuinely suited to you.
          </p>
        </div>

        {/* Stat row */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3 sm:mt-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-green-300 text-white rounded-2xl border border-green-100 px-3 py-5 text-center"
            >
              <Icon className=" text-white" size={20} />
              <p className="mt-2 text-xl font-bold ">{value}</p>
              <p className="mt-0.5 text-[11px] leading-tight  text-black sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="mt-12  grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}