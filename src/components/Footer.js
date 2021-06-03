import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const query = graphql`
  {
    site {
      siteMetadata {
        footerLinks
      }
    }
  }
`;

const Footer = () => {
  // const footerLinks = useStaticQuery(query).siteMetadata.footerLinks;
  // console.log(footerLinks);
  return (
    <footer>
      {/* <section top>
        <h5>合作伙伴</h5>
      </section> */}
      <section></section>
    </footer>
  );
};

export default Footer;
