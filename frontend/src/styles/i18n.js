const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    blog: "Blog",
    faq: "FAQ",
    dark_mode: "Dark Mode",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    blog: "Blog",
    faq: "FAQ",
    dark_mode: "Mode Sombre",
  },
};

export function t(lang, key) {
  return translations[lang][key] || key;
}
