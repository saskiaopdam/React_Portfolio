import styled from "styled-components/macro";

const Wrapper = styled.header`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 20px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  @media (min-width: 400px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const SubTitle = styled.h2`
  padding: 0 20px;
  font-size: 24px;
  font-weight: 600;
  color: white;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const Summary = styled.h3`
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Inner>
        <Title>PORTFOLIO</Title>
        <SubTitle>Saskia Opdam</SubTitle>
        <Summary>Junior Front-end Developer</Summary>
      </Inner>
    </Wrapper>
  );
}

export default Header;
