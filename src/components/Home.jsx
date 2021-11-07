import { useState } from "react";

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
  max-width: 480px;
  margin-top: 20px;
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
  background: green;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  // background: rgba(0, 0, 0, 0.8);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 250ms linear;
  &:hover {
    opacity: 1;
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;

const Heading = styled.h3`
  font-size: 54px;
  font-weight: 400;
`;

function Home() {
  const [visible, setVisible] = useState(false);
  // const [clicked, setClicked] = useState(false);

  const showHeading = () => {
    // setClicked(true);
    setVisible(!visible);
  };
  return (
    <Wrapper>
      <Title>junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React | Redux | NodeJS | Python | Flask | SQL
      </Subtitle>

      <Figure className="left">
        <Image src={toggle2} alt="screenshot of toggle2 project" />

        <Text onClick={showHeading} visible={visible}>
          <StyledLink to="/work">
            <Heading>coding projects</Heading>
          </StyledLink>
        </Text>
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
