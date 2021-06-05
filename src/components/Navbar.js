import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FcMenu } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";

const links = [
  { text: "服务与解决方案", url: "/services" },
  { text: "产品", url: "/products" },
  { text: "客户案例", url: "/examples" },
  { text: "关于", url: "/about" },
  { text: "加入我们", url: "/join" },
  { text: "联系我们", url: "/contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              className="nav-logo"
              src="../assets/images/logo-long.png"
              alt="tecwaver logo"
            />
          </Link>
          <button className="nav-menuBtn" onClick={() => setShow(!show)}>
            <FcMenu />
          </button>
        </div>
        <div className={show ? "nav-links nav-links-show" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
            onClick={() => setShow(false)}
          >
            首页
          </Link>
          <span className="nav-split"></span>
          {links.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={() => setShow(false)}
            >
              {link.text}
            </Link>
          ))}
          <span className="nav-split"></span>

          <button className="small plain nav-link" onClick={() => {}}>
            <BiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
