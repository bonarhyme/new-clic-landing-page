import Head from "next/head";

import { SSRProvider } from "react-bootstrap";
import { appData } from "../variables/data";

import FAQ from "./components/FAQ";

import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";

import LetsDo from "./components/LetsDo";
import Supporters from "./components/Supporters";
import Why from "./components/Why";

import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function Home() {
  return (
    <SSRProvider>
      <div>
        <Head>
          <title>Clik</title>
          <meta name="description" content="Clik" />
          <link rel="icon" href="/favicon.ico" />

          {/* <!-- meta Google+ --> */}
          <meta itemProp={appData.url} content="Clik" />
          <meta itemProp="description" content="Clik" />
          <meta itemProp="image" content="/android-chrome-192x192.png" />
          <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content="/android-chrome-512x512.png" />
          <meta name="twitter:site" content={appData.twitter} />
          <meta name="twitter:title" content="Clik" />
          <meta name="twitter:description" content="Clik" />
          <meta name="twitter:creator" content={appData.twitter} />
          <meta
            name="twitter:image:src"
            content="/android-chrome-512x512.png"
          />

          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content="Clik" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={appData.url} />
          <meta property="og:image" content="/android-chrome-512x512.png" />
          <meta property="og:description" content="Clik" />
          <meta property="og:site_name" content="Clik" />
        </Head>

        <main>
          <div className="bg-pink">
            <Header />
          </div>
          <div className="share-buttons">
            <h3>Share Clik Platform!!</h3>
            <FacebookShareButton
              quote={appData.quote}
              hashtag={appData.hashtag}
              url={appData.url}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={appData.url}
              title={appData.quote}
              hashtags={[appData.hashtag]}
              related={["@bonarhyme"]}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton title={appData.quote} url={appData.url}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <InstapaperShareButton title={appData.quote} url={appData.url}>
              <InstapaperIcon size={40} round={true} />
            </InstapaperShareButton>
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
