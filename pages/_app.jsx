import Head from 'next/head';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Fifa 21</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}