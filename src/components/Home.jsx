import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineInbox,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import portraitDark from "../assets/portraitDark.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-bottom: 12px;
  font-weight: 500;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 40px auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Heading2 = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.information {
    margin-bottom: 40px;
  }
  &.contact {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  &.information {
    margin-bottom: 9px;
  }
`;

const AnchorLink = styled.a`
  color: black;
  &.contact {
    display: flex;
    flex-direction: column;
    font-size: 32px;
    align-items: center;
    & + & {
      margin-left: 32px;
    }
    @media (min-width: 400px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const Icon = styled.div`
  height: 32px;
  margin-right: 8px;
  color: royalblue;
`;

function Home() {
  return (
    <Wrapper>
      <Title>Junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React/Redux | NodeJS | Python | Flask | SQL
      </Subtitle>
      <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
      <Links className="information">
        <StyledLink to="/about" className="information">
          <Heading3>Background</Heading3>
        </StyledLink>
        <StyledLink to="/work" className="information">
          <Heading3>Coding projects</Heading3>
        </StyledLink>
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          <Heading3>Photo projects</Heading3>
        </AnchorLink>
      </Links>

      <Heading2>Contact</Heading2>
      <Links className="contact">
        <AnchorLink href="mailto:opdamsaskia@icloud.com" className="contact">
          <Icon>
            <AiOutlineInbox />
          </Icon>
          <Heading3>mail</Heading3>
        </AnchorLink>
        <AnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <Icon>
            <AiOutlineLinkedin />
          </Icon>
          <Heading3>linkedin</Heading3>
        </AnchorLink>
        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <Icon>
            <AiOutlineGithub />
          </Icon>
          <Heading3>github</Heading3>
        </AnchorLink>
      </Links>
    </Wrapper>
  );
}

export default Home;
