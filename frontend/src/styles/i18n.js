const messages = {
  en: {
    leaderboard: "Leaderboard",
    products: "Products",
    monetization: "Monetization",
    about: "About",
    contact: "Contact",
    admin: "Admin",
  },
  fr: {
    leaderboard: "Classement",
    products: "Produits",
    monetization: "Monétisation",
    about: "À propos",
    contact: "Contact",
    admin: "Administrateur",
  },
  ar: {
    leaderboard: "لوحة الصدارة",
    products: "المنتجات",
    monetization: "تحقيق الدخل",
    about: "حول",
    contact: "اتصال",
    admin: "المسؤول",
  },
};

export function t(lang, key) {
  return messages[lang][key] || key;
}
