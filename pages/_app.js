// import App from 'next/app'
import Head from "next/head";
import Link from "next/link";
import "../styles/global.css";

function BookClubApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Book Club 32</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/">
              <a className="mr-5 hover:text-white">Home</a>
            </Link>
            <Link href="/schedule">
              <a className="mr-5 hover:text-white">Schedule</a>
            </Link>
            <Link href="https://discord.gg/msJzS9BEbv">
              <a target="_blank" className="mr-5 hover:text-white">
                Discord
              </a>
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <img className="w-10 h-10" src="/logo-no-bg.svg" />
            <span className="pb-1 ml-3 text-xl xl:block lg:hidden">
              Book Club 32
            </span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default BookClubApp;
