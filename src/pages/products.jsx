import { useState } from "react";
import { FaStar, FaShoppingCart, FaLeaf } from "react-icons/fa";
import { productsData } from "../Data/data";
import { Link } from "react-router-dom";


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

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-black/[0.06] transition-all duration-300 hover:-translate-y-1 hover:ring-black/10 hover:shadow-[0_20px_40px_-16px_rgba(15,20,15,0.18)]"
            >
              {/* Image */}
              <div className="relative">
                {/* Category badge */}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-[#17181C] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white">
                  {p.badge?.[0]}
                </span>
                {p.discount && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-[#0F6E5C] px-2.5 py-1 text-[10px] font-semibold text-white">
                    {p.discount}
                  </span>
                )}
                <ProductImage src={p.images?.[0]} alt={p.name} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[18px] font-semibold leading-snug text-[#17181C]">
                  {p.name}
                </h3>
                {p.subHeading && (
                  <p className="mt-0.5 text-[12.5px] text-[#8A8778]">{p.subHeading}</p>
                )}

                {/* Extra trust badges */}
                {p.badge?.length > 1 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.badge.slice(1).map((b) => (
                      <span
                        key={b}
                        className="rounded-md bg-[#EEF0EA] px-2 py-0.5 text-[10.5px] font-medium text-[#4B5E3D]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex items-center gap-1.5">
                  <Stars rating={p.rating} />
                  <span className="text-[11.5px] text-[#8A8778]">
                    {p.rating} · {p.reviews} reviews
                    {p.sold ? ` · ${p.sold} sold` : ""}
                  </span>
                </div>

                {/* Price row */}
                <div className="mt-5 flex items-end justify-between border-t border-[#EDEBE4] pt-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[22px] font-semibold text-[#17181C]">
                      ₹{p.price}
                    </span>
                    {p.originalPrice && (
                      <span className="text-[21.5px] text-[#B7B3A4] line-through">
                        ₹{p.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/ProductView/${p.id}`}
                    className="flex items-center gap-2 rounded-full bg-[#17181C] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#0F6E5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6E5C]">
                    <FaShoppingCart size={13} />
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


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