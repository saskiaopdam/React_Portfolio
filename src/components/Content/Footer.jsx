import styled from "styled-components/macro";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Wrapper = styled.footer`
  flex-shrink: 0;
  background: hotpink;
  font-size: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 500px) {
    background: white;
  }
`;

const Copyright = styled.small`
  display: block;
  font-size: 14px;
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 10px;
  color: indigo;
  opacity: 0.75;
`;

function Footer() {
  return (
    <Wrapper>
      <Copyright>© design by me</Copyright>
      {/* <Social>
        <a
          href="https://github.com/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a style={{ color: "indigo" }} href="mailto:opdamsaskia@icloud.com">
          <AiFillMail />
        </a>
      </Social> */}
    </Wrapper>
  );
}

export default Footer;
