import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/SEO";
import Layout from "../components/Layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main style={pageStyles}>
        <h1 style={headingStyles}>页面不存在</h1>
        <p style={paragraphStyles}>
          抱歉{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          我们找不到您访问的页面.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">回家吧</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
