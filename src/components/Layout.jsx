import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Neeraj Rana | India</title>
        <meta name="description" content="Portfolio website for Projects display" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/avatar/profile.jpeg"
          
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
