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
};

export function t(lang, key) {
  return messages[lang][key] || key;
}
