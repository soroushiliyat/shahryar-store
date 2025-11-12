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
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [language]);

  const textAlign = language === "en" ? "md:text-left" : "md:text-right";

  return (
    <main className="w-full min-h-[70vh] md:min-h-[8vh] text-black font-vazirmatn px-4 pt-8 pb-32 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-x-16 p-4 rounded-xl">
        {/* متن با انیمیشن */}
        <div
          style={{ willChange: "transform, opacity" }}
          className={`md:ml-[100px] w-full md:w-[30%] h-[220px] overflow-y-auto md:overflow-y-scroll px-4 text-center translate-x-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent transition-all duration-500 ease-in-out ${textAlign} ${
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

        {/* تصویر ثابت */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end self-start mt-6 md:mt-0 md:mr-auto">
          <img
            src={tractorImage}
            alt={t.image_alt}
            width={320}
            height={320}
            className="w-48 h-48 md:w-60 md:h-60 rounded-lg mt-3"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}