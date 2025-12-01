import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";
import { NavbarContent, NavbarKey } from "../content/typesContent";

export default function Navbar() {
const { language } = useLanguage();
const t: NavbarContent = language === "fa" ? fa.navbar : en.navbar;
  
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fadeTrigger, setFadeTrigger] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

const navItems: { key: NavbarKey; to: string }[] =
  language === "fa"
    ? [
        { key: "home", to: "/fa" },
        { key: "products", to: "/fa/products" },
        { key: "about", to: "/fa/about" },
      ]
    : [
        { key: "home", to: "/en" },
        { key: "products", to: "/en/products" },
        { key: "about", to: "/en/about" },
      ];

  // Load dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Sync dark mode to DOM and localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Animate navbar on language change (desktop only)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setFadeTrigger(true);
      const timeout = setTimeout(() => setFadeTrigger(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [language]);

  // Close mobile menu on outside click or swipe
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleSwipeRight = (e: TouchEvent) => {
      const startX = e.changedTouches[0].clientX;
      const handleEnd = (endEvent: TouchEvent) => {
        const endX = endEvent.changedTouches[0].clientX;
        if (endX - startX > 80) setIsOpen(false);
        document.removeEventListener("touchend", handleEnd);
      };
      document.addEventListener("touchend", handleEnd);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
      document.addEventListener("touchstart", handleSwipeRight);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("touchstart", handleSwipeRight);
    };
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 z-50">
      <nav
        style={{ willChange: "transform, opacity", contentVisibility: "auto" }}
        className={`font-vazirmatn max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white transition-all duration-500 ease-in-out ${
          fadeTrigger ? "animate-fadeUp" : ""
        }`}
      >
        {/* زبان و حالت تاریک دسکتاپ */}
        <div className="flex items-center gap-4">
          <div className="text-[30px] md:text-[15px] leading-none transition-none min-h-[30px] md:min-h-[15px]">
            <LanguageToggle />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:inline-block text-xl hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Toggle Dark Mode"
          >
            <span className="transition-transform duration-500 ease-in-out scale-100">
              {darkMode ? "☀️" : "🌙"}
            </span>
          </button>
        </div>

        {/* منوی وسطی دسکتاپ */}
        <div className="hidden md:flex gap-4 text-sm font-medium">
          {navItems.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-1 rounded-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              {t[key]}
            </Link>
          ))}
        </div>

        {/* لوگو سمت راست */}
        <div className="font-vazirmatn text-base z-60 md:text-2xl font-bold tracking-tight mt-2 md:mt-5 text-orange-500 animate-flameText w-40 text-center truncate">
          {t.logo}
        </div>

        {/* دکمه همبرگری موبایل */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* منوی موبایل */}
      <div
        ref={menuRef}
        style={{ willChange: "transform, opacity", contentVisibility: "auto" }}
        className={`fixed top-0 right-0 h-screen w-1/3 bg-black/60 backdrop-blur-md px-4 py-10 md:hidden text-sm font-medium transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center text-center w-full gap-5">
          {navItems.map(({ key, to }) => (
            <li key={to} className="w-full py-5 border-b border-white/30">
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-yellow-400 transition duration-300"
              >
                {t[key]}
              </Link>
            </li>
          ))}
          <li className="w-full py-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block w-full text-white hover:text-yellow-400 transition duration-300"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
