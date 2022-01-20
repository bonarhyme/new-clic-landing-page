import Head from "next/head";
import Image from "next/image";
import ClikNav from "./components/ClikNav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Join Clik</title>
        <meta name="description" content="Join Clik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-pink">
          <ClikNav />
        </div>
      </main>
    </div>
  );
}
