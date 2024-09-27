import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  return (
    <section className="mx-4 lg:ml-8">
      <h1 className="mt-8 lg:mt-20 text-3xl text-center md:text-left">
        Contact
      </h1>
      <div className="flex-none md:flex md:gap-8 lg:gap-32 mt-6">
        <article className="text-6xl text-center md:text-left">
          <h2>Let`s Talk</h2>
          <h2>With Me</h2>
        </article>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("You must fill your full name"),
            email: Yup.string()
              .email("Invalid email address")
              .required("You must fill your email"),
            message: Yup.string().required(
              "You must fill it with your message"
            ),
          })}
          onSubmit={async (values: any) => {
            try {
              await fetch("/api/email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
              toast.info(
                "Message Received! I`ll send your message soon, thank you😊",
                {
                  icon: "👍",
                }
              );
            } catch (error) {
              toast.error(`${error}`, {
                icon: "😢",
              });
              console.log(error, "error send message");
            }
          }}
        >
          {(formik: FormikProps<FormValues>) => (
            <Form className="mx-12 mt-8 md:mt-0">
              <div className="flex flex-col mb-5">
                <label htmlFor="name" className="text-xs">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="border-b border-b-solid border-b-black dark:border-b-white bg-transparent outline-none text-xs pt-1 md:pt-2 font-sans w-full md:w-60"
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-500 text-xs font-sans">
                    {formik.errors.name}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="text-xs">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="border-b border-b-solid border-b-black dark:border-b-white bg-transparent outline-none text-xs pt-1 md:pt-2 font-sans w-full md:w-60"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs font-sans">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="text-xs">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  className="border-b border-b-solid border-b-black dark:border-b-white bg-transparent outline-none text-xs pt-8 md:pt-2 font-sans w-full md:w-60"
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs font-sans">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              {formik.submitCount > 0 && !formik.isValid && (
                <p>Some field are missing/invalid</p>
              )}
              <button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
                className="border border-black dark:border-white outline-none  float-right px-2 py-1 md:mt-4 text-xs font-semibold"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer theme="dark" className="text-xs font-sans" />
    </section>
  );
}
