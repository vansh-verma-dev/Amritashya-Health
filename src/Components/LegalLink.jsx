import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Shipping Policy", path: "/shipping-policy" },
];

function LegalDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 font-medium transition ${
          open ? "text-green-700" : "text-gray-700 hover:text-green-700"
        }`}
      >
        Legal
        <FaChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
          {legalLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </li>
  );
}

export default LegalDropdown;