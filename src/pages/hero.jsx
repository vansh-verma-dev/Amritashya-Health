import { ShieldCheck, ArrowRight, Leaf } from "lucide-react";

function Hero() {
  return (
    <section className="ayur-hero relative w-full overflow-hidden bg-[#FBF6EC] py-20 lg:py-28">
      {/* Fonts + animation system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Manrope:wght@400;500;600;700;800&display=swap');

        .ayur-hero { font-family: 'Manrope', sans-serif; }
        .ayur-display {
          font-family: 'Fraunces', serif;
          font-optical-sizing: auto;
          letter-spacing: -0.01em;
        }

        /* Botanical vein texture, sits behind everything */
        .ayur-veins {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          pointer-events: none;
        }

        /* Staggered entrance */
        .ayur-rise { opacity: 0; animation: ayurRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .ayur-d1 { animation-delay: 0.05s; }
        .ayur-d2 { animation-delay: 0.18s; }
        .ayur-d3 { animation-delay: 0.30s; }
        .ayur-d4 { animation-delay: 0.42s; }
        .ayur-d5 { animation-delay: 0.54s; }
        .ayur-d6 { animation-delay: 0.66s; }
        @keyframes ayurRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Rotating apothecary seal ring around the product image */
        .ayur-seal {
          animation: ayurSpin 34s linear infinite;
          transform-origin: center;
        }
        @keyframes ayurSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Gentle float for the badge + product image */
        .ayur-float { animation: ayurFloat 5s ease-in-out infinite; }
        @keyframes ayurFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Drifting leaf particles */
        .ayur-leaf {
          position: absolute;
          opacity: 0;
          animation: ayurDrift 7s ease-in infinite;
        }
        @keyframes ayurDrift {
          0% { opacity: 0; transform: translateY(0) rotate(0deg); }
          15% { opacity: 0.5; }
          85% { opacity: 0.35; }
          100% { opacity: 0; transform: translateY(-140px) rotate(70deg); }
        }

        .ayur-cta-primary {
          background: #1E3A2B;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, background 0.35s ease;
        }
        .ayur-cta-primary:hover {
          background: #16301F;
          box-shadow: 0 14px 30px -10px rgba(30, 58, 43, 0.55);
          transform: translateY(-3px);
        }
        .ayur-cta-secondary {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ayur-cta-secondary:hover {
          transform: translateY(-3px);
        }

        .ayur-image-wrap { animation: ayurBreathe 6s ease-in-out infinite; }
        @keyframes ayurBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ayur-rise, .ayur-seal, .ayur-float, .ayur-leaf, .ayur-image-wrap {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Background botanical line texture */}
      <svg className="ayur-veins" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path d="M0 400 Q 300 250 600 400 T 1200 400" stroke="#1E3A2B" strokeWidth="1.5" fill="none" />
        <path d="M0 500 Q 300 350 600 500 T 1200 500" stroke="#1E3A2B" strokeWidth="1" fill="none" />
        <path d="M-50 200 Q 250 100 550 220 T 1250 180" stroke="#1E3A2B" strokeWidth="1" fill="none" />
      </svg>

      {/* Drifting leaves */}
      <Leaf className="ayur-leaf text-[#8CA07C]" style={{ left: "8%", bottom: "10%", width: 22, height: 22, animationDelay: "0s" }} />
      <Leaf className="ayur-leaf text-[#C89A3B]" style={{ left: "42%", bottom: "4%", width: 16, height: 16, animationDelay: "2.2s" }} />
      <Leaf className="ayur-leaf text-[#8CA07C]" style={{ right: "18%", bottom: "8%", width: 18, height: 18, animationDelay: "4s" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          {/* Apothecary-style eyebrow badge */}
          <div className="ayur-rise ayur-d1 inline-flex items-center gap-2 bg-transparent border border-dashed border-[#1E3A2B]/40 text-[#1E3A2B] px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C89A3B]" strokeWidth={2.5} />
            Trusted by 50,000+ Families
          </div>

          {/* Heading */}
          <h1 className="ayur-rise ayur-d2 ayur-display mt-6 text-4xl md:text-5xl lg:text-[3.6rem] font-medium text-[#1E3A2B] leading-[1.08]">
          Your Journey to
          </h1>
          <h1 className="ayur-rise ayur-d3 ayur-display italic text-4xl md:text-5xl lg:text-[3.6rem] font-medium text-green-700 leading-[1.08]">
     Natural Healing Starts Here
          </h1>

          {/* Description */}
          <p className="ayur-rise ayur-d4 mt-6 text-[#3F4A3F]/80 text-lg leading-8 max-w-xl">
       Discover authentic Ayurvedic formulations crafted to support digestive wellness and provide natural relief.
          </p>

          {/* Buttons */}
          <div className="ayur-rise ayur-d5 mt-9 flex flex-col sm:flex-row gap-4">

            <button className="ayur-cta-primary flex items-center justify-center gap-2 text-white px-7 py-4 rounded-xl font-semibold">
              Shop Remedies
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="ayur-cta-secondary flex items-center justify-center gap-2 border-2 border-[#1E3A2B] text-[#1E3A2B] hover:bg-[#1E3A2B] hover:text-white px-7 py-4 rounded-xl font-semibold">
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Bottom Stats */}
          <div className="ayur-rise ayur-d6 mt-12 flex flex-wrap gap-x-10 gap-y-6 divide-x divide-[#1E3A2B]/15">

            <div>
              <h2 className="ayur-display text-3xl font-semibold text-[#1E3A2B]">100%</h2>
              <p className="text-[#3F4A3F]/60 text-sm mt-1 tracking-wide uppercase">Natural Herbs</p>
            </div>

            <div className="pl-10">
              <h2 className="ayur-display text-3xl font-semibold text-[#1E3A2B]">50K+</h2>
              <p className="text-[#3F4A3F]/60 text-sm mt-1 tracking-wide uppercase">Happy Customers</p>
            </div>

            <div className="pl-10">
              <h2 className="ayur-display text-3xl font-semibold text-[#1E3A2B]">24/7</h2>
              <p className="text-[#3F4A3F]/60 text-sm mt-1 tracking-wide uppercase">Expert Support</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="ayur-rise ayur-d3 relative flex justify-center items-center">

          {/* Soft background wash */}
          <div className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full bg-[#DCE6D6] blur-3xl opacity-70"></div>

          {/* Rotating apothecary seal ring — signature element */}
          <svg
            className="ayur-seal absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10"
            viewBox="0 0 400 400"
          >
            <defs>
              <path id="sealCircle" d="M 200,200 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0" />
            </defs>
            <circle cx="200" cy="200" r="170" fill="none" stroke="#1E3A2B" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 6" />
            <text fill="#1E3A2B" fillOpacity="0.55" fontSize="13" letterSpacing="4" fontFamily="Manrope, sans-serif" fontWeight="700">
              <textPath href="#sealCircle" startOffset="0%">
                PURE · AMRITASYA · AYURVEDA · PURE · AMRITASYA · AYURVEDA ·
              </textPath>
            </text>
          </svg>

          {/* Product Image */}
          <div className="ayur-image-wrap relative z-20">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/056/087/454/small/herbal-remedy-mortar-pestle-herbs-and-spices-free-png.png"
              alt="Ayurvedic Product"
              className="w-[220px] md:w-[320px] drop-shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="ayur-float absolute top-6 left-0 md:left-4 bg-white shadow-xl rounded-2xl px-5 py-3 z-30 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#C89A3B]" />
            <p className="font-semibold text-[#1E3A2B] text-sm">100% Natural</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;