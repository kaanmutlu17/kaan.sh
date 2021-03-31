import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Helmet } from "react-helmet";
import LayoutGA from "@/components/LayoutGA";
import Header from "@/components/Header";
import Container from "@/components/Container";

export default function App({ Component, pageProps }) {
  return (
    <body className="text-white bg-white dark:bg-black dark:text-black">
      <ThemeProvider attribute="class">
        <Helmet htmlAttributes={{ lang: "en" }} />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="./favicon.png" />
        </Head>

        <Header />
        
        <NextSeo
          title="Kaan Mutlu"
          description="Software Developer Based In Copenhagen, Denmark"
        />
        
        <Container>
          <LayoutGA />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </body>
  );
}
