import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";
import tractorImage from "../assets/tractor.jpg.png";

export default function Home() {
  const { language } = useLanguage();
  const t = language === "fa" ? fa.home : en.home;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <main className="w-full min-h-[70vh] md:min-h-[8vh] text-black font-vazirmatn px-4 pt-8 pb-32 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 p-4 rounded-xl">
        
        {/* بخش متن با انیمیشن هنگام تغییر زبان */}
        <div
          className={`w-full md:w-[40%] h-[220px] overflow-y-scroll pr-4 text-right translate-x-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent transition-all duration-500 ease-in-out ${
            visible ? "opacity-100 translate-y-0 animate-fadeUp" : "opacity-0 translate-y-2"
          }`}
        >
          <h1 className="text-xl font-bold mb-4 dark:text-white transition-colors duration-500">
            {t.title}
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
            {t.description}
          </p>
        </div>

        {/* بخش عکس بدون انیمیشن یا رندر مجدد */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end self-start mt-6 md:mt-0">
          <img
            src={tractorImage}
            alt={t.image_alt}
            className="w-60 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}