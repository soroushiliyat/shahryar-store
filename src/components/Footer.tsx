import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";

export default function Footer() {
  const { language } = useLanguage();
  const t = language === "fa" ? fa.footer : en.footer;

  const fontSizeClass =
    language === "fa" ? "text-[10px] sm:text-xs" : "text-[9px] sm:text-[11px]";

  const [visible, setVisible] = useState(false);
  const [activeInfo, setActiveInfo] = useState<
    null | "office" | "mobile" | "email" | "address" | "credit"
  >(null);

  const handleToggle = (key: typeof activeInfo) => {
    setActiveInfo((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveInfo(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setVisible(false);
      const timeout = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [language]);

  const contactItems = [
    { key: "office", label: t.office, value: t.office_tel },
    { key: "mobile", label: t.mobile, value: t.mobile_tel },
    { key: "email", label: t.email, value: t.email_adress },
    { key: "address", label: t.address_title, value: t.address_full },
  ];

  return (
    <footer className="w-full fixed bottom-0 left-0 bg-transparent px-4 h-20 z-30 text-black dark:text-white transition-colors duration-500">
      <div
        style={{ willChange: "transform, opacity" }}
        className={`max-w-6xl mx-auto relative flex flex-col items-center justify-center ${fontSizeClass} py-2 transition-all duration-500 ease-in-out ${
          visible
            ? "md:opacity-100 md:translate-y-0 md:animate-fadeUp"
            : "md:opacity-0 md:translate-y-2"
        }`}
      >
        {/* اطلاعات تماس با افکت نرم */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 text-center">
          {contactItems.map(({ key, label, value }) => (
            <div
              key={key}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle(key);
              }}
            >
              <span className="font-semibold">{label}</span>
              <div
                className={`absolute bottom-full mb-2 px-3 py-2 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white text-xs shadow-md transition-all duration-300 ease-in-out ${
                  activeInfo === key
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* کپی‌رایت و flameText با افکت نرم */}
        <div className="mt-2 w-full flex flex-col sm:flex-row justify-between items-center px-4 gap-2 text-gray-500 dark:text-gray-300 font-bold">
          <div className="text-left select-text">{t.copyright}</div>

          <div className="text-right relative flex items-center gap-1">
            <span
              style={{ willChange: "opacity" }}
              className="animate-flameText font-extrabold text-[10px] sm:text-base select-text cursor-pointer relative"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle("credit");
              }}
            >
              {t.credit}
              <div
                className={`absolute bottom-full mb-2 right-0 w-max max-w-sm px-4 py-3 rounded-md backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-[11px] font-normal transition-all duration-300 ease-in-out shadow-md whitespace-normal text-left leading-relaxed select-text ${
                  activeInfo === "credit"
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div>
                  GitHub:{" "}
                  <a
                    href="https://github.com/soroushiliyat"
                    target="_blank"
                    className="underline"
                  >
                    github.com/soroushiliyat
                  </a>
                </div>
                <div>Gmail: soroushiliyat23@gmail.com</div>
                <div>Tel: +98 936 995 5128</div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}