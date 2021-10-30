import styled from "styled-components/macro";

import Burger from "./Burger";
import BarMenu from "./BarMenu";

const Wrapper = styled.nav`
  flex-shrink: 0;
  padding: 20px;
  background: green;
`;

const Title = styled.h1`
  font-size: 32px;
  color: white;
  margin-bottom: 8px;
`;

const SubTitle = styled.h2`
  color: white;
`;

function NavBar({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <Title>Saskia Opdam</Title>
      <SubTitle>junior front-end developer</SubTitle>
      <Burger open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <BarMenu />
    </Wrapper>
  );
}

export default NavBar;
