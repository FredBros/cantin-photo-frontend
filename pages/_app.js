import '../styles/globals.css'
import Layout from '../components/Layout'
import { ParallaxProvider } from "react-scroll-parallax";
import SimpleReactLightbox from "simple-react-lightbox";


function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <SimpleReactLightbox>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SimpleReactLightbox>
    </ParallaxProvider>
  );
}




export default MyApp
