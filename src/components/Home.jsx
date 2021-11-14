import styled from "styled-components/macro";

import portraitLightSquare from "../assets/portrait-layout/portraitLightSquare.jpg";

const Wrapper = styled.div`
  background: yellow;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  // display: flex;
  // flex-direction: column;
  // @media (min-width: 500px) {
  //   justify-content: center;
  // }
`;

const Figure = styled.figure`
  width: 50%;
  height: 50%;
  // background: green;
`;
// const Figure = styled.figure`
//   margin-top: 20px;
//   // background: pink;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 500px) {
//     margin-top: 0;
//   }
// `;

// const Image = styled.img`
//   width: 75%;
//   display: block;
//   border-radius: 50%;
//   @media (min-width: 500px) {
//     width: 50%;
//   }
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   font-weight: 500;
//   margin: 20px auto 0px;
// `;

function Home() {
  return (
    <Wrapper>
      <Figure>
        {/* <Image src={portraitLightSquare} alt="portrait photo of Saskia Opdam" />
        <Title>Junior front-end developer</Title> */}
      </Figure>
    </Wrapper>
  );
}

export default Home;
