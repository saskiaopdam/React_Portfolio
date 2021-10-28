import styled from "styled-components/macro";

import Brand from "./Brand";
import Burger from "./Burger";
import BarMenu from "./BarMenu";

const Wrapper = styled.nav`
  background: hotpink;
  color: white;
  padding: 10px;
  display: flex;
  @media (min-width: 500px) {
    background: white;
    color: hotpink;
  }
`;

function BarArea({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper role="navigation">
      <Brand />
      <Burger open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <BarMenu />
    </Wrapper>
  );
}

export default BarArea;
