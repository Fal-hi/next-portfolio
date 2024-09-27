import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Hanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <span
          className="w-6 h-20 bg-black dark:bg-white max-w-max pt-[4px] pb-[2px] px-2 text-white dark:text-black cursor-pointer"
          role="button"
          onClick={() => setTheme("light")}
        >
          Light
        </span>
      );
    } else {
      return (
        <span
          className="w-6 h-20 bg-black dark:bg-white max-w-max pt-[4px] pb-[2px] px-2 text-white dark:text-black cursor-pointer"
          role="button"
          onClick={() => setTheme("dark")}
        >
          Dark
        </span>
      );
    }
  }
  return (
    <div className="hanger font-mono text-[10px] absolute top-0 md:top-16 lg:top-0 right-0 hidden md:block">
      <div className="h-2 w-28 ml-24 bg-black dark:bg-white"></div>
      <div className="hanger-group flex gap-10 items-start">
        <section className="email flex justify-center items-center rotate-90 mt-[125px]">
          <div className="string h-[1px] w-28 bg-black dark:bg-white"></div>
          <div className="box">
            <span className="w-6 h-20 bg-black dark:bg-white max-w-max pt-[4px] pb-[2px] px-2 text-white dark:text-black">
              syaifal.illahi@gmail.com
            </span>
          </div>
        </section>
        <section className="toggle flex justify-center items-center rotate-90 mt-[69px] -ml-[200px]">
          <div className="string h-[1px] w-28 bg-black dark:bg-white"></div>
          <div className="box">{renderThemeChanger()}</div>
        </section>
      </div>
    </div>
  );
}
