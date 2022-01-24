import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClikNav from "./components/ClikNav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-pink">
        <ClikNav />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
