import styled from "styled-components/macro";

import Burger from "../Navigation/Burger";
import BarMenu from "../Navigation/BarMenu";

const Wrapper = styled.header`
  flex-shrink: 0;
  padding: 20px;
  background: green;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 8px;
`;

const SubTitle = styled.h2`
  color: white;
`;

function NavBarSpacer({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <Title>Saskia Opdam</Title>
      <SubTitle>junior front-end developer</SubTitle>
      <Burger open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <BarMenu />
    </Wrapper>
  );
}

export default NavBarSpacer;
