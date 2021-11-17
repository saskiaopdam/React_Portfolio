import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";
import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

import portraitDarkSquare from "../assets/portrait-layout/portrait-dark-square.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
  text-align: center;
`;

const FigureWrapper = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Figure = styled.figure`
  position: relative;
  &.round {
    width: 50%;
    margin: 40px auto;
    @media (min-width: 768px) {
      width: 25%;
    }
  }

  &.portrait {
    width: 100%;
    // padding: 0 20px 20px 20px;
    & + & {
      margin-top: 20px;
    }
    @media (min-width: 768px) {
      width: 50%;
      & + & {
        margin-top: 0;
      }
      &:nth-child(odd) {
        padding-right: 20px;
      }
      &:nth-child(even) {
        padding-left: 20px;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  &.round {
    border-radius: 50%;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &.round {
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    &.portraitLeft {
      right: 20px;
    }
    &.portraitRight {
      left: 20px;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: ${({
    portraitClicked,
    toggle2Clicked,
    lemonsClicked,
    portraitMouseEnter,
    toggle2MouseEnter,
    lemonsMouseEnter,
    portraitMouseLeave,
    toggle2MouseLeave,
    lemonsMouseLeave,
    visible,
  }) =>
    portraitClicked && visible
      ? "1"
      : toggle2Clicked && visible
      ? "1"
      : lemonsClicked && visible
      ? "1"
      : portraitMouseEnter && visible
      ? "1"
      : toggle2MouseEnter && visible
      ? "1"
      : lemonsMouseEnter && visible
      ? "1"
      : portraitMouseLeave && visible
      ? "0"
      : toggle2MouseLeave && visible
      ? "0"
      : lemonsMouseLeave && visible
      ? "0"
      : "0"};

  transition: opacity 0.7s ease;
`;

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    opacity: 0.5;
  }
`;

const AnchorLink = styled.a`
  color: white;
  &.contact {
    color: black;
    padding: 20px 20px 0 20px;
    font-size: 24px;
    color: darkblue;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
  };

  const handleMouseEnter = (event) => {
    setId(event.target.id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const portraitMouseEnter = id === "portrait";
  const toggle2MouseEnter = id === "toggle2";
  const lemonsMouseEnter = id === "lemons";
  const portraitMouseLeave = id === "portrait";
  const toggle2MouseLeave = id === "toggle2";
  const lemonsMouseLeave = id === "lemons";
  const portraitClicked = id === "portrait";
  const toggle2Clicked = id === "toggle2";
  const lemonsClicked = id === "lemons";

  return (
    <Wrapper>
      <Title>Junior front-end developer learning full-stack</Title>
      <SubTitle>
        HTML | CSS | JavaScript | React/Redux | NodeJS | Python | Flask | SQL
      </SubTitle>
      <Figure className="round">
        <Link to="/about">
          <Image
            src={portraitDarkSquare}
            alt="portrait photo of Saskia Opdam"
            className="round"
          />
        </Link>
        <Text
          id="portrait"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          visible={visible}
          portraitClicked={portraitClicked}
          portraitMouseEnter={portraitMouseEnter}
          portraitMouseLeave={portraitMouseLeave}
          className="round"
        >
          <StyledLink to="/about">Info</StyledLink>
        </Text>
      </Figure>
      <FigureWrapper>
        <Figure className="portrait">
          <Link to="/work">
            <Image
              src={toggle2}
              alt="screenshot of toggle2 project"
              className="portrait"
            />
          </Link>
          <Text
            id="toggle2"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            toggle2Clicked={toggle2Clicked}
            toggle2MouseEnter={toggle2MouseEnter}
            toggle2MouseLeave={toggle2MouseLeave}
            className="portraitLeft"
          >
            <StyledLink to="/work">Coding projects</StyledLink>
          </Text>
        </Figure>

        <Figure className="portrait">
          <a
            href="https://www.behance.net/opdamsaski0505"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={lemons}
              alt="screenshot of lemons project"
              className="portrait"
            />
          </a>
          <Text
            id="lemons"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            lemonsClicked={lemonsClicked}
            lemonsMouseEnter={lemonsMouseEnter}
            lemonsMouseLeave={lemonsMouseLeave}
            className="portraitRight"
          >
            <AnchorLink
              href="https://www.behance.net/opdamsaski0505"
              target="_blank"
              rel="noreferrer"
            >
              Photo projects
            </AnchorLink>
          </Text>
        </Figure>
      </FigureWrapper>
      <Heading3>Contact</Heading3>
      <ContactLinks>
        <AnchorLink
          href="mailto:opdamsaskia@icloud.com"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <AiOutlineInbox aria-label="e-mail" />
        </AnchorLink>
        <AnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <AiOutlineLinkedin aria-label="linkedin" />
        </AnchorLink>
        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <AiOutlineGithub aria-label="github" />
        </AnchorLink>
      </ContactLinks>
    </Wrapper>
  );
}

export default Home;
