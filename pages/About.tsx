import { Dot } from "@/components/icons";
import {
  listsDesign,
  listsFLBE,
  listsFLFE,
  listsPL,
  listsWorkOrStudy,
} from "@/constants";
import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-full my-8 lg:mt-20 mx-4 md:ml-8">
      <article>
        <h1 className="text-3xl">About Me</h1>
        <p className="font-sans text-sm mt-3 md:w-5/6">
          My name is Syaifal Illahi. People usually call me Fal and {"I'm"} a
          frontend developer.
          <br />
          Have been a student and worked for 1 month as a full stack developer
          at a software house at Refactory and a full stack developer student
          for 3 months at CodeXAcademy.
          <br />
          And now {"I'm"} working at Ganesha Operation as a frontend developer.
        </p>
        <p className="font-sans text-sm mt-3">Work/Study Experience:</p>
        <ul className="list-decimal font-sans text-sm ml-5">
          {listsWorkOrStudy.map((item) => (
            <li key={item.id}>
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
                {listsPL.map((item) => (
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
                    {listsFLFE.map((item) => (
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
                    {listsFLBE.map((item) => (
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
              {listsDesign.map((item) => (
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
