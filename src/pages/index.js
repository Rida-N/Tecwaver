import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Services from "../components/home/Services";
import Banner from "../components/home/Banner";
import "../assets/styles/main.scss";
import Intro from "../components/home/Intro";
import News from "../components/home/News";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="为沃互联" />
      <main className="page">
        <Banner />
        <div className="page-content">
          <Intro />
          <Services />
          <News />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
