import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = language === "fa" ? fa.aboutUs : en.aboutUs;
  const textAlignClass = language === "fa" ? "text-right" : "text-left";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative z-10 scroll-mt-20 h-[400px] md:h-[400px] overflow-y-auto max-w-4xl mx-auto px-4 py-8 font-vazirmatn custom-scroll transition-all duration-[1200ms] ease-out transform ${
        visible ? "opacity-100 translate-y-0 animate-fadeUp" : "opacity-0 translate-y-8"
      }`}
    >
      {/* عنوان همیشه وسط‌چین */}
      <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-yellow-400 text-center transition-colors duration-700">
        {t.title}
      </h2>

      {/* توضیحات اصلی با چینش متن وابسته به زبان */}
      <p
        className={`text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-700 ${textAlignClass}`}
      >
        {t.description}
      </p>

      {/* لیست ویژگی‌ها */}
      <ul
        className={`mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 transition-colors duration-700 ${textAlignClass}`}
      >
        {t.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* مأموریت فروشگاه */}
     <p
  className={`mt-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-700 ${textAlignClass}`}
>
  {t.mission}
</p>

      {/* عنوان کشورها همیشه وسط‌چین */}
      <h3 className="text-xl font-bold mt-10 mb-4 text-orange-600 dark:text-yellow-400 text-center transition-colors duration-700">
        {t.countriesTitle}
      </h3>

      {/* نمایش پرچم کشورها */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {t.countries.map((country) => (
          <div
            key={country.code}
            className="p-4 rounded-lg transition duration-300 bg-transparent text-black dark:text-white text-center"
          >
            <img
              src={`/flags/${country.code}.png`}
              alt={`Flag of ${country.name}`}
              className="w-24 h-16 object-cover animate-subtleWave mx-auto"
            />
            <div className="mt-2 text-lg font-semibold">{country.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}