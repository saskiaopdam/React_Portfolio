import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

import portraitDarkSquare from "../assets/portrait-layout/portrait-dark-square.jpg";
import toggle2Square from "../assets/portrait-layout/toggle2-square.png";
import lemonsSquare from "../assets/portrait-layout/lemons-square.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 11px;
`;

const Figure = styled.figure`
  position: relative;
  width: 50%;
  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  &.small {
    width: 25%;
    & + & {
      margin-top: 20px;
    }
    &:last-child {
      transform: translateX(-200%);
    }
    @media (min-width: 768px) {
      width: 12.5%;
    }
  }
`;

const ImageWrapper = styled.div`
  flex-grow: 1;
  // background: white;
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  align-items: flex-end;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 50%;
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
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AnchorLink = styled.a`
  color: white;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-size: 24px;
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = (event) => {
    setId(event.target.id);
    setVisible(true);
    // alert(`enter ${id}`);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    // alert(`leave ${id}`);
  };

  const portraitClicked = id === "portrait";
  const toggle2Clicked = id === "toggle2";
  const lemonsClicked = id === "lemons";
  const portraitMouseEnter = id === "portrait";
  const toggle2MouseEnter = id === "toggle2";

  return (
    <Wrapper>
      <Title>Junior front-end developer</Title>
      <Figure>
        <Link to="/about">
          <Image
            src={portraitDarkSquare}
            alt="portrait photo of Saskia Opdam"
          />
        </Link>
        <Text
          id="portrait"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          visible={visible}
          portraitMouseEnter={portraitMouseEnter}
        >
          <StyledLink to="/about">About</StyledLink>
        </Text>
      </Figure>

      <ImageWrapper>
        <Image
          src={toggle2Square}
          alt="screenshot of toggle2 project"
          className="small"
        />
        <Image
          src={lemonsSquare}
          alt="screenshot of lemons project"
          className="small"
        />
      </ImageWrapper>
      {/* <Figure> */}
      {/* <Figure> */}
      {/* <Image
        src={toggle2Square}
        alt="screenshot of toggle2 project"
        className="small"
      />
      <Image
        src={lemonsSquare}
        alt="screenshot of lemons project"
        className="small"
      /> */}
      {/* </Figure> */}
      {/* <FigureWrapper>
        <Figure className="big">
          <Image
            src={toggle2}
            alt="screenshot of toggle2 project"
            className="big"
          />
          <Heading3>Programming</Heading3>
        </Figure>

        <Figure className="big">
          <Image
            src={lemons}
            alt="screenshot of lemons project"
            className="big"
          />
          <Heading3>Photo-editing</Heading3>
        </Figure>
      </FigureWrapper> */}
      {/* <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
        <Heading3>Contact</Heading3>
      </Figure> */}
      {/* <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure> */}
      {/* </Figure> */}
    </Wrapper>
  );
}

export default Home;
