import Layout from "@/components/Layouts"
import { useFormik } from "formik"

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <section className="ml-8">
      <h1 className="mt-20 text-3xl">Contact</h1>
      <div className="flex gap-32 mt-6">
        <article className="text-6xl">
          <h2>Let`s Talk</h2>
          <h2>With Me</h2>
        </article>
        <article className="w-60">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-xs">Name</label>
              <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name}
              className="border-b border-b-solid border-b-black outline-none text-xs pt-2 font-sans"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-xs">Email</label>
              <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}
              className="border-b border-b-solid border-b-black outline-none text-xs pt-2 font-sans"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="message" className="text-xs">Message</label>
              <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message}
                className="border-b border-b-solid border-b-black outline-none text-xs pt-4 font-sans"
              ></textarea>
            </div>
            <button type="submit" className="border border-black outline-none float-right px-2 py-1 mt-4 text-xs font-semibold">Send</button>
          </form>
        </article>
      </div>
    </section>
  )
}