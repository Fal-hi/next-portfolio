import Layout from "@/components/Layouts"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "@/styles/globals.css"
import "tailwindcss/tailwind.css"
import { ThemeProvider } from "next-themes"
import Head from "next/head"

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
    <>
    <Head>
      <link rel="shortcut icon" href="/f.png" />  
    </Head>    
    <main
      className={`${italiana.className} ${inter.variable}`}
    >
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
    </>
  )
}
