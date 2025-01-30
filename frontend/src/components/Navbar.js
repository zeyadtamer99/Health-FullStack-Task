"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "../styles/i18n";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
      <div className="flex items-center gap-8">
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

        {/* Dark Mode Toggle with Animation */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: 180, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -180, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={24} color="yellow" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Language Toggle with Animation */}
        <button
          onClick={() =>
            setLanguage(
              language === "en" ? "fr" : language === "fr" ? "ar" : "en"
            )
          }
          className="flex items-center relative gap-2 text-gray-800 dark:text-white"
        >
          <div className="relative w-6 h-5">
            <AnimatePresence mode="wait">
              {language === "en" ? (
                <motion.div
                  key="uk"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute"
                >
                  <Image
                    src="/flags/uk.png"
                    alt="English"
                    width={24}
                    height={24}
                  />
                </motion.div>
              ) : language === "ar" ? (
                <motion.div
                  key="ar"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute"
                >
                  <Image
                    src="/flags/sa.png"
                    alt="English"
                    width={24}
                    height={24}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="fr"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute"
                >
                  <Image
                    src="/flags/fr.png"
                    alt="French"
                    width={24}
                    height={24}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </nav>
  );
}
