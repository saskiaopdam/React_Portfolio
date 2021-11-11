import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

// import toggle2 from "../assets/toggle2.png";
import toggle2 from "../assets/coding-projects/toggle2.png";
import lemons from "../assets/photo-projects/lemons.jpg";
import portraitDark from "../assets/portraitDark.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const Portrait = styled.img`
  width: 100%;
  max-width: 240px;
  display: block;
  margin: 40px auto;
`;

const Heading2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
  text-align: center;
`;

const Paragraph = styled.p`
  margin: 0 auto 16px auto;
  line-height: 1.25;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 240px;
`;

const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: yellow;
  padding: 20px;
  background: white;
`;

const Figure = styled.figure`
  position: relative;
  width: 50%;
  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({
    codingClicked,
    photoEditingClicked,
    switchingCareersClicked,
    visible,
  }) =>
    codingClicked && visible
      ? "1"
      : photoEditingClicked && visible
      ? "1"
      : switchingCareersClicked && visible
      ? "1"
      : "0"};
  // transition: opacity 250ms linear;
  // &:hover {
  //   opacity: 1;
  // }
  &.nonClick {
    background: mediumvioletred;
    opacity: 1;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;

const AnchorLink = styled.a`
  color: white;
`;

const Heading = styled.h2`
  font-weight: 400;
  color: white;
  text-align: center;
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
  };

  const codingClicked = id === "coding";
  const photoEditingClicked = id === "photo-editing";
  const infoClicked = id === "info";

  return (
    <Wrapper>
      <Title>Junior front-end developer</Title>
      <Portrait src={portraitDark} alt="portrait photo of Saskia Opdam" />
      {/* <Heading2>Full-stack development student</Heading2> */}
      <Paragraph>
        Remotely following a <b>full-stack development</b> course at Winc
        Academy, comprising:{" "}
        <b>HTML, CSS, JavaScript, React/Redux, NodeJS, Python, Flask and SQL</b>
        . Working on the final front-end assignment, the student dashboard: a
        single page React application showing data from a Google Sheet in a
        chart. At the moment looking for a junior front-end position to broaden
        skills, while continuing the back-end part of the course.
      </Paragraph>
      <Heading2>Projects</Heading2>
      <Paragraph>
        This portfolio shows the Winc Academy front-end assignments, as well as
        two projects of my own. Click on the image to see an overview.
      </Paragraph>

      <FigureWrapper>
        <Figure>
          <Image src={toggle2} alt="screenshot of toggle2 project" />
          <Text
            id="coding"
            onClick={handleClick}
            visible={visible}
            codingClicked={codingClicked}
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
            id="photo-editing"
            onClick={handleClick}
            visible={visible}
            photoEditingClicked={photoEditingClicked}
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
      </FigureWrapper>
      {/* <FigureWrapper>
        <Figure>
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
          <Text
            id="info"
            onClick={handleClick}
            visible={visible}
            infoClicked={infoClicked}
          >
            <StyledLink to="/about">
              <Heading>info</Heading>
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
              <Heading>contact</Heading>
            </AnchorLink> */}
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
      {/* </Text>
        </Figure>
      </FigureWrapper> */}
    </Wrapper>
  );
}

export default Home;
