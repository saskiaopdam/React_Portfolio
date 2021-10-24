import styled from "styled-components/macro";

const Wrapper = styled.header`
  flex-shrink: 0;
  padding: 20px;
  @media (min-width: 400px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  color: white;
  margin-bottom: 16px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const SubTitle = styled.h2`
  font-weight: 500;
  color: white;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Title>SASKIA OPDAM</Title>
      <SubTitle>Junior Front-end Developer</SubTitle>
    </Wrapper>
  );
}

export default Header;
