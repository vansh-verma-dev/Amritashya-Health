import { useState } from "react";
import { FaStar, FaShoppingCart, FaLeaf } from "react-icons/fa";
import { productsData } from "../Data/data";
import { Link } from "react-router-dom";

// Amritasya Ayurveda — Products Section
// Palette: deep ink-green ground, turmeric + terracotta accents, warm
// parchment cards — meant to read like an apothecary label rather than
// a generic "wellness brand" template. Data-driven from ./productsData.js.

function Stars({ rating }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={12}
          className={i < rounded ? "text-[#C99A3D]" : "text-[#E3D9C2]"}
        />
      ))}
    </div>
  );
}

function ProductImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#F8F2E4] to-[#EFE4CC]">
        <FaLeaf className="text-[#16261C]/15" size={64} />
      </div>
    );
  }

  return (
    <div className="h-48 overflow-hidden bg-gradient-to-br from-[#F8F2E4] to-[#EFE4CC]">
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-[#16261C] py-20 text-stone-300">
      {/* Botanical line art */}
      <svg
        className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 text-[#C99A3D]/10 sm:h-96 sm:w-96"
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

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-px w-12 bg-[#C99A3D]/50" />
            <span className="mx-3 text-xs uppercase tracking-[0.3em] text-[#C99A3D]">
              Our Products
            </span>
            <span className="h-px w-12 bg-[#C99A3D]/50" />
          </div>
          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Authentic Ayurvedic <span className="text-[#C99A3D]">Medicines</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone-400 sm:text-[15px]">
            Prepared in-house, doctor-recommended, and delivered straight to your door.
          </p>
        </div>

        {/* Product cards */}
      <Link to={"/ProductView"}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#F8F2E4] shadow-lg shadow-black/30 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 focus-within:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative">
                {/* Wax-seal category badge */}
                <span className="absolute left-4 top-4 z-10 flex h-12 w-12 -rotate-6 items-center justify-center rounded-full bg-[#16261C] text-center text-[9px] font-semibold uppercase leading-tight text-[#C99A3D] ring-2 ring-[#C99A3D]/50">
                  {p.badge?.[0]}
                </span>
                {p.discount && (
                  <span
                    className="absolute right-0 top-4 z-10 bg-[#B5502E] py-1 pl-3 pr-4 text-[11px] font-bold text-[#FBEAE2]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12% 50%)" }}
                  >
                    {p.discount}
                  </span>
                )}
                <ProductImage src={p.images?.[0]} alt={p.name} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg leading-snug text-[#2C2115]">
                  {p.name}
                </h3>
                {p.subHeading && (
                  <p className="mt-1 text-xs text-[#8A7F68]">{p.subHeading}</p>
                )}

                {/* Extra trust badges */}
                {p.badge?.length > 1 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.badge.slice(1).map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-[#EAF0E2] px-2.5 py-1 text-[10px] font-medium text-[#4B5E3D]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2">
                  <Stars rating={p.rating} />
                  <span className="text-xs text-[#8A7F68]">
                    {p.rating} · {p.reviews} reviews
                    {p.sold ? ` · ${p.sold} sold` : ""}
                  </span>
                </div>

                {/* Perforated ticket-stub price row */}
                <div className="mt-5 flex items-end justify-between border-t border-dashed border-[#D8CBA8] pt-4">
                  <div className="relative pl-4">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[-17px] h-[calc(100%+17px)] border-l-2 border-dashed border-[#C99A3D]/40"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -left-[7px] -top-[21px] h-3 w-3 rounded-full bg-[#16261C] ring-4 ring-[#F8F2E4]"
                    />
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl text-[#2C2115]">
                        ₹{p.price}
                      </span>
                      {p.originalPrice && (
                        <span className="text-sm text-[#B7AA8C] line-through">
                          ₹{p.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-2 rounded-full bg-[#16261C] px-4 py-2.5 text-xs font-medium text-[#C99A3D] transition-colors duration-300 hover:bg-[#C99A3D] hover:text-[#16261C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]">
                    <FaShoppingCart size={13} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>

        {/* View all */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-[#C99A3D]/50 px-8 py-3 text-sm font-medium text-[#C99A3D] transition-colors duration-300 hover:bg-[#C99A3D] hover:text-[#16261C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}