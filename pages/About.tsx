import Layout from "@/components/Layouts";
import {Dot} from "@/components/icons";

const listsPL = [
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "TypeScript"
  },
  {
    id: 3,
    name: "Node JS"
  },
  {
    id: 4,
    name: "PHP"
  },
  {
    id: 5,
    name: "SQL"
  },
]

const listsFLFE = [
  {
    id: 1,
    name: "Bootstrap CSS"
  },
  {
    id: 2,
    name: "Tailwind CSS"
  },
  {
    id: 3,
    name: "React JS"
  },
  {
    id: 4,
    name: "Next JS"
  }
]

const listsFLBE = [
  {
    id: 1,
    name: "Express JS"
  },
  {
    id: 2,
    name: "Nest JS"
  },
  {
    id: 3,
    name: "Laravel"
  }
]

const listsDesign = [
  {
    id: 1,
    name: "Corel Draw"
  },
  {
    id: 2,
    name: "Figma"
  },
  {
    id: 3,
    name: "Canva"
  }
]

export default function About() {
  return (
    <section className="max-w-[60%] ml-8">
      <article className="mt-20">
        <h1 className="text-3xl">About Me</h1>
        <p className="font-sans text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellendus ratione ullam perferendis excepturi nesciunt ex iste nihil provident maxime accusamus omnis earum, fugiat fugit reprehenderit nostrum asperiores voluptas ab enim adipisci! Dolorum nisi voluptates mollitia nemo ab sequi, explicabo necessitatibus similique quisquam, nesciunt assumenda, praesentium doloremque quos quasi alias error id. Aliquid nisi reiciendis earum fuga nostrum officia! Dolores, nulla repudiandae? Molestias quod facere dolorum repellendus id, consectetur, natus tempora reiciendis reprehenderit inventore deleniti praesentium excepturi harum nostrum, accusamus dignissimos quaerat aperiam cumque error nulla. Ducimus incidunt dicta beatae accusamus iure, molestiae repudiandae aut quos architecto optio accusantium quia.</p>
      </article>
      <article className="mt-4">
        <h1 className="text-3xl">My Stacks</h1>
        <div className="flex gap-16 mt-2">
        <section className="pl">
          <h2 className="text-base font-medium mb-2">Programming Language</h2>
          <ul className="font-sans text-xs">
            {listsPL.map((item: any) => (
            <li key={item.id} className="flex gap-2 items-center mb-1">
              <Dot/>
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
              <li key={item.id} className="flex gap-2 items-center mb-1">
                <Dot/>
                <p>{item.name}</p>
              </li>
              ))}
            </ul>
          </div>
          <div className="backend">
            <h3 className="text-sm">Back End</h3>
            <ul className="font-sans text-xs">
              {listsFLBE.map((item: any) => (
              <li key={item.id} className="flex gap-2 items-center mb-1">
                <Dot/>
                <p>{item.name}</p>
              </li>
              ))}
            </ul>
          </div>
          </article>
        </section>
        <section className="design">
          <h3>Design</h3>
          <ul className="font-sans text-xs">
            {listsDesign.map((item: any) => (
              <li key={item.id} className="flex gap-2 items-center mb-1">
                <Dot/>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      </article>
    </section>
  )
}