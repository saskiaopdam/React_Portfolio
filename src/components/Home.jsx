import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import portraitDark from "../assets/portrait-layout/portraitDark.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-weight: 500;
  text-align: center;
`;

const FigureWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Figure = styled.figure`
  position: relative;
  & + & {
    margin-top: 20px;
  }
  padding: 0 20px 20px 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 20px;
  left: 20px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ portraitClicked, toggle2Clicked, lemonsClicked, visible }) =>
    portraitClicked && visible
      ? "1"
      : toggle2Clicked && visible
      ? "1"
      : lemonsClicked && visible
      ? "1"
      : "0"};
`;

const StyledLink = styled(Link)`
  color: white;
`;

const AnchorLink = styled.a`
  color: white;
  &.contact {
    color: white;
    font-size: 24px;
    padding: 12px;
    background: darkblue;
    opacity: 0.5;
    display: flex;
    align-items: center;
    border-radius: 50%;
    & + & {
      margin-left: 24px;
    }
  }
`;

const Heading3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  &.contact {
    font-weight: 700;
    text-align: center;
  }
`;

const ContactWrapper = styled.div`
  margin-top: 20px;
`;

const Icons = styled.div`
  margin: 40px 0 20px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  height: 24px;
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
  };

  const portraitClicked = id === "portrait";
  const toggle2Clicked = id === "toggle2";
  const lemonsClicked = id === "lemons";

  return (
    <Wrapper>
      <Title>Saskia Opdam</Title>
      <Subtitle>Junior front-end developer</Subtitle>
      <FigureWrapper role="navigation">
        <Figure>
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
          <Text
            id="portrait"
            onClick={handleClick}
            visible={visible}
            portraitClicked={portraitClicked}
          >
            <StyledLink to="/about">
              <Heading3>Background</Heading3>
            </StyledLink>
          </Text>
        </Figure>
        <Figure>
          <Image src={toggle2} alt="screenshot of toggle2 project" />
          <Text
            id="toggle2"
            onClick={handleClick}
            visible={visible}
            toggle2Clicked={toggle2Clicked}
          >
            <StyledLink to="/work">
              <Heading3>Coding projects</Heading3>
            </StyledLink>
          </Text>
        </Figure>
        <Figure>
          <Image src={lemons} alt="screenshot of lemons project" />
          <Text
            id="lemons"
            onClick={handleClick}
            visible={visible}
            lemonsClicked={lemonsClicked}
          >
            <AnchorLink
              href="https://www.behance.net/opdamsaski0505"
              target="_blank"
              rel="noreferrer"
            >
              <Heading3>Photo projects</Heading3>
            </AnchorLink>
          </Text>
        </Figure>
      </FigureWrapper>
      <ContactWrapper>
        <Heading3 className="contact">Contact</Heading3>
        <Icons>
          <AnchorLink href="mailto:opdamsaskia@icloud.com" className="contact">
            <AiFillMail aria-label="email" />
          </AnchorLink>
          <AnchorLink
            href="https://www.linkedin.com/in/saskiaopdam/"
            target="_blank"
            rel="noreferrer"
            className="contact"
          >
            <AiFillLinkedin aria-label="linkedin" />
          </AnchorLink>
          <AnchorLink
            href="https://github.com/saskiaopdam"
            target="_blank"
            rel="noreferrer"
            className="contact"
          >
            <AiFillGithub aria-label="github" />
          </AnchorLink>
        </Icons>
      </ContactWrapper>
    </Wrapper>
  );
}

export default Home;
