"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import Image from "next/image";

import { t } from "../styles/i18n";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Verify Influencers
        </h1>
      </div>

      {/* Menu Links */}
      <div className="flex items-center gap-4">
        <button className="text-gray-800 dark:text-white">
          {t(language, "leaderboard")}
        </button>
        <button className="text-gray-800 dark:text-white">
          {t(language, "products")}
        </button>
        <button className="text-gray-800 dark:text-white">
          {t(language, "monetization")}
        </button>
        <button className="text-gray-800 dark:text-white">
          {t(language, "about")}
        </button>
        <button className="text-gray-800 dark:text-white">
          {t(language, "contact")}
        </button>
        <button className="text-gray-800 dark:text-white">
          {t(language, "admin")}
        </button>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} color="yellow" /> : <Moon size={24} />}
        </button>

        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="text-gray-800 dark:text-white flex items-center"
        >
          <Globe size={24} className="mr-1" /> {language === "en" ? "FR" : "EN"}
        </button>
      </div>
    </nav>
  );
}
