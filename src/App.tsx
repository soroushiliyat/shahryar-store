import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import React, { Suspense } from "react";

// Lazy load برای صفحات سنگین
const Products = React.lazy(() => import("./pages/Products"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <LanguageProvider>
      <div className="w-screen min-h-screen z-30 overflow-x-hidden flex flex-col font-vazirmatn bg-white dark:bg-neutral-900 relative">
        {/* نوار بالا */}
        <Navbar />

       

        {/* افکت‌های نوری */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/80 dark:bg-neutral-900/80 z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-64 h-64 rounded-full bg-orange-400 opacity-70 blur-xl animate-fade"></div>
        </div>
        <div className="absolute top-4 right-4 w-40 h-40 rounded-full bg-purple-500 opacity-70 blur-xl animate-fade z-10"></div>
        <div className="absolute bottom-4 left-4 w-40 h-40 rounded-full bg-teal-400 opacity-70 blur-xl animate-fade z-10"></div>

        {/* محتوای صفحات */}
        <div className="relative z-20 pt-24 px-6 flex-grow">
          <Suspense fallback={<div className="text-center text-orange-500">Loading...</div>}>
            <Routes>
  {/* فارسی */}
  <Route path="/fa" element={<Home />} />
  <Route path="/fa/products" element={<Products />} />
  <Route path="/fa/about" element={<About />} />

  {/* انگلیسی */}
  <Route path="/en" element={<Home />} />
  <Route path="/en/products" element={<Products />} />
  <Route path="/en/about" element={<About />} />

  {/* مسیر پیش‌فرض */}
  <Route path="/" element={<Home />} />
</Routes>
          </Suspense>
        </div>

        {/* فوتر ثابت پایین صفحه */}
        <div className="z-30">
        <Footer />
          </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
