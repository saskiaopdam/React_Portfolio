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
import portrait from "../assets/portrait.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  // margin-top: 32px;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    align-self: center;
  }
`;

const Subtitle = styled.h2`
  margin-bottom: 12px;
  color: darkgray;
  @media (min-width: 500px) {
    align-self: center;
  }
`;

const Figure = styled.figure`
  background: yellow;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 0 auto;
  // @media (min-width: 1000px) {
  //   margin: 32px auto;
  //   height: 640.312px;
  // }
`;

const Text = styled.div`
  width: 100%;
  max-width: 480px;
  // display: block;
  margin: 0 auto;
  background: green;
  @media (min-width: 1000px) {
    height: 640.312px;
    margin: 32px auto;
  }
`;

// const ImageRouteLink = styled(Link)`
//   text-decoration: none;
//   background: white;
//   color: black;
//   margin-bottom: 32px;
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

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

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
  @media (min-width: 500px) {
    text-align: center;
  }
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
      <Image src={portrait} alt="portrait photo of Saskia Opdam" />

      {/* <Heading>coding projects</Heading>

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
      </ImageAnchorLink> */}

      {/* <Heading>me</Heading> */}
      {/* <ImageRouteLink to="/about"> */}
      {/* <ImageAnchorLabel>
          <Hovereffect>info</Hovereffect> {">"}
        </ImageAnchorLabel> */}
      {/* <Figure> */}
      {/* <Link to="/about">
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        </Link>
        <Link to="/about">
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        </Link> */}
      {/* <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        <Image src={portrait} alt="portrait photo of Saskia Opdam" /> */}
      {/* <Image src={portrait} alt="portrait photo of Saskia Opdam" /> */}
      {/* <Image src={portraitDark} alt="portrait photo of Saskia Opdam" /> */}
      {/* <Text>Text</Text> */}
      {/* </Figure> */}
      {/* </ImageRouteLink> */}

      {/* <Heading>contact</Heading>

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
      </Social> */}
    </Wrapper>
  );
}

export default Home;
