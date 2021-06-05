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
              <dd>
                <Link
                  key={index}
                  to={link.to}
                  activeClassName="footer-link-active"
                >
                  {link.name}
                </Link>
              </dd>
            ))}
          </dl>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
