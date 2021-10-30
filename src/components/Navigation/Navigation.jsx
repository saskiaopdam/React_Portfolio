import { useState } from "react";

import styled from "styled-components/macro";

import SlideArea from "./SlideArea";
import NavBar from "./NavBar";
import FooterOverlay from "./FooterOverlay";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1000px;
  margin: 0 auto;
  background: transparent;
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Inner>
        <NavBar open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
        <SlideArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
        <FooterOverlay />
      </Inner>
    </Wrapper>
  );
}

export default Navigation;
