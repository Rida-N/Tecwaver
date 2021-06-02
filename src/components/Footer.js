import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footer>
      {/* <Section top>
        <h5>合作伙伴</h5>
      </Section> */}
      <Section center></Section>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: #333;
`;
const Section = styled.div`
  margin: ${(props) => (props.top ? "1rem" : "2rem")};
`;
export default Footer;
