import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import fa from "../content/fa";
import en from "../content/en";

export default function Products() {
  const { language } = useLanguage();
  const t = language === "fa" ? fa.products : en.products;
  const textAlign = language === "fa" ? "text-right" : "text-left";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [language]);

  const products = t.items.map((name, i) => ({ id: i + 1, name }));

  return (
    <section
      style={{ willChange: "transform, opacity", contentVisibility: "auto" }}
      className={`h-[400px] md:h-[500px] overflow-y-auto md:overflow-y-scroll custom-scroll max-w-6xl mx-auto px-4 py-8 font-vazirmatn transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 translate-y-0 animate-fadeUp" : "opacity-0 translate-y-2"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-yellow-400 text-center">
        {t.title}
      </h2>

      {products.length === 0 ? (
        <p className={`text-gray-500 ${textAlign}`}>{t.noProducts}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(({ id, name }) => (
            <div
              key={id}
              className="rounded-lg p-4 shadow-sm transition duration-300 bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <div className={`text-lg font-semibold ${textAlign}`}>{name}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}