import { Fragment, useState, useEffect, useRef, ReactNode } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import {
  Copyright,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  Sun,
  X,
} from "./icons";
import Link from "next/link";
import Hanger from "./Hanger";
import Waves from "./Waves";

type LayoutProps = {
  children: ReactNode;
};

type MenuListsProps = {
  id: number;
  name: string;
  path: string;
};

const menuLists: MenuListsProps[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/About",
  },
  {
    id: 3,
    name: "Works",
    path: "/Works",
  },
  {
    id: 4,
    name: "Contact",
    path: "/Contact",
  },
];

type IconListsProps = {
  id: number;
  name: any;
  path: any;
};

const iconLists: IconListsProps[] = [
  {
    id: 1,
    name: Instagram,
    path: "https://www.instagram.com/illahisyaifal/?next=%2F",
  },
  {
    id: 2,
    name: Linkedin,
    path: "https://linkedin.com/in/syaifal-illahi",
  },
  {
    id: 3,
    name: Github,
    path: "https://github.com/Fal-hi",
  },
];

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

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

  function renderThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    const handleThemeToggle = () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    };

    return (
      <button onClick={handleThemeToggle}>
        {currentTheme === "dark" ? (
          <Moon width={30} height={30} />
        ) : (
          <Sun width={30} height={30} />
        )}
      </button>
    );
  }

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
          <button className="mr-5 outline-none" onClick={toggleMenu}>
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
                {menuLists.map((menu: any) => (
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
              <div className="flex gap-6 items-center mt-12">
                {iconLists.map((item: any) => (
                  <Fragment key={item.id}>
                    <Link href={item.path} target="_blank">
                      {<item.name className="fill-black dark:fill-white" />}
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
