import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

// const Wrapper = styled.section`
//   position: relative;
//   top: 0;
//   left: 0;
//   z-index: ${({ hidden }) => (hidden ? "-1" : "0")};
//   padding: 20px;
//   width: 100%;
//   height: 100%;
//   background: white;
// `;
const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ hidden }) => (hidden ? "-1" : "1")};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  width: 100%;
  height: 100%;
  background: white;
`;
// background: ${ ({ onClick }) => (onClick ? "red" : "white") };

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: white;
  @media (min-width: 400px) {
    align-items: center;
  }
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: crimson;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 50%;
  max-width: 200px;
  margin-bottom: 20px;
`;

const Info = styled.p`
  opacity: 0.5;
  margin-bottom: 20px;
  margin-bottom: 40px;
`;

function About({ pageHidden, onPageClick }) {
  return (
    <Wrapper onClick={onPageClick} hidden={pageHidden}>
      <Inner>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
        <Heading>About</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>full-stack development student at Winc Academy</Info>
      </Inner>
    </Wrapper>
  );
}

export default About;
