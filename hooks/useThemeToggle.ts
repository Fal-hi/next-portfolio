import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    currentTheme,
    toggleTheme,
  };
};
