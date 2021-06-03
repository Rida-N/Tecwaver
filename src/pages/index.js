import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import "../assets/styles/main.css";
import Services from "../components/Services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title=" 为沃互联 " />
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
              <h1>专业快速高质量定制网站建设</h1>
              <p>
                <span style={{ fontSize: "3rem" }}>40%折扣</span>
                <span>项目活动中</span>
                <span>还剩20天</span>
              </p>
              <h5>为您提供专业和创新的互联网解决方案！</h5>
              <button>我要建站</button>
            </div>
          </div>
        </header>
        <Services />
      </main>
    </Layout>
  );
};

export default IndexPage;
