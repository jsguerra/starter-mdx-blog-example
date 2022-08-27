import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
