// src/content/en.ts
// src/content/en.ts
import type { LanguageContent } from "./TypesContent";

const en: LanguageContent = {
  languageToggle: {
    fa: "فارسی",
    en: "English",
  },

  navbar: {
    home: "Home",
    products: "Warehouse",
    about: "About Us",
    logo: "Shahryar Store",
  },

  home: {
    title: "Shahryar Industrial & Agricultural Parts Store",
    manager:'Managed by Hossein Iliyat',
    description: `Shahryar Industrial & Agricultural Parts Store
, Shahryar Store has over 34 years of proven experience in importing, manufacturing, and distributing spare parts for Romanian tractors, Ferguson 399, 475, 485, and ground engines. With an official license from the Spare Parts Union, it is recognized as one of the country’s specialized centers.
We provide a complete range of original and custom spare parts, including agricultural and industrial bearings, belts, oil seals, bolts and nuts, gauges, and electrical equipment — all supplied with authenticity and quality guarantees. In addition, we offer technical consulting, industrial design, and fast nationwide delivery.
Our technical team, with deep expertise and hands-on experience, is ready to answer your questions and provide precise solutions for selecting the right part. Special orders, performance optimization consulting, and tailored technical recommendations are also available.
Our principles are built on high quality, fair pricing, reliable support, and customer satisfaction. Our mission is to build trust, simplify the purchasing process, and enhance productivity in Iran’s agricultural and mechanical industries. You can shop in-person or place your order via phone call, with full confidence in product authenticity and value.`,
    image_alt: "Custom tractor part",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Shahryar Store`,
    credit: "Designed & developed by Soroush Iliyat",
    address_title: "Store Address",
    address_full:
      "Imam Khomeini Square, Naser Khosrow St., Post Alley, Naser Khosrow Passage, 3rd Floor, Unit 5",
    office: "Office",
    office_tel: "+98-21-33969884",
    mobile: "Mobile & WhatsApp",
    mobile_tel: "+98-912-524-1399",
    email: "Gmail",
    email_adress: "soroushiliyat23@gmail.com",
  },

aboutUs: {
  title: "About Shahryar Store",
  description:
    "With over 34 years of experience in supplying and distributing industrial and agricultural tractor parts, Shahryar Store proudly sources its products from the most reputable domestic and international manufacturers. Backed by long-standing expertise and a skilled team, we guarantee authenticity and quality in every part.",
  features: [
    "Direct imports from China, India, and Turkey",
    "Guaranteed authenticity and quality of parts",
    "Fast nationwide delivery",
    "Technical support and professional consulting",
  ],
  mission:
    "Our mission is to strengthen Iran’s agricultural infrastructure by providing reliable industrial parts and sustainable services",

    countriesTitle: "Importer of parts from the following countries",
    countries: [
      { name: "China", code: "CN" },
      { name: "India", code: "IN" },
      { name: "Turkey", code: "TR" },
    ],
  },

products: {
  title: "Warehouse List",
  noProducts: "No parts found",
  items: [
    "Engine and engine parts (cylinder, piston, rings, crankshaft, camshaft, bearings)",
    "Fuel system (fuel pump, injectors, carburetor, fuel tank, fuel filter)",
    "Cooling system (radiator, water pump, thermostat, hoses)",
    "Lubrication system (oil pump, oil filter, oil pan, seals)",
    "Electrical system (alternator, starter, battery, fuses, wiring, lights, gauges)",
    "Transmission system (gearbox, clutch, disc & plate, flywheel, shafts)",
    "Hydraulic system (hydraulic pump, hydraulic valve, hydraulic cylinder, hoses)",
    "Steering system (steering box, steering shaft, steering wheel, tie rods)",
    "Brake system (brake drum, brake disc, brake pads, brake pump, brake fluid)",
    "Suspension and axle (front axle, rear axle, shock absorbers, springs, bushings)",
    "Exhaust system (manifold, exhaust pipe, muffler)",
    "Air intake and filters (air filter, filter housing, intake pipes)",
    "Bearings (agricultural, industrial, gearbox, wheel bearings)",
    "Belts (alternator belt, fan belt, hydraulic belt)",
    "Oil seals and gaskets",
    "Bolts, nuts, and washers",
    "Pumps (fuel pump, oil pump, hydraulic pump, water pump)",
    "Shafts (PTO shaft, gearbox shaft, steering shaft)",
    "Wheels and tires (front wheels, rear wheels, agricultural & industrial tires)",
    "Cabin and body (roof, doors, seat, dashboard, glass, mirrors)",
    "Tools and accessories (jacks, weights, trailers, three-point linkage)",
  ],
},
};

export default en;
