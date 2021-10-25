import styled from "styled-components/macro";

import Something from "./Something";

const Wrapper = styled.main`
  flex-grow: 1;
  background: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;
  background: hotpink;

  width: 100%;
  height: 100%;

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const NavbarSpace = styled.div`
  height: 96px;
  background: hotpink;
`;

function Content() {
  return (
    <Wrapper>
      <Inner>
        <NavbarSpace>Navbarspace</NavbarSpace>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
        <Something>Something</Something>
      </Inner>
    </Wrapper>
  );
}

export default Content;
