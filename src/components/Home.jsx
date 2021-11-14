import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  // background: yellow;

  // display: flex;
  // flex-wrap: wrap;
  // display: flex;
  // flex-direction: column;
  // @media (min-width: 500px) {
  //   justify-content: center;
  // }
`;

// const Figure = styled.figure`
//   width: 50%;
//   height: 50%;
//   background: green;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Image = styled.img`
//   width: 100px;
//   display: block;
// `;

const Figure = styled.figure`
  width: 100%;
  height: 25%;
  // background: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.big {
    // background: white;
    height: 100%;
  }
`;

const FigureWrapper = styled.div`
  height: 50%;
  // background: yellow;
  display: flex;
`;

const Image = styled.img`
  width: 25%;
  display: block;
  border-radius: 50%;
  @media (min-width: 500px) {
    width: 25%;
  }
  &.big {
    width: 50%;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const Heading3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

function Home() {
  return (
    <Wrapper>
      {/* <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure> */}
      {/* <Figure> */}
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
        <Title>Junior front-end developer</Title>
      </Figure>

      <FigureWrapper>
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
      </FigureWrapper>

      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
        <Heading3>Contact</Heading3>
      </Figure>
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
