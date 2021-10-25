import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  color: white;
  margin-bottom: 12px;
  @media (min-width: 400px) {
    text-align: center;
  }
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

const StyledLink = styled(Link)`
  background: pink;
  border-bottom: 1px solid yellow;
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 10px;
  display: block;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Home() {
  return (
    <Wrapper>
      <Inner>
        <Heading>Home</Heading>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Summary>full-stack development student at Winc Academy</Summary>
        <Summary>
          HTML | CSS | JavaScript | React | Redux | NodeJS
          <br /> Python | Flask | SQL
        </Summary>
      </Inner>
    </Wrapper>
  );
}

export default Home;
