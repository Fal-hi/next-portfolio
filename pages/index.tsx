import Link from "next/link"

export default function Home() {
  return (
    <section> 
      <article className="mx-4 md:ml-16 lg:ml-8 lg:mx-12 lg:flex justify-between items-start text-center md:text-left">
        <section>
          <div className="mt-28 md:mt-10 lg:mt-[5.5rem] text-4xl lg:text-[3.5rem]">
            <h1>Hi, I`m Fal &</h1>
            <h1 className="mt-2 lg:mt-6">I`m A Professional</h1>
          </div>
          <h3 className="text-2xl font-light font-sans tracking-wide mt-4 lg:mt-8 mb-12">
            Frontend Developer
          </h3>
          <div>
            <Link
              href="/Contact"
              className="px-4 py-2 border border-solid border-black dark:border-white font-sans tracking-tighter"
            >
              Let`s Get Started
            </Link>
          </div>
        </section>
        <section>
          <div>
            <div className="string bg-slate-400 w-1 h"></div>
          </div>
        </section>
      </article>
    </section>
  );
}

