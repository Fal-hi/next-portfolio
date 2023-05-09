import Link from "next/link"

export default function Home() {
  return (
    <section> 
      <article className="mx-12 flex justify-between items-start">
        <section>
          <div className="mt-16 text-[3.5rem]">
            <h1>Hi, I`m Fal &</h1>
            <h1 className="-mt-4">I`m A Professional</h1>
          </div>
          <h3 className="text-2xl font-light font-sans tracking-wide mt-8 mb-12">
            FullStack Developer
          </h3>
          <div>
            <Link
              href="/"
              className="px-4 py-2 border border-solid border-black font-sans tracking-tighter"
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

