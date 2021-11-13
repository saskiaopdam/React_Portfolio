import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Figure = styled.figure`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: orange;
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
  font-size: 18px;
  font-weight: 500;
  margin: 20px auto;
`;

function Home() {
  return (
    <Wrapper>
      <Figure>
        <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
        <Title>Junior front-end developer</Title>
      </Figure>
    </Wrapper>
  );
}

export default Home;
