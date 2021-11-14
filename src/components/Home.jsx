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
  margin: 20px 0;
`;

const Figure = styled.figure`
  position: relative;
  width: 50%;
  margin: 0 auto;
  & + & {
    margin-top: 20px;
  }
  &.round {
    margin: 40px 0;
  }
  @media (min-width: 768px) {
    width: 25%;
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
  width: 100%;
  height: 100%;
  top: 0;
  &.round {
    border-radius: 50%;
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
      <FigureWrapper>
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

        <Figure>
          <Link to="/work">
            <Image src={toggle2} alt="screenshot of toggle2 project" />
          </Link>
          <Text
            id="toggle2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            toggle2MouseEnter={toggle2MouseEnter}
          >
            <StyledLink to="/work">Coding projects</StyledLink>
          </Text>
        </Figure>

        <Figure>
          <a
            href="https://www.behance.net/opdamsaski0505"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={lemons} alt="screenshot of lemons project" />
          </a>
          <Text
            id="lemons"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            visible={visible}
            lemonsMouseEnter={lemonsMouseEnter}
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
    </Wrapper>
  );
}

export default Home;
