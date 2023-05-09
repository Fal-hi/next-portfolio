import Hanger from "./Hanger";
import Waves from "./Waves";
import { useRouter } from "next/router";
import { Copyright, Github, Instagram, Linkedin } from "./icons";
import Link from "next/link";
import { Fragment } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

type MenuListsProps = {
  id: number;
  name: string;
  path: string;
}

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
]

type IconListsProps = {
  id: number;
  name: any;
  path: any;
}

const iconLists: IconListsProps[] = [
  {
    id: 1,
    name: Instagram,
    path: "/",
  },
  {
    id: 2,
    name: Linkedin,
    path: "/",
  },
  {
    id: 3,
    name: Github,
    path: "/",
  },
]

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  return (
    <div className="flex">
      <aside className="bg-white shadow-2xl max-w-[15rem] h-screen tracking-widest z-10">
        <article className="mx-12 pt-20">
          <header className="text-3xl font-light max-w-max">
            <h1>SYAIFAL</h1>
            <h1 className="text-right">ILLAHI</h1>
          </header>
          <section className="mt-12 ml-6">
            <ul>
              {menuLists.map((menu: any) => (
                <li key={menu.id} className="my-6">
                  <Link href={menu.path} className={`${router.asPath === menu.path && "font-semibold"}`}>
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
                  <Link href={item.path}>
                    {<item.name />}
                  </Link>
                </Fragment>
              ))}
            </div>
            <div className="mt-3 text-[8px] font-mono tracking-tighter">
              <p className="flex gap-1 items-center">
                <Copyright />
                Copyright By FAL
              </p>
              <p className="ml-3">All Rights Reserved.</p>
            </div>
          </footer>
        </article>
      </aside>
      <main>
        <Hanger/>
        {children}
        <Waves/>
      </main>
    </div>
  );
};
