import { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

import toggle2 from "../assets/coding-projects/toggle2.png";
import lemons from "../assets/photo-projects/lemons.jpg";
import portraitDark from "../assets/portraitDark.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  // @media (min-width: 600px) {
  //   text-align: center;
  // }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 9px;
  color: rgba(0, 0, 0, 0.5);
  // @media (min-width: 600px) {
  //   text-align: center;
  // }
`;

const FigureWrapper = styled.div`
  margin-top: 20px;
  background: whitesmoke;
`;

const Figure = styled.figure`
  position: relative;
  & + & {
    margin-top: 20px;
  }
  // &.middle {
  //   margin: 20px 0 0 auto;
  // }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  &.middle {
    margin: 0 0 0 auto;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({
    codingProjectsClicked,
    photoProjectsClicked,
    switchingCareersClicked,
    visible,
  }) =>
    codingProjectsClicked && visible
      ? "1"
      : photoProjectsClicked && visible
      ? "1"
      : switchingCareersClicked && visible
      ? "1"
      : "0"};
  transition: opacity 250ms linear;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 600px) {
    width: 50%;
    right: 0;
    opacity: 1;
    background: rebeccapurple;
    &.middle {
      left: 0;
    }
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;

const AnchorLink = styled.a`
  color: white;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
    console.log(event.target.id);
  };

  const codingProjectsClicked = id === "coding-projects";
  const photoProjectsClicked = id === "photo-projects";
  const switchingCareersClicked = id === "switching-careers";

  return (
    <Wrapper>
      <Title>junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React | Redux | NodeJS | Python | Flask | SQL
      </Subtitle>
      <FigureWrapper>
        <Figure>
          <Image src={toggle2} alt="screenshot of toggle2 project" />
          <Text
            id="coding-projects"
            onClick={handleClick}
            visible={visible}
            codingProjectsClicked={codingProjectsClicked}
          >
            <StyledLink to="/work">
              <Heading>coding projects</Heading>
            </StyledLink>
          </Text>
        </Figure>
        <Figure className="middle">
          <Image
            src={lemons}
            alt="screenshot of lemons project"
            className="middle"
          />
          <Text
            id="photo-projects"
            onClick={handleClick}
            visible={visible}
            photoProjectsClicked={photoProjectsClicked}
            className="middle"
          >
            <AnchorLink
              href="https://www.behance.net/opdamsaski0505"
              target="_blank"
              rel="noreferrer"
            >
              <Heading>photo projects</Heading>
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
          <Text
            id="switching-careers"
            onClick={handleClick}
            visible={visible}
            switchingCareersClicked={switchingCareersClicked}
          >
            <StyledLink to="/about">
              <Heading>switching careers</Heading>
            </StyledLink>
          </Text>
        </Figure>
      </FigureWrapper>

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
