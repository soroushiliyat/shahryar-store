import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  const t = language === "fa" ? fa : en;

  return (
    <div
      onClick={toggleLang}
      className="relative w-36 h-10 flex items-center justify-center text-sm font-bold text-black dark:text-white cursor-pointer select-none transition-colors duration-500"
    >
      <div
        className={`absolute bottom-0 h-1 w-1/2 bg-blue-500 rounded transition-all duration-300 ease-in-out ${
          language === "fa" ? "left-0" : "left-1/2"
        }`}
      />
      <div className="flex w-full justify-center z-10">
        <span className="w-1/2 text-center px-1 py-1 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-[6px]">
          {t.languageToggle?.fa || "فارسی"}
        </span>
        <span className="w-1/2 text-center px-1 py-1 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-[6px]">
          {t.languageToggle?.en || "ENGLISH"}
        </span>
      </div>
    </div>
  );
}