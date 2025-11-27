import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";
import tractorImage from "../assets/tractor.jpg.png";

export default function Home() {
  const { language } = useLanguage();
  const t = language === "fa" ? fa.home : en.home;

  const [fadeTrigger, setFadeTrigger] = useState(false);
  const textAlign = language === "en" ? "md:text-left" : "md:text-right";

  useEffect(() => {
    setFadeTrigger(true);
    const timeout = setTimeout(() => setFadeTrigger(false), 600); // مدت انیمیشن
    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <main className="w-full min-h-[70vh] md:min-h-[8vh] text-black font-vazirmatn px-4 pt-8 pb-32 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-x-16 p-4 rounded-xl">
        {/* متن با انیمیشن فقط هنگام تغییر زبان */}
        <div
          style={{ willChange: "transform, opacity" }}
          className={`md:ml-[100px] w-full md:w-[30%] h-[220px] overflow-y-auto md:overflow-y-scroll px-4 text-center translate-x-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent transition-all duration-500 ease-in-out ${textAlign} ${
            fadeTrigger ? "animate-fadeUp" : ""
          }`}
        >
          <h1 className="text-xl font-bold mb-4 dark:text-white transition-colors duration-500">
            {t.title}
          </h1>
          
          <h2 className="text-xl font-bold mb-4 dark:text-white transition-colors duration-500">
            {t.manager}
          </h2>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
            {t.description}
          </p>
        </div>

        {/* تصویر ثابت بدون انیمیشن */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end self-start mt-6 md:mt-0 md:mr-auto">
          <img
            src={tractorImage}
            alt={t.image_alt}
            width={320}
            height={320}
            className="w-48 h-48 md:w-60 md:h-60 rounded-lg mt-3"
          />
        </div>
      </div>
    </main>
  );
}
