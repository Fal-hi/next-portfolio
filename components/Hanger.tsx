import Link from "next/link"

export default function Hanger() {
  return (
    <div className="hanger font-mono text-[10px] absolute top-0 right-0">
      <div className="h-2 w-40 ml-20 bg-black"></div>
      <div className="flex gap-8 items-start">
        <section className="email flex justify-center items-center rotate-90 mt-[125px]">
          <div className="string h-[1px] w-28 bg-black"></div>
          <div className="box">
            <Link
              href="/"
              className="w-6 h-20 bg-black max-w-max pt-[4px] pb-[2px] px-1 text-white"
            >
              syaifal.illahi@gmail.com
            </Link>
          </div>
        </section>
        <section className="wa flex justify-center items-center rotate-90 mt-[100px] -ml-[230px] mr-[25px]">
          <div className="string h-[1px] w-28 bg-black"></div>
          <div className="box">
            <Link
              href="/"
              className="w-6 h-20 bg-black max-w-max pt-[4px] pb-[2px] px-1 text-white"
            >
              (+62)89648030105
            </Link>
          </div>
        </section>
        <section className="toggle flex justify-center items-center rotate-90 mt-[67px] -ml-[200px]">
          <div className="string h-[1px] w-28 bg-black"></div>
          <div className="box">
            <Link
              href="/"
              className="w-6 h-20 bg-black max-w-max pt-[4px] pb-[2px] px-1 text-white"
            >
              Light
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
