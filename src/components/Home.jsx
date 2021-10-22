import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  padding: 20px;
  width: 100%;
  background: white;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: yellow;
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

function Home() {
  return (
    <Wrapper>
      <Inner>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Summary>
          full-stack development student at Winc Academy
          <br />
          HTML | CSS | JavaScript | React | Redux | NodeJS
          <br /> Python | Flask | SQL
        </Summary>
      </Inner>
    </Wrapper>
  );
}

export default Home;
