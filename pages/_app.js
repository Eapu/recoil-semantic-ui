import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
    <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp

