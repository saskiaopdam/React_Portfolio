import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

const SectionHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;

const Photo = styled.img`
  width: 50%;
  max-width: 200px;
  margin-bottom: 20px;
  @media (min-width: 400px) {
    margin: 0 auto 20px;
  }
`;

const Summary = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Intro() {
  return (
    <Wrapper>
      <SectionHeader>Intro</SectionHeader>
      <Photo src={photo} alt="portrait photo of Saskia Opdam" />
      <Summary>full-stack development student at Winc Academy</Summary>
      <Summary>
        HTML | CSS | JavaScript | React | Redux | NodeJS
        <br /> Python | Flask | SQL
      </Summary>
    </Wrapper>
  );
}

export default Intro;
