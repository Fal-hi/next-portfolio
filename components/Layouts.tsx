import { Fragment, useState, useEffect, useRef, ReactNode } from "react";
import { useRouter } from "next/router";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { Copyright, Menu, Moon, Sun, X } from "./icons";
import { iconLists, menuLists } from "@/constants";
import Link from "next/link";
import Hanger from "./Hanger";
import Waves from "./Waves";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { mounted, currentTheme, toggleTheme } = useThemeToggle();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    return (
      <button onClick={toggleTheme}>
        {currentTheme === "dark" ? (
          <Moon width={30} height={30} />
        ) : (
          <Sun width={30} height={30} />
        )}
      </button>
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <header className="block lg:hidden">
        <div className="flex items-center justify-between bg-white dark:bg-black shadow max-w-full h-16">
          <div className="text-3xl font-light max-w-max ml-4">
            <h1>
              <Link href="/">FAL</Link>
            </h1>
          </div>
          <div className="box">{renderThemeChanger()}</div>
          <button
            className="mr-5 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                width={35}
                height={35}
                className="fill-black dark:fill-white"
              />
            ) : (
              <Menu
                width={25}
                height={25}
                className="fill-black dark:fill-white"
              />
            )}
          </button>
        </div>
      </header>
      <div className="lg:flex">
        <aside
          className={`bg-white dark:bg-black shadow-2xl max-w-[15rem] h-screen tracking-widest z-10 lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-300 ease-in-out fixed top-0 left-0`}
          ref={ref}
        >
          <article className="mx-12 pt-20">
            <header className="text-3xl font-light max-w-max">
              <h1>SYAIFAL</h1>
              <h1 className="text-right">ILLAHI</h1>
            </header>
            <section className="mt-12 ml-6">
              <ul>
                {menuLists.map((menu) => (
                  <li key={menu.id} className="my-6">
                    <Link
                      href={menu.path}
                      className={`${
                        router.asPath === menu.path && "font-semibold"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <footer>
              <div className="flex gap-2 items-center mt-12">
                {iconLists.map((item) => (
                  <Fragment key={item.id}>
                    <Link href={item.path} target="_blank">
                      {
                        <item.name
                          width={20}
                          height={20}
                          className="fill-black dark:fill-white"
                        />
                      }
                    </Link>
                  </Fragment>
                ))}
              </div>
              <div className="mt-3 text-[8px] font-mono tracking-tighter">
                <p className="flex gap-1 items-center">
                  <Copyright className="fill-black dark:fill-white" />
                  Copyright By FAL
                </p>
                <p className="ml-3">All Rights Reserved.</p>
              </div>
            </footer>
          </article>
        </aside>
        <main className="lg:ml-52">
          <Hanger />
          {children}
          <Waves />
        </main>
      </div>
    </div>
  );
}
