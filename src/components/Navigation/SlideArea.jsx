import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import SlideMenu from "./SlideMenu";

const Wrapper = styled.nav`
  flex-grow: 1;
  background: transparent;
  color: black;
  position: relative;
`;

function SlideArea({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper role="navigation">
      <SlideMenu open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  );
}

export default SlideArea;
