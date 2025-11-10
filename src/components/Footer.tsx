import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";
import HoverInfo from "./HoverInfo";

export default function Footer() {
  const { language } = useLanguage();
  const t = language === "fa" ? fa.footer : en.footer;

  const fontSizeClass =
    language === "fa"
      ? "text-[10px] sm:text-xs"
      : "text-[9px] sm:text-[11px]";

  const [visible, setVisible] = useState(false);
  const [showCreditInfo, setShowCreditInfo] = useState(false);
  const creditTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [language]);

  const handleCreditEnter = () => {
    if (creditTimeoutRef.current) clearTimeout(creditTimeoutRef.current);
    setShowCreditInfo(true);
  };

  const handleCreditLeave = () => {
    if (creditTimeoutRef.current) clearTimeout(creditTimeoutRef.current);
    creditTimeoutRef.current = setTimeout(() => setShowCreditInfo(false), 5000);
  };

  return (
    <footer className="w-full fixed bottom-0 left-0 bg-transparent px-4 h-20 z-30 text-black dark:text-white transition-colors duration-500">
      <div
        className={`max-w-6xl mx-auto relative flex flex-col items-center justify-center ${fontSizeClass} py-2 transition-all duration-500 ease-in-out ${
          visible ? "opacity-100 translate-y-0 animate-fadeUp" : "opacity-0 translate-y-2"
        }`}
      >
        {/* اطلاعات تماس وسط‌چین افقی */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 text-center">
          <HoverInfo label={t.office} value={t.office_tel} />
          <HoverInfo label={t.mobile} value={t.mobile_tel} />
          <HoverInfo label={t.email} value={t.email_adress} />
          <HoverInfo label={t.address_title} value={t.address_full} />
        </div>

        {/* کپی‌رایت و flameText جداگانه */}
        <div className="mt-2 w-full flex flex-col sm:flex-row justify-between items-center px-4 gap-2 text-gray-500 dark:text-gray-300 font-bold">
          {/* متن سمت چپ */}
          <div className="text-left select-text">{t.copyright}</div>

          {/* متن سمت راست فقط flameText با hover */}
          <div className="text-right relative flex items-center gap-1">
            <span
              className="animate-flameText font-extrabold text-[10px] sm:text-base select-text cursor-pointer relative"
              onMouseEnter={handleCreditEnter}
              onMouseLeave={handleCreditLeave}
            >
              {t.credit}

              {showCreditInfo && (
                <div className="absolute bottom-full mb-2 right-0 w-max max-w-sm px-4 py-3 rounded-md backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-[11px] font-normal transition-opacity duration-300 z-50 shadow-md whitespace-normal text-left leading-relaxed select-text">
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
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}