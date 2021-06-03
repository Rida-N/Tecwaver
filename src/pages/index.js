import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import "../assets/styles/main.scss";
import Services from "../components/Services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="为沃互联 " />
      <main className="page">
        <header className="banner">
          <StaticImage
            className="banner-img"
            alt="tecwaver logo"
            src="../assets/images/banner/4.jpeg"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="banner-content">
            <div className="banner-text">
              <h1>专业快速高端定制网站建设</h1>
              <p>
                <span style={{ fontSize: "3rem", marginRight: "2rem" }}>
                  40%折扣
                </span>
                <span style={{ marginRight: "1rem" }}>项目活动中</span>
                <span>
                  仅剩
                  <b
                    style={{
                      fontSize: "2rem",
                      margin: ".5rem",
                      fontWeight: "600",
                    }}
                  >
                    20
                  </b>
                  天
                </span>
              </p>
              <h5>为您提供专业和创新的互联网解决方案！</h5>
              <button style={{ fontSize: "1.5rem" }}>我要建站</button>
            </div>
          </div>
        </header>
        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
