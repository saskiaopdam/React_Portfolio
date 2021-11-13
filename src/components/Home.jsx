import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  // background: pink;
`;

const Figure = styled.figure`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 75%;
  display: block;
  border-radius: 50%;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto 20px;
`;

function Home() {
  return (
    <Wrapper>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
      </Figure>
      <Title>Junior front-end developer</Title>
    </Wrapper>
  );
}

export default Home;
