import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

import portraitDarkSquare from "../assets/portrait-layout/portrait-dark-square.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
`;

const FigureWrapper = styled.div`
  margin: 40px 0;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Figure = styled.figure`
  position: relative;
  &.round {
    width: 50%;
    @media (min-width: 768px) {
      width: 25%;
    }
  }

  &.portrait {
    width: 100%;
    & + & {
      margin-top: 20px;
    }
    @media (min-width: 768px) {
      width: 50%;
      & + & {
        margin-top: 0;
      }
      &:nth-child(odd) {
        padding-right: 40px;
      }
      &:nth-child(even) {
        padding-left: 40px;
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
  &.portraitLeft {
    @media (min-width: 768px) {
      right: 40px;
    }
  }
  &.portraitRight {
    @media (min-width: 768px) {
      left: 40px;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: ${({
    portraitMouseEnter,
    toggle2MouseEnter,
    lemonsMouseEnter,
    visible,
  }) =>
    portraitMouseEnter && visible
      ? "1"
      : toggle2MouseEnter && visible
      ? "1"
      : lemonsMouseEnter && visible
      ? "1"
      : "0"};
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
    display: block;
  }
  &:hover {
    opacity: 0.5;
  }
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          visible={visible}
          portraitMouseEnter={portraitMouseEnter}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            toggle2MouseEnter={toggle2MouseEnter}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            lemonsMouseEnter={lemonsMouseEnter}
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
      <AnchorLink href="mailto:opdamsaskia@icloud.com" className="contact">
        E-mail
      </AnchorLink>
      <AnchorLink
        href="https://www.linkedin.com/in/saskiaopdam/"
        target="_blank"
        rel="noreferrer"
        className="contact"
      >
        LinkedIn
      </AnchorLink>

      <AnchorLink
        href="https://github.com/saskiaopdam"
        target="_blank"
        rel="noreferrer"
        className="contact"
      >
        GitHub
      </AnchorLink>
    </Wrapper>
  );
}

export default Home;
