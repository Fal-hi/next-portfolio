import Layout from "@/components/Layouts";
import { Dot } from "@/components/icons";

const listsPL = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "TypeScript",
  },
  {
    id: 3,
    name: "Node JS",
  },
  {
    id: 4,
    name: "PHP",
  },
  {
    id: 5,
    name: "SQL",
  },
];

const listsFLFE = [
  {
    id: 1,
    name: "Bootstrap CSS",
  },
  {
    id: 2,
    name: "Tailwind CSS",
  },
  {
    id: 3,
    name: "React JS",
  },
  {
    id: 4,
    name: "Next JS",
  },
];

const listsFLBE = [
  {
    id: 1,
    name: "Express JS",
  },
  {
    id: 2,
    name: "Nest JS",
  },
  {
    id: 3,
    name: "Laravel",
  },
];

const listsDesign = [
  {
    id: 1,
    name: "Corel Draw",
  },
  {
    id: 2,
    name: "Figma",
  },
  {
    id: 3,
    name: "Canva",
  },
];

export default function About() {
  return (
    <section className="max-w-full md:max-w-[60%] my-8 lg:mt-20 mx-4 md:ml-8">
      <article>
        <h1 className="text-3xl">About Me</h1>
        <p className="font-sans text-sm mt-3">
          A fresh graduate who has more than 4 years of experience in
          programming and design, loves to learn new things related to
          technology.
          <br />
          Have been a student and worked for 1 month as a full stack developer
          at a software house company, Refactory and a full stack developer
          student for 3 months at CodeXAcademy.
        </p>
      </article>
      <article className="mt-4 md:mt-6">
        <h1 className="text-3xl">My Stacks</h1>
        <div className="md:flex gap-16 mt-2">
          <div className="flex lg:gap-16 lg:flex-none">
            <section className="pl">
              <h2 className="text-base font-medium mb-2">
                Programming Language
              </h2>
              <ul className="font-sans text-xs">
                {listsPL.map((item: any) => (
                  <li key={item.id} className="flex gap-2 items-center mb-1">
                    <Dot className="stroke-black fill-white dark:stroke-white dark:fill-black" />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="fl">
              <h2>Frameworks/Libraries</h2>
              <article className="flex gap-16">
                <div className="frontend">
                  <h3 className="text-sm">Front End</h3>
                  <ul className="font-sans text-xs">
                    {listsFLFE.map((item: any) => (
                      <li
                        key={item.id}
                        className="flex gap-2 items-center mb-1"
                      >
                        <Dot className="stroke-black fill-white dark:stroke-white dark:fill-black" />
                        <p>{item.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="backend">
                  <h3 className="text-sm">Back End</h3>
                  <ul className="font-sans text-xs">
                    {listsFLBE.map((item: any) => (
                      <li
                        key={item.id}
                        className="flex gap-2 items-center mb-1"
                      >
                        <Dot className="stroke-black fill-white dark:stroke-white dark:fill-black" />
                        <p>{item.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </section>
          </div>
          <section className="design mt-2 md:mt-0">
            <h3>Design</h3>
            <ul className="font-sans text-xs">
              {listsDesign.map((item: any) => (
                <li key={item.id} className="flex gap-2 items-center mb-1">
                  <Dot className="stroke-black fill-white dark:stroke-white dark:fill-black" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}
