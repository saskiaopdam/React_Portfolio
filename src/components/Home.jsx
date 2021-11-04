import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

import toggle2 from "../assets/coding-projects/toggle2.png";
import lemons from "../assets/photo-projects/lemons.jpg";
import portraitDark from "../assets/portrait-photos/portraitDark.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  margin-bottom: 52px;
  color: darkgray;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageRouteLink = styled(Link)`
  text-decoration: none;
  background: white;
  color: black;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  // padding-top: 16px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 460px;
  display: block;
  margin: 0 auto;
`;

const ImageAnchorLabel = styled.p`
  color: royalblue;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Hovereffect = styled.span`
  &:hover {
    text-decoration: underline;
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

      <Heading>coding projects</Heading>

      <ImageRouteLink to="/work">
        <ImageAnchorLabel>
          <Hovereffect>overview</Hovereffect> {">"}
        </ImageAnchorLabel>
        <Image src={toggle2} alt="screenshot of toggle2 project" />
      </ImageRouteLink>

      <Heading>photo projects</Heading>

      <ImageAnchorLink
        href="https://www.behance.net/opdamsaski0505"
        target="_blank"
        rel="noreferrer"
      >
        <ImageAnchorLabel>
          <Hovereffect>overview</Hovereffect> {">"}
        </ImageAnchorLabel>
        <Image src={lemons} alt="screenshot of lemons project" />
      </ImageAnchorLink>

      <Heading>me</Heading>
      <ImageRouteLink to="/about">
        <ImageAnchorLabel>
          <Hovereffect>info</Hovereffect> {">"}
        </ImageAnchorLabel>
        <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
      </ImageRouteLink>

      <Heading>contact</Heading>

      <Social>
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
        </IconAnchorLink>{" "}
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
      </Social>
    </Wrapper>
  );
}

export default Home;
