import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services-container">
      <section>
        <article>
          <h5>互联网数字营销</h5>
          <p className="article-subHead">把握时代脉搏，用科技抓住先机</p>
          <p className="article-info">
            网站建设、微信服务页面设计开发及运营托管、微信小程序开发等，用最前沿的技术手段扩大您的服务圈、提升服务质量。
          </p>
          <button className="simple article-detail-btn">
            <span>详</span>情
            <BsArrowRight />
          </button>
        </article>
        <StaticImage
          className="article-img"
          src="../../assets/images/banner/2.jpeg"
          alt="Digital Market"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </section>
      <section>
        <StaticImage
          className="article-img"
          src="../../assets/images/banner/1.jpeg"
          alt="Plateform Development"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <article>
          <h5>企业及机构平台构建</h5>
          <p className="article-info">
            结合业务场景和技术创新，我们的核心技术团队将为您提供优质的互联网平台规划和体系构建服务。
            对象涵盖互联网、政府、金融、教育、科研、传统行业等。
          </p>
          <button className="simple article-detail-btn">
            详情
            <BsArrowRight />
          </button>
        </article>
      </section>
      <section>
        <article>
          <h5>行业解决方案</h5>
          <p className="article-info">
            利用大数据和人工智能深度分析，面向电商、教育、医疗、金融、家居、建筑等行业，提供营销咨询、服务开发等解决方案。
          </p>
          <button className="simple article-detail-btn">
            <span>详</span>情
            <BsArrowRight />
          </button>
        </article>
        <StaticImage
          className="article-img"
          src="../../assets/images/banner/3.jpeg"
          alt="Industry Solutions"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </section>
      <section>
        <StaticImage
          className="article-img"
          src="../../assets/images/banner/5.jpeg"
          alt="Offshore outsourcing"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <article>
          <h5>离岸外包</h5>
          <p className="article-info">
            经济全球化的潮流当前，我们的资深工程师们将为您提供高效优质的互联网解决方案，助您增强综合竞争力。
          </p>
          <button className="simple article-detail-btn">
            <span>详</span>情
            <BsArrowRight />
          </button>
        </article>
      </section>
    </div>
  );
};

export default Services;
