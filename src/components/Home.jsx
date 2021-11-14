import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  background: yellow;

  display: flex;
  flex-wrap: wrap;
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
  width: 50%;
  height: 50%;
  background: pink;
  padding: 20px;
  display: flex;
  align-items: center;
  // @media (min-width: 500px) {
  //   margin-top: 0;
  // }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  // @media (min-width: 500px) {
  //   width: 25%;
  // }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  // margin: 20px auto 0px;
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
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>

      <Title>Junior front-end developer</Title>
      {/* </Figure> */}
    </Wrapper>
  );
}

export default Home;
