import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = language === "fa" ? fa.aboutUs : en.aboutUs;
  const textAlign = language === "fa" ? "text-right" : "text-left";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ willChange: "transform, opacity", contentVisibility: "auto" }}
      className={`relative z-10 scroll-mt-20 h-[400px] md:h-[400px] overflow-y-auto md:overflow-y-scroll max-w-4xl mx-auto px-4 py-8 font-vazirmatn custom-scroll transition-all duration-[1200ms] ease-out transform ${
        visible ? "opacity-100 translate-y-0 animate-fadeUp" : "opacity-0 translate-y-8"
      }`}
    >
      {/* عنوان اصلی */}
      <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-yellow-400 text-center transition-colors duration-700">
        {t.title}
      </h2>

      {/* توضیحات اصلی */}
      <p className={`text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-700 ${textAlign}`}>
        {t.description}
      </p>

      {/* ویژگی‌ها */}
      <ul className={`mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 transition-colors duration-700 ${textAlign}`}>
        {t.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      {/* مأموریت */}
      <p className={`mt-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-700 ${textAlign}`}>
        {t.mission}
      </p>

      {/* عنوان کشورها */}
      <h3 className="text-xl font-bold mt-10 mb-4 text-orange-600 dark:text-yellow-400 text-center transition-colors duration-700">
        {t.countriesTitle}
      </h3>

      {/* پرچم کشورها */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {t.countries.map(({ code, name }) => (
          <div
            key={code}
            style={{ willChange: "transform, opacity" }}
            className="p-4 rounded-lg transition duration-300 bg-transparent text-black dark:text-white text-center"
          >
            <img
              src={`/flags/${code}.png`}
              alt={`Flag of ${name}`}
              className="w-24 h-16 object-cover animate-subtleWave mx-auto"
            />
            <div className="mt-2 text-lg font-semibold">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}