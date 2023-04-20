import '@/styles/globals.css';

import { NavBar, Footer} from '../Components/Index';


export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  );    
}
