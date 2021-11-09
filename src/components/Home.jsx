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
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Subtitle = styled.p``;

const FigureWrapper = styled.div`
  margin-top: 40px;
  background: whitesmoke;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Figure = styled.figure`
  position: relative;
  & + & {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    width: 50%;
    & + & {
      margin-top: 0;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
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
  &.nonClick {
    background: mediumvioletred;
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;

const AnchorLink = styled.a`
  color: white;
`;

const Heading = styled.h3`
  font-size: 48px;
  font-weight: 400;
  color: white;
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
      <Title>Junior front-end developer learning full-stack</Title>
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
        <Figure>
          <Image
            src={lemons}
            alt="screenshot of lemons project"
            style={{ visibility: "hidden" }}
          />
          <Text className="nonClick">
            <AnchorLink href="mailto:opdamsaskia@icloud.com">
              <Heading>e-mail</Heading>
            </AnchorLink>

            {/* <AiOutlineInbox />
            <AnchorLink
              href="https://www.linkedin.com/in/saskiaopdam/"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <AiOutlineLinkedin />
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <AiOutlineGithub />
            </AnchorLink> */}
          </Text>
        </Figure>
      </FigureWrapper>
    </Wrapper>
  );
}

export default Home;
