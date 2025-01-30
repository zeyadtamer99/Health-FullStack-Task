"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Logo</h1>
      <div className="flex items-center gap-4">
        <button className="text-gray-800 dark:text-white">Home</button>
        <button className="text-gray-800 dark:text-white">About</button>
        <button className="text-gray-800 dark:text-white">Services</button>
        <button className="text-gray-800 dark:text-white">Contact</button>
        <button className="text-gray-800 dark:text-white">Blog</button>
        <button className="text-gray-800 dark:text-white">FAQ</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
}
