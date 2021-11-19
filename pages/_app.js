import '../styles/globals.css'
import { RecoilRoot } from "recoil";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return  <RecoilRoot><Component {...pageProps} /></RecoilRoot>
}

export default MyApp
