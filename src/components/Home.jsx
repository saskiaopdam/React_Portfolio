import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portrait-light-square.jpg";
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

const ImageWrapper = styled.div`
  flex-grow: 1;
  // background: white;
  display: flex;
  // flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 50%;
  display: block;
  border-radius: 50%;
  &.small {
    width: 25%;
    margin-left: 20px;
  }
  @media (min-width: 500px) {
    width: 50%;
  }
`;

function Home() {
  return (
    <Wrapper>
      <Title>Junior front-end developer</Title>
      <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
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
