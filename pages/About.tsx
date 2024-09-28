import { Dot } from "@/components/icons";
import Link from "next/link";

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
    name: "SQL",
  },
  {
    id: 5,
    name: "No-SQL",
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
    name: "React Native",
  },
  {
    id: 5,
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

const listsWorkOrStudy = [
  {
    company: "Refactory",
    link: "https://www.linkedin.com/school/refactory-id/about/",
    title: "Bootcamp as a Fullstack Developer | 1 month",
  },
  {
    company: "CodeXAcademy",
    link: "https://www.linkedin.com/company/codexacademyid/about/",
    title: "Bootcamp as a Fullstack Developer | 3 month",
  },
  {
    company: "Ganesha Operation",
    link: "https://www.linkedin.com/company/ganesha-operation/about/",
    title: "Working as a Frontend Developer | 2023 - until now",
  },
];

export default function About() {
  return (
    <section className="max-w-full my-8 lg:mt-20 mx-4 md:ml-8">
      <article>
        <h1 className="text-3xl">About Me</h1>
        <p className="font-sans text-sm mt-3">
          My name is Syaifal Illahi. People usually call me Fal and {"I'm"} a
          front-end developer.
          <br />
          Have been a student and worked for 1 month as a full stack developer
          at a software house at Refactory and a full stack developer student
          for 3 months at CodeXAcademy.
          <br />
          And now {"I'm"} working at Ganesha Operation as a front-end developer.
        </p>
        <p className="font-sans text-sm mt-3">Work/Study Experience:</p>
        <ul className="list-decimal font-sans text-sm ml-5">
          {listsWorkOrStudy.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                target="_blank"
                className="underline font-semibold"
              >
                {item.company}
              </Link>{" "}
              {item.title}
            </li>
          ))}
        </ul>
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
