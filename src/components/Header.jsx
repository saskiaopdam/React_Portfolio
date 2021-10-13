import styled from "styled-components/macro";

const Wrapper = styled.header`
  background-color: darkgrey;
  color: white;
  padding: 60px;
  flex-shrink: 0;
`;

const Title = styled.h1`
  text-align: center;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Saskia Opdam</Title>
    </Wrapper>
  );
}

export default Header;
