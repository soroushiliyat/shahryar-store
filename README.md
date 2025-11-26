# Shahryar Store 🏭

A real-world industrial React website built for Shahryar Store — designed, developed, and deployed by [Soroush Iliyat](https://github.com/soroushiliyat).  
This project showcases responsive design, multilingual support, SEO optimization, and performance improvements tailored for Iranian and international markets.

---

## 💡 Purpose
This project was built as a real-world industrial storefront for Shahryar Store, with the goal of showcasing modern UI/UX, multilingual support, and performance optimization.  
It also serves as a portfolio piece for international employment, especially for remote opportunities in Europe.

---

## 🚀 Live Demo
🔗 [https://shahryar-store-betn.vercel.app](https://shahryar-store-betn.vercel.app)

---

## 📦 Tech Stack
- **React 18 + TypeScript**  
- **React Router v6** (with Lazy Loading for About & Products pages)  
- **Tailwind CSS**  
- **Vite**  
- **Context API** (for multilingual support)  
- **Vitest + Testing Library** (unit testing)  
- **Vercel** (CI/CD Deployment)  
- **GTmetrix** (Performance benchmarking)  
- **TinyPNG + Squoosh** (Image optimization)  

---

## 🎯 Features
- **Responsive Layout**: Fully optimized for desktop and mobile with breakpoint-specific logic.  
- **Multilingual Support**: Persian (FA) and English (EN) toggle using Context API.  
- **TypeScript Strong Typing**: fa.ts and en.ts translation files are strictly typed with interfaces.  
- **Lazy Loading**: About and Products pages are loaded on demand for faster performance.  
- **Dark Mode**: Persistent theme toggle with localStorage sync.  
- **Animated UI**: Flame-text, fade-in sections, and scroll-based visibility.  
- **Optimized Assets**: WebP-ready images, lazy loading, and minimal request count.  
- **SEO Optimization**: bilingual meta tags (FA/EN), alt text, ARIA labels, and JSON-LD structured data for Google indexing.  
- **Industrial Branding**: Flag animations for importing countries and structured contact info.  

---

## 📊 GTmetrix Performance (Nov 2025)

| Metric            | Value |
|-------------------|-------|
| GTmetrix Grade    | A     |
| Performance       | 94%   |
| Structure         | 94%   |
| LCP               | 1.1s  |
| TBT               | 0ms   |
| CLS               | 0     |
| Total Page Size   | 272KB |
| Total Requests    | 5     |

> ✅ No layout shifts, no blocking tasks, and fully loaded under 1.1s.

---

## 📁 Project Structure
src/ ├── assets/              # Optimized images and icons ├── components/          # Navbar, Footer, LanguageToggle ├── pages/               # Home, Products, AboutUs (Lazy Loaded) ├── content/             # fa.ts and en.ts (typed with interfaces) ├── context/             # LanguageContext.tsx ├── App.tsx              # Main layout with Lazy Loading └── main.tsx             # Entry point public/ └── index.html           # SEO bilingual meta tags + Structured Data

📬 Contact
Developed by Soroush Iliyat
📧 soroushiliyat23@gmail.com

📄 License
This project is licensed under the MIT License.
Feel free to fork, adapt, or contribute.
