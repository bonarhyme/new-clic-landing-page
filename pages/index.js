import Head from "next/head";
import Image from "next/image";
import { SSRProvider } from "react-bootstrap";
import ClikNav from "./components/ClikNav";
import FAQ from "./components/FAQ";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import LetsDo from "./components/LetsDo";
import Supporters from "./components/Supporters";
import Why from "./components/Why";

export default function Home() {
  return (
    <SSRProvider>
      <div>
        <Head>
          <title>Join Clik</title>
          <meta name="description" content="Join Clik" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-pink">
            <ClikNav />
            <Header />
          </div>
          <Supporters />
          <Why />
          <GetInTouch />
          <LetsDo />
          <FAQ />
        </main>
      </div>
    </SSRProvider>
  );
}
