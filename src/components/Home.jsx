import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

import portraitDark from "../assets/portraitDark.jpg";
import lemons from "../assets/photo-projects/lemons.jpg";
import toggle2 from "../assets/coding-projects/toggle2.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    align-self: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 9px;
  color: rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    align-self: center;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin-top: 20px;
  max-width: 480px;
  @media (min-width: 768px) {
    align-self: center;
  }
  &.left {
    @media (min-width: 768px) {
      left: -120px;
    }
  }
  &.right {
    @media (min-width: 768px) {
      left: 120px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Heading = styled.h3`
  position: relative;
  bottom: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-weight: 400;
  opacity: 0;
  transition: opacity 250ms linear;
  &:hover {
    opacity: 1;
  }
`;
// const Heading = styled.h3`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.8);
//   color: white;
//   font-weight: 400;
//   opacity: 0;
//   transition: opacity 250ms linear;
//   &:hover {
//     opacity: 1;
//   }
// `;

function Home() {
  return (
    <Wrapper>
      <Title>junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React | Redux | NodeJS | Python | Flask | SQL
      </Subtitle>

      <Figure className="left">
        <Image src={toggle2} alt="screenshot of toggle2 project" />
        <Link to="/work">
          <Heading>coding projects</Heading>
        </Link>
      </Figure>

      <Figure className="right">
        <Image src={lemons} alt="screenshot of lemons project" />
        <a
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          <Heading>photo projects</Heading>
        </a>
      </Figure>

      <Figure className="left">
        <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        <Link to="/about">
          <Heading>switching careers</Heading>
        </Link>
      </Figure>

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
