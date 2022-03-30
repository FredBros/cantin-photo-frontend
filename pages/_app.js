import "../styles/reset.css";
import "../styles/typo.css";
import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { ParallaxProvider } from "react-scroll-parallax";
import SimpleReactLightbox from "simple-react-lightbox";


function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700;800&display=swap"
        />
        <title>Cantin Photo</title>
        <meta
          name="description"
          content="Charles Cantin, photographie vos plus beaux moments. A Bordeaux et ses alentours. ❤"
        />
      </Head>
      <SimpleReactLightbox>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SimpleReactLightbox>
    </ParallaxProvider>
  );
}




export default MyApp
