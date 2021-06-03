import React, { useState } from "react";
import { Link } from "gatsby";
import { FcMenu } from "react-icons/fc";
import logo from "/src/assets/images/logo-long.png";

const links = [
  { text: "首页", url: "/" },
  { text: "服务与解决方案", url: "/services" },
  { text: "产品", url: "/products" },
  { text: "客户案例", url: "/examples" },
  { text: "关于", url: "/about" },
  { text: "加入我们", url: "/join" },
  { text: "联系", url: "/contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="tecwaver logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FcMenu />
          </button>
        </div>
        <div className={show ? "nav-links nav-links-show" : "nav-links"}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
