import Layout from "@/components/Layouts"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const italiana = localFont({
  src: "../public/fonts/Italiana/Italiana-Regular.ttf",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <main
      className={`${italiana.className} ${inter.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
