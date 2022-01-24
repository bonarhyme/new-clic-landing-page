import Head from "next/head";
import Image from "next/image";
import { SSRProvider } from "react-bootstrap";
import { appData } from "../variables/data";
import ClikNav from "./components/ClikNav";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
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

          {/* <!-- meta Google+ --> */}
          <meta itemProp={appData.url} content="Join Clik" />
          <meta itemProp="description" content="Join Clik" />
          <meta itemProp="image" content="/android-chrome-192x192.png" />
          <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content="/android-chrome-512x512.png" />
          <meta name="twitter:site" content={appData.twitter} />
          <meta name="twitter:title" content="Join Clik" />
          <meta name="twitter:description" content="Join Clik" />
          <meta name="twitter:creator" content={appData.twitter} />
          <meta
            name="twitter:image:src"
            content="/android-chrome-512x512.png"
          />

          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content="Join Clik" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={appData.url} />
          <meta property="og:image" content="/android-chrome-512x512.png" />
          <meta property="og:description" content="Join Clik" />
          <meta property="og:site_name" content="Clik" />
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
          <Footer />
        </main>
      </div>
    </SSRProvider>
  );
}
