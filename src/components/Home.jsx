import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

import portrait from "../assets/portrait.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    align-self: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  opacity: 0.5;
  @media (min-width: 768px) {
    align-self: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 16px 0;
  @media (min-width: 768px) {
    margin: 16px auto;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-self: center;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 8px;
  color: black;
  text-decoration: none;
  @media (min-width: 768px) {
    margin-bottom: 0;
    & + & {
      margin-left: 32px;
    }
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const Social = styled.div`
  padding: 12px 0;
  background: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const IconAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  // flex-direction: column;
  font-size: 24px;
  & + & {
    margin-top: 24px;
  }

  @media (min-width: 500px) {
    margin-bottom: 0;
    & + & {
      margin-top: 0;
      margin-left: 36px;
    }
  }
`;

const Icon = styled.div`
  height: 24px;
  color: royalblue;
`;

const IconAnchorLabel = styled.p`
  font-size: 14px;
  margin-left: 4px;
`;

function Home() {
  return (
    <Wrapper>
      <Title>junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React | Redux | NodeJS | Python | Flask | SQL
      </Subtitle>
      <Link to="/about">
        <Image src={portrait} alt="portrait photo of Saskia Opdam" />
      </Link>
      <Links>
        <StyledLink to="/work">
          {">"} <Hovereffect>work</Hovereffect>
        </StyledLink>
        <StyledLink to="/about">
          {">"} <Hovereffect>about</Hovereffect>
        </StyledLink>
      </Links>

      {/* <Social>
        <IconAnchorLink href="mailto:opdamsaskia@icloud.com">
          <Icon>
            <AiOutlineInbox />
          </Icon>
          <IconAnchorLabel>
            <Hovereffect>e-mail</Hovereffect>
          </IconAnchorLabel>
        </IconAnchorLink>
        <IconAnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            <AiOutlineLinkedin />
          </Icon>
          <IconAnchorLabel>
            <Hovereffect>connect</Hovereffect>
          </IconAnchorLabel>
        </IconAnchorLink>
        <IconAnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            <AiOutlineGithub />
          </Icon>
          <IconAnchorLabel>
            <Hovereffect>GitHub</Hovereffect>
          </IconAnchorLabel>
        </IconAnchorLink>
      </Social> */}
    </Wrapper>
  );
}

export default Home;
