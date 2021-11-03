import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  AiFillGithub,
  AiOutlineGithub,
  AiFillMail,
  AiOutlineInbox,
  AiFillLinkedin,
  AiOutlineLinkedin,
} from "react-icons/ai";

import colourtoggle2 from "../assets/coding-projects/colour-toggle-2.png";
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

const ImageRouteLink = styled(Link)`
  text-decoration: none;
  background: white;
  color: black;
  padding-top: 16px;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  padding-top: 16px;
  margin-bottom: 16px;
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

const ImageAction = styled.p`
  font-size: 18px;
  padding: 16px 0;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Social = styled.div`
  background: white;
  padding-top: 16px;
`;

const IconAnchorLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 32px;
  padding: 16px 0;
  margin-bottom: 16px;

  @media (min-width: 500px) {
    align-items: center;
  }
`;

const Icon = styled.div`
  height: 32px;
  color: darkgray;
`;

const IconAction = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;

function HomePage() {
  return (
    <Wrapper>
      <Title>junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React | Redux | NodeJS | Python | Flask | SQL
      </Subtitle>

      <ImageRouteLink to="/work">
        <Image src={colourtoggle2} alt="screenshot of colourtoggle project" />
        <ImageAction>take a look at my coding projects</ImageAction>
      </ImageRouteLink>

      <ImageAnchorLink
        href="https://www.behance.net/opdamsaski0505"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={lemons} alt="screenshot of lemons project" />
        <ImageAction>see my photo-editing projects</ImageAction>
      </ImageAnchorLink>

      <ImageRouteLink to="/about">
        <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        <ImageAction>learn more about me</ImageAction>
      </ImageRouteLink>

      <Social>
        <IconAnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            {/* <AiFillGithub /> */}
            <AiOutlineGithub />
          </Icon>
          <IconAction>check out my GitHub account</IconAction>
        </IconAnchorLink>
        <IconAnchorLink href="mailto:opdamsaskia@icloud.com">
          <Icon>
            {/* <AiFillMail /> */}
            <AiOutlineInbox />
          </Icon>
          <IconAction>drop me an e-mail</IconAction>
        </IconAnchorLink>
        <IconAnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            {/* <AiFillLinkedin /> */}
            <AiOutlineLinkedin />
          </Icon>
          <IconAction>connect with me on LinkedIn</IconAction>
        </IconAnchorLink>
      </Social>
    </Wrapper>
  );
}

export default HomePage;
