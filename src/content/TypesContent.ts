// types/content.ts


export interface NavbarContent {
  home: string;
  products: string;
  about: string;
  logo: string;
}

export type NavbarKey = keyof NavbarContent;

export interface LanguageToggle {
  fa: string;
  en: string;
}


export interface HomeContent {
  title: string;
  description: string;
  image_alt: string;
  manager: string;
}

export interface FooterContent {
  copyright: string;
  credit: string;
  address_title: string;
  address_full: string;
  office: string;
  office_tel: string;
  mobile: string;
  mobile_tel: string;
  email: string;
  email_adress: string;
   map_link: string;
  map_iframe: string;
  latitude: string;
  longitude: string;
}

export interface AboutUsContent {
  title: string;
  description: string;
  features: string[];
  mission: string;
  countriesTitle: string;
  countries: { name: string; code: string }[];
}

export interface ProductsContent {
  title: string;
  noProducts: string;
  items: string[];
}

export interface LanguageContent {
  languageToggle: LanguageToggle;
  navbar: NavbarContent;
  home: HomeContent;
  footer: FooterContent;
  aboutUs: AboutUsContent;
  products: ProductsContent;
}
