import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Link } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        footerLinks {
          columnTitle
          links {
            to
            name
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const footerLinks = useStaticQuery(query).site.siteMetadata.footerLinks;
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerLinks.map((group, index) => (
          <dl key={index}>
            <dt>{group.columnTitle}</dt>
            {group.links.map((link, index) => (
              <dd key={index}>
                <Link to={link.to} activeClassName="footer-link-active">
                  {link.name}
                </Link>
              </dd>
            ))}
          </dl>
        ))}
      </div>
      <div className="footer-copyright">
        <span>
          Copyright © {new Date().getFullYear()} 为沃互联科技有限公司 ALL RIGHTS
          RESERVED.
        </span>
        <span>联系方式: contact@tecwaver.com</span>
      </div>
    </footer>
  );
};

export default Footer;
