import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: yellow;
`;

const Title = styled.h2`
  font-size: 22px;
  // background: green;
  margin: 22px auto;
`;

const Figure = styled.figure`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: pink;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (min-width: 500px) {
    max-width: 500px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  padding: 20px 10px 0px;
  &:hover {
    font-weight: bold;
  }
`;

const AnchorLink = styled.a`
  color: black;
  padding: 20px 10px 0px;
  &:hover {
    font-weight: bold;
  }
`;

const FigureWrapper = styled.div``;

// const Figure = styled.figure`
//   position: relative;
//   & + & {
//     margin-top: 20px;
//   }
//   // padding: 0 20px 20px 20px;
//   @media (min-width: 768px) {
//     width: 50%;
//   }
// `;

const Text = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
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

// const StyledLink = styled(Link)`
//   color: white;
// `;

// const AnchorLink = styled.a`
//   color: white;
//   &.contact {
//     color: white;
//     font-size: 24px;
//     padding: 12px;
//     background: darkblue;
//     opacity: 0.5;
//     display: flex;
//     align-items: center;
//     border-radius: 50%;
//     & + & {
//       margin-left: 24px;
//     }
//   }
// `;

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
    console.log("clicked");
  };

  const portraitClicked = id === "portrait";
  const toggle2Clicked = id === "toggle2";
  const lemonsClicked = id === "lemons";

  return (
    <Wrapper>
      {/* <Header> */}
      {/* <Title>Junior front-end developer</Title> */}
      {/* </Header> */}
      {/* <Links>
        <StyledLink to="/about">Info</StyledLink>
        <StyledLink to="/work">Projects</StyledLink>
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          Hobby
        </AnchorLink>
      </Links> */}{" "}
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      {/* <FigureWrapper role="navigation">
        <Figure>
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
          <Text
            id="portrait"
            onClick={handleClick}
            visible={visible}
            portraitClicked={portraitClicked}
          >
            <StyledLink to="/about">
              <Heading3>Info</Heading3>
            </StyledLink>
          </Text>
        </Figure> */}
      {/* <Figure>
          <Image src={toggle2} alt="screenshot of toggle2 project" />
          <Text
            id="toggle2"
            onClick={handleClick}
            visible={visible}
            toggle2Clicked={toggle2Clicked}
          >
            <StyledLink to="/work">
              <Heading3>Projects</Heading3>
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
              <Heading3>Hobby</Heading3>
            </AnchorLink>
          </Text>
        </Figure> */}
    </Wrapper>
  );
}

export default Home;
